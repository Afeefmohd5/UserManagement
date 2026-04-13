import React, { useEffect, useState } from "react";
import Filters from "./components/Filters";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";
import { getUsers, createUser, deleteUser } from "./services/api";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce Search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // Fetch Users
  useEffect(() => {
    fetchUsers();
  }, [debouncedSearch, role, status]);

  const fetchUsers = async () => {
    try {
      const res = await getUsers({
        search: debouncedSearch,
        role,
        status,
      });
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAdd = async (data) => {
    await createUser(data);
    fetchUsers();
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  return (
    <div className="container">
      <h2>User Management System</h2>

      <UserForm onAdd={handleAdd} />

      <Filters
        search={search}
        setSearch={setSearch}
        role={role}
        setRole={setRole}
        status={status}
        setStatus={setStatus}
      />

      <UserTable users={users} onDelete={handleDelete} />
    </div>
  );
}

export default App;