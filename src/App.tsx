import React from "react";
import "./style.css";
import Navbar from "./components/Navbar";
import ProfileForm from "./ProfileForm";
import UserList from "./components/UserList";
import AdminPanel from "./components/AdminPanel";

export default function App() {
  return (
    <>
      <Navbar />
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem 1rem" }}>
        <ProfileForm />
        <hr />
        <UserList />
        <hr />
        <AdminPanel />
      </div>
    </>
  );
}