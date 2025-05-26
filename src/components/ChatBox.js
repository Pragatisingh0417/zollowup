import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { X } from "lucide-react";
import moment from "moment";

const socket = io("http://localhost:5000", {
    withCredentials: true,
});

const ChatBox = ({ currentUser }) => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [typing, setTyping] = useState(false);
    const [chatEnded, setChatEnded] = useState(false);

    useEffect(() => {
        if (!currentUser?.name) return;

        socket.on("chat_message", ({ sender, receiver, message, createdAt }) => {
            setMessages((prev) => [...prev, { sender, receiver, message, createdAt: createdAt || new Date() }]);
        });

        socket.on("typing", ({ sender }) => {
            if (sender !== currentUser.name) {
                setTyping(true);
                setTimeout(() => setTyping(false), 2000);
            }
        });

        return () => {
            socket.off("chat_message");
            socket.off("typing");
        };
    }, [currentUser?.name]);

    useEffect(() => {
        if (isOpen && currentUser?.name && !chatEnded) {
            fetch(`http://localhost:5000/api/chat/${currentUser.name}`)
                .then((res) => res.json())
                .then((data) => {
                    if (Array.isArray(data)) {
                        const withTimestamps = data.map(msg => ({
                            ...msg,
                            createdAt: msg.createdAt || new Date()
                        }));
                        setMessages(withTimestamps);
                    }
                })
                .catch((err) => {
                    console.error("❌ Chat load failed:", err);
                });
        }
    }, [isOpen, currentUser?.name, chatEnded]);

    const sendMessage = () => {
        if (!input.trim() || !currentUser?.name) return;

        const messagePayload = {
            sender: currentUser.name,
            receiver: "Admin",
            message: input,
            createdAt: new Date().toISOString()
        };

        socket.emit("chat_message", messagePayload);
        setInput("");
    };

    const endChat = () => {
        setMessages([]);
        setInput("");
        setChatEnded(true);
        setIsOpen(false);
    };

    if (!currentUser?.name) {
        return (
            <div className="fixed bottom-5 right-5 bg-white px-4 py-2 rounded-lg shadow text-gray-600 flex gap-2 items-center">
                <span className="animate-spin text-blue-600">⏳</span>
                <span className="text-sm">Loading chat...</span>
            </div>
        );
    }

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-5 right-5 bg-blue-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700 z-50"
                title="Live Chat"
            >
                💬
            </button>

            {isOpen && (
                <div className="fixed bottom-40 right-6 w-[26rem] h-80 bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden z-[9999] animate-fade-in">
                    <div className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
                        <span className="font-semibold text-base">Live Chat</span>
                        <div className="flex items-center gap-3">
                            <button onClick={endChat} className="text-xs text-white hover:underline">
                                End Chat
                            </button>
                            <button onClick={() => setIsOpen(false)} className="hover:text-gray-300">
                                <X size={18} />
                            </button>
                        </div>
                    </div>

                    {typing && (
                        <div className="text-sm text-gray-500 italic px-3 py-1">Typing...</div>
                    )}

                    <div className="h-64 overflow-y-auto px-3 py-2 bg-gray-50 space-y-2">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex ${msg.sender === currentUser.name ? "justify-end" : "justify-start"}`}
                            >
                                <div className="flex flex-col max-w-xs text-sm">
                                    <div
                                        className={`px-3 py-2 rounded-lg shadow ${msg.sender === currentUser.name
                                            ? "bg-blue-500 text-white self-end"
                                            : "bg-gray-200 text-gray-800 self-start"}`}
                                    >
                                        {msg.message}
                                    </div>
                                    <span className="text-[10px] text-gray-400 mt-1 self-end">
                                        {moment(msg.createdAt).format("h:mm A")}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center p-3 border-t bg-white">
                        <input
                            type="text"
                            className="flex-1 border border-gray-300 rounded-full px-3 py-1 text-sm focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Type your message..."
                            value={input}
                            onChange={(e) => {
                                setInput(e.target.value);
                                if (currentUser?.name) {
                                    socket.emit("typing", { sender: currentUser.name });
                                }
                            }}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        />
                        <button
                            className="ml-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-full text-sm"
                            onClick={sendMessage}
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatBox;
