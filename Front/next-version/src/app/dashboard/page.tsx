"use client";

import { useEffect, useState } from "react";

interface Certificate {
  name: string;
  sap: string;
  email: string;
  issuedAt: string;
  issuer?: string;
}

export default function DashboardPage() {
  const [userData, setUserData] = useState<Certificate[] | null>(null);
  const [sap, setSap] = useState("");

  const handleLoad = async () => {
    if (!sap) return;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/verify`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sap }),
    });

    const result = await res.json();
    if (result.success) {
      setUserData([result.data]); // store as array for UI
    } else {
      setUserData([]); // no certificate found
    }
  };

  return (
    <div className="text-white flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-10 mt-6">My Certificates</h1>

      <div className="mb-10 flex gap-4">
        <input
          type="text"
          placeholder="Enter your SAP ID"
          value={sap}
          onChange={(e) => setSap(e.target.value)}
          className="p-3 rounded text-black w-72"
        />
        <button
          onClick={handleLoad}
          className="bg-blue-600 hover:bg-blue-700 px-6 rounded text-white font-semibold"
        >
          Load
        </button>
      </div>

      {userData === null && <p className="text-gray-300">Enter SAP to load certificate</p>}

      {userData?.length === 0 && (
        <p className="bg-red-300 text-red-900 py-4 px-8 rounded-xl shadow-lg">
          No certificates found for this SAP ID
        </p>
      )}

      {userData && userData.length > 0 && (
        <div className="bg-white text-black p-8 rounded-xl shadow-xl w-4/5">
          <h2 className="text-2xl font-bold mb-8 text-center">Certificate Details</h2>

          <div className="grid grid-cols-2 gap-6 text-lg">
            <div><strong>Name:</strong> {userData[0].name}</div>
            <div><strong>SAP:</strong> {userData[0].sap}</div>
            <div><strong>Email:</strong> {userData[0].email}</div>
            <div><strong>Issued On:</strong> {new Date(userData[0].issuedAt).toLocaleString()}</div>
            {userData[0].issuer && <div><strong>Issuer:</strong> {userData[0].issuer}</div>}
          </div>
        </div>
      )}
    </div>
  );
}
