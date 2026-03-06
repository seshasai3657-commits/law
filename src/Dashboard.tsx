import React from "react";
import LegalSearch from "./LegalSearch";

export default function Dashboard() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>⚖ NyayaAI Dashboard</h1>
      <p>Welcome to AI Legal Research System</p>

      <hr />

      <LegalSearch />
    </div>
  );
}