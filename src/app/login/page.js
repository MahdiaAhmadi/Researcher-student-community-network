"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: userName,
      password: password,
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <div
      className={
        "flex flex-col justify-center items-center  h-screen bg-gradient-to-br gap-1 from-cyan-300 to-sky-600"
      }
    >
      <div className="px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2">


        <button className="text-green-600" onClick={onSubmit}>
          Login
        </button>

      </div>
    </div>
  );
};

