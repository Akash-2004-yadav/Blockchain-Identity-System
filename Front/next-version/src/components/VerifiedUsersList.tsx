"use client";
import { useEffect, useState } from "react";

export default function VerifiedUsersList() {
  const [verified, setVerified] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/verified-users")
      .then((res) => res.json())
      .then((data) => setVerified(data.users || []))
      .catch(() => setVerified([]));
  }, []);

  return (
    <div style={{
      marginTop: "40px",
      background: "#eaffea",
      padding: "22px",
      borderRadius: "18px",
      width: "75%",
      marginLeft: "auto",
      marginRight: "auto",
      boxShadow: "0 8px 25px rgba(0,0,0,0.15)"
    }}>
      <h2 style={{ color: "#198754", fontSize: "32px", fontWeight: "bold", textAlign: "center" }}>
        ✔ Verified Users
      </h2>

      <div style={{ marginTop: "18px", maxHeight: "260px", overflowY: "auto" }}>
        {verified.length === 0 ? (
          <p style={{ textAlign: "center", fontSize: "18px" }}>No users verified yet</p>
        ) : (
          verified.map((u, i) => (
            <div key={i} style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "12px 18px",
              marginBottom: "12px",
              fontSize: "18px",
              display: "flex",
              justifyContent: "space-between",
              borderLeft: "6px solid #198754"
            }}>
              <span><strong>{u.name}</strong> — {u.sap}</span>
              <span style={{ opacity: 0.6 }}>{new Date(u.issuedOn).toLocaleDateString()}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
