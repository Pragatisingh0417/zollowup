import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import moment from "moment";

const socket = io("http://localhost:5000", {
  withCredentials: true,
});

const AdminChatPanel = () => {
  const [messages, setMessages] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/chat/")
      .then((res) => res.json())
      .then(setMessages)
      .catch((err) => console.error("Failed to load messages:", err));
  }, []);

  const grouped = messages.reduce((acc, msg) => {
    const user = msg.sender !== "Admin" ? msg.sender : msg.receiver;
    acc[user] = acc[user] || [];
    acc[user].push(msg);
    return acc;
  }, {});

  const sendReply = () => {
    if (!input.trim() || !selectedUser) return;

    socket.emit("chat_message", {
      sender: "Admin",
      receiver: selectedUser,
      message: input,
      createdAt: new Date().toISOString(),
    });

    setInput("");
  };

  return (
    <div className="p-4 flex gap-6">
      {/* User List */}
      <div className="w-1/4 border-r">
        <h2 className="font-bold mb-2">Users</h2>
        {Object.keys(grouped).map((user) => (
          <div
            key={user}
            className={`cursor-pointer p-2 rounded ${selectedUser === user ? "bg-blue-100" : ""}`}
            onClick={() => setSelectedUser(user)}
          >
            {user}
          </div>
        ))}
      </div>

      {/* Chat Section */}
      <div className="flex-1">
        <h2 className="font-bold mb-2">Chat with: {selectedUser || "None"}</h2>
        <div className="h-64 overflow-y-auto border p-2 bg-gray-50 rounded">
          {(grouped[selectedUser] || []).map((msg, i) => (
            <div key={i} className="mb-2">
              <div className={`text-sm ${msg.sender === "Admin" ? "text-right" : "text-left"}`}>
                <span className="font-semibold">{msg.sender}:</span> {msg.message}
                <div className="text-[10px] text-gray-500">
                  {moment(msg.createdAt).format("h:mm A")}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        {selectedUser && (
          <div className="mt-4 flex items-center gap-2">
            <input
              className="flex-1 border px-3 py-1 rounded"
              placeholder="Type reply..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendReply()}
            />
            <button
              className="bg-blue-600 text-white px-4 py-1 rounded"
              onClick={sendReply}
            >
              Send
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminChatPanel;
