import React, { useEffect, useState } from "react";

const AdminMaidTable = () => {
  const [maids, setMaids] = useState([]);

  useEffect(() => {
    const fetchMaids = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/maids");
        const data = await res.json();
        setMaids(data);
      } catch (err) {
        console.error("Error fetching maids:", err);
      }
    };

    fetchMaids();
  }, []);

  return (
    <div className="overflow-x-auto p-6">
      <h2 className="text-2xl font-bold mb-4">All Maids</h2>
      <table className="min-w-full border border-gray-300 bg-white shadow">
        <thead className="bg-gray-100 text-sm font-medium">
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Age</th>
            <th className="p-2 border">Experience</th>
            <th className="p-2 border">Religion</th>
            <th className="p-2 border">Language</th>
            <th className="p-2 border">Speciality</th>
            <th className="p-2 border">State</th>
            <th className="p-2 border">Marital Status</th>
            <th className="p-2 border">Available Hours</th>
            <th className="p-2 border">Price/Hour</th>
            <th className="p-2 border">Image</th>
            <th className="p-2 border">Video</th>
          </tr>
        </thead>
        <tbody>
          {maids.map((maid) => (
            <tr key={maid._id} className="text-sm text-center">
              <td className="p-2 border">{maid.name}</td>
              <td className="p-2 border">{maid.age}</td>
              <td className="p-2 border">{maid.experience}</td>
              <td className="p-2 border">{maid.religion}</td>
              <td className="p-2 border">{maid.language || "—"}</td>
              <td className="p-2 border">{maid.speciality || "—"}</td>
              <td className="p-2 border">{maid.state || "—"}</td>
              <td className="p-2 border">{maid.maritalStatus || "—"}</td>
              <td className="p-2 border">{maid.availableHours?.join(", ")}</td>
              <td className="p-2 border">{maid.pricePerHour}</td>
              <td className="p-2 border">
                {maid.image ? (
                  <img
                    src={`http://localhost:5000${maid.image}`}
                    alt="maid"
                    className="w-12 h-12 rounded object-cover"
                  />
                ) : (
                  "—"
                )}
              </td>
              <td className="p-2 border">
                {maid.videoUrl ? (
                  <video src={`http://localhost:5000${maid.videoUrl}`} className="w-24 h-14" controls />
                ) : (
                  "—"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminMaidTable;
