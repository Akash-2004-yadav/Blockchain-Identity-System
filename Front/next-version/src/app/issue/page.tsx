"use client";
import { useState } from "react";

export default function IssuePage() {
  const [name, setName] = useState("");
  const [sap, setSap] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:5000/issue", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, sap, email }),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      alert("🎉 Credential issued successfully!");
      setName("");
      setSap("");
      setEmail("");
    } else {
      alert("⚠ Failed: " + data.message);
    }
  };

  return (
    <div className="flex flex-col items-center text-center mt-10 text-white">
      <h1 className="text-4xl font-bold mb-10">Issue New Credential</h1>

      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-xl">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-4 rounded mb-4 text-black"
        />

        <input
          type="text"
          placeholder="SAP ID"
          value={sap}
          onChange={(e) => setSap(e.target.value)}
          className="w-full border p-4 rounded mb-4 text-black"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-4 rounded mb-6 text-black"
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-indigo-600 hover:bg-indigo-700 w-full py-4 text-white font-semibold rounded"
        >
          {loading ? "Processing..." : "Generate Credential"}
        </button>
      </div>
    </div>
  );
}
