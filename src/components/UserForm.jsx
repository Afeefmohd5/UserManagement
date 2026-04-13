import React, { useState } from "react";

function UserForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "User",
    status: "Active",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      alert("Please fill all fields");
      return;
    }

    onAdd(form);

    setForm({
      name: "",
      email: "",
      role: "User",
      status: "Active",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <select
        value={form.role}
        onChange={(e) => setForm({ ...form, role: e.target.value })}
      >
        <option value="User">User</option>
        <option value="Admin">Admin</option>
      </select>

      <select
        value={form.status}
        onChange={(e) => setForm({ ...form, status: e.target.value })}
      >
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>

      <button type="submit">Add User</button>
    </form>
  );
}

export default UserForm;