import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { disconnect } from "process";
const index = () => {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (user) {
    return (
      <div>
        <h2>Welcome {user.name}</h2> <Link href="/api/auth/logout">Logout</Link>
      </div>
    );
  }
  return <Link href="/api/auth/login">Login</Link>;
};

export default index;
