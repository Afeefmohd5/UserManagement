import React from "react";

function Filters({ search, setSearch, role, setRole, status, setStatus }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="">All Roles</option>
        <option value="Admin">Admin</option>
        <option value="User">User</option>
      </select>

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="">All Status</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
    </div>
  );
}

export default Filters;