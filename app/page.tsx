"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "502 Bad Gateway";
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        color: "#000000",
        fontFamily: 'Times, "Times New Roman", serif',
        minHeight: "100vh",
        width: "100%",
        margin: 0,
        paddingTop: "40px",
        boxSizing: "border-box",
      }}
    >
      <center>
        <h1
          style={{
            fontSize: "2em",
            fontWeight: "bold",
            margin: "0.67em 0",
          }}
        >
          502 Bad Gateway
        </h1>
      </center>
      <hr
        style={{
          border: "none",
          borderTop: "1px solid #ccc",
          margin: "16px 0",
        }}
      />
      <center>
        <span style={{ fontSize: "14px", fontFamily: 'Times, "Times New Roman", serif' }}>
          nginx
        </span>
      </center>
    </div>
  );
}