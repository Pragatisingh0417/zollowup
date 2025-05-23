import { useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000"); // Replace with your backend URL

const SocketTester = () => {
  useEffect(() => {
    // Receive message from server
    socket.on("welcome", (msg) => {
      console.log("✅ Message from server:", msg);
    });

    // Send message to server
    socket.emit("hello", "Hello from frontend!");

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">🔌 Socket.io Test Component</h2>
      <p>Open console to see messages.</p>
    </div>
  );
};

export default SocketTester;
