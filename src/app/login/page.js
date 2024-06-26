"use client";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import ScreenLoader from "@/components/ui/ScreenLoader";
import { get } from "@/data/webService";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const { status } = useSession();

  const onSubmit = async () => {

    let formData = new FormData();
    formData.append("username", username)
    formData.append("password", password)

    const response = await fetch("http://localhost:8000/user/token", {
      method: "POST",
      body: formData
    }).then(res => {
      if (res.status == 401) {
        alert("User Unathorized")
      }
      return res.json()
    }).catch(() => null);


    if (response) {
      const token = response.access_token;
      sessionStorage.setItem("token", token)

      get("/user/by-token").then(async user => {
        sessionStorage.setItem("userId", user.id)
        await signIn("credentials", {
          userId: user.id,
          role: user.user_type.type,
          email: user.email,
          username: user.username,
          displayName: user.display_name,
          institution: user.institution,
          redirect: true,
          callbackUrl: "/"
        });
      })

    } else {
      alert("Error! Try Again Later.")
    }
  }

  if (status == "loading") {
    return <ScreenLoader />
  } else if (status == "authenticated") {
    return redirect('/timeline')
  }

  return (
    <div
      className={
        " flex flex-col justify-center items-center bg-gradient-to-br h-[83.8dvh]"
      } >
      <div className="text-black px-8 pb-8 pt-5 bg-white rounded-xl space-y-5 ">
        <h1 className="text-center text-bold text-2xl">Sign In</h1>
        <div className="space-y-5 w-full">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="username"
              label="Username" />
            <Input
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="username"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="passsword"
              label="Password" />
            <Input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
            />
          </div>
          {/* {error && <Alert>{error}</Alert>} */}
          <div className="w-full">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
              onClick={onSubmit}>
              Login
            </button>
          </div>
        </div>
        <p className="text-center">
          Need to create an account?{' '}
          <Link className="text-indigo-500 hover:underline" href="/register">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}
