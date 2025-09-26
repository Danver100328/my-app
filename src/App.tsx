import React, { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get<User[]>("http://localhost:5000/api/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Users from MySQL (XAMPP)
      </h1>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="p-2 border rounded shadow">
            {user.name} — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
