"use client";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import ScreenLoader from '@/components/ui/ScreenLoader';
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterAccount() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [birthDate, setBirthDate] = useState("11-09-2001");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const { status } = useSession();

    const createAccount = async () => {

        if (username == "" || password == "" || displayName == "" || email == "") {
            alert("Are Missing Fields!")
        } else {
            const res = await fetch("http://localhost:8000/user/create-user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*',
                },
                body: JSON.stringify({
                    display_name: displayName,
                    email: email,
                    username: username,
                    password: password,
                    user_type_id: "660ee6aa7852135cf655c1a1",
                    birth_date: "20-09-2001"
                }),
            });
            const response = await res.json()
            console.log(response)
            if (response.code == 200) {
                router.push("/login")

            } else {
                alert("Failed creating account!")
            }
        }



    };

    if (status == "loading") {
        return <ScreenLoader />
    } else if (status == "authenticated") {
        return redirect('/timeline')
    }

    return (
        <div
            className={
                "flex flex-col justify-center items-center bg-gradient-to-br h-[80.4dvh]"
            } >
            <div className="text-black px-8 pb-8 pt-5 bg-white rounded-xl space-y-5 ">
                <h1 className="text-center text-bold text-2xl">Sign Up</h1>
                <div className="space-y-4 w-full">
                    <div className="grid w-full items-center">
                        <Label htmlFor="displayName"
                            label="Display Name" />
                        <Input
                            required
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                            id="displayName"
                        />
                    </div>
                    <div className="grid w-full items-center">
                        <Label htmlFor="email"
                            label="Email" />
                        <Input
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="email_example@gmail.com"
                            id="email"
                        />
                    </div>
                    <div className="grid w-full items-center gap-1">
                        <Label htmlFor="username"
                            label="Username Account Access" />
                        <Input
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            id="username"
                        />
                    </div>
                    <div className="grid w-full items-center gap-1">
                        <Label htmlFor="password"
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
                            onClick={createAccount}>
                            Create
                        </button>
                    </div>
                </div>
                <p className="text-center">
                    Already have an account?{' '}
                    <Link className="text-indigo-500 hover:underline" href="/login">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};

