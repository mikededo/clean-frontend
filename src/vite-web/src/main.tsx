import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { users } from "@rts/context";

export default function Vite() {
  const [user, setUser] = useState<users.User | null>(null);

  const fetchUserWithId = async (id: number) => {
    const user = await users.fetch.findUserById(id);
    setUser(user);
  };

  return (
    <div>
      <button onClick={() => fetchUserWithId(1)}> User 1</button>
      <button onClick={() => fetchUserWithId(2)}> User 2</button>
      <button onClick={() => fetchUserWithId(3)}> User 3</button>
      <button onClick={() => fetchUserWithId(4)}> User 4</button>
      {user ? (
        <>
          <p>
            Name: {user.firstName} {user.lastName}
          </p>
          <p>Email: {user.email}</p>
          <p>IpAdress: {user.ipAddress}</p>
        </>
      ) : null}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Vite />
  </React.StrictMode>
);
