import React, { useState, useEffect } from "react";

interface Feedback {
  rating: number;
  comment: string;
}

interface UserSummary {
  id: number;
  name: string;
  banned: boolean;
  swaps: number;
  feedback?: Feedback;
}

export default function AdminPanel() {
  const [users, setUsers] = useState<UserSummary[]>([]);
  const [feedbacks, setFeedbacks] = useState<Record<number, Feedback>>({});

  useEffect(() => {
    const swapData = localStorage.getItem("swapRequests");
    const fbData = localStorage.getItem("feedbacks");

    const swapIds: number[] = swapData ? JSON.parse(swapData) : [];
    const feedbackMap: Record<number, Feedback> = fbData
      ? JSON.parse(fbData)
      : {};

    const dummyUsers: UserSummary[] = [
      { id: 1, name: "Aarav Sharma", banned: false, swaps: 0 },
      { id: 2, name: "Meera Patel", banned: false, swaps: 0 },
      { id: 3, name: "Rohan Desai", banned: false, swaps: 0 }
    ];

    const updated = dummyUsers.map((user) => ({
      ...user,
      swaps: swapIds.includes(user.id) ? 1 : 0,
      feedback: feedbackMap[user.id]
    }));

    setUsers(updated);
    setFeedbacks(feedbackMap);
  }, []);

  const toggleBan = (id: number) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, banned: !u.banned } : u
      )
    );
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px"
      }}>
        {users.map((user) => (
          <div
            key={user.id}
            style={{
              background: "white",
              pa
