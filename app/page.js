"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [authHash, setAuthHash] = useState("");

  useEffect(() => {
    // Load Churnkey script
    const script = document.createElement("script");
    script.src = "/scripts/churnkey.js";
    script.async = true;
    document.body.appendChild(script);

    // Get customer hash
    const fetchCustomerHash = async () => {
      const response = await fetch("/api/cus_hash", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ customerId: "cus_QVBhnykr03RYfs" }),
      });

      const data = await response.json();
      setAuthHash(data.userHash);
    };

    fetchCustomerHash();
  }, []);

  const handleCancelFlow = async () => {
    window.churnkey.init("show", {
      customerId: "cus_QVBhnykr03RYfs", // demo customer in the test Stripe account
      authHash: authHash, // use the hash from the response
      appId: "vupg9mh6t", // also found on Settings | Organization
      mode: "test",
      provider: "stripe",
      preview: true, // set to true so that no billing actions are actually taken
      record: false, // to disable session recording
      report: false, // to disable session reporting (used for analytics)
    });
  };

  return (
    <>
      <main>
        <h1>Account Management</h1>
        <button onClick={handleCancelFlow}>Cancel Account</button>
      </main>
    </>
  );
}
