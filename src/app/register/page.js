"use client";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import ScreenLoader from '@/components/ui/ScreenLoader';
import { toDate } from '@/data/utils';
import { get, post } from "@/data/webService";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RegisterAccount() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [birthDate, setBirthDate] = useState("11-09-2001");
    const [password, setPassword] = useState("");
    const [institutions, setInstitutions] = useState([]);
    const [selectedInsititution, setSelectedInstitution] = useState(null);
    const [creatingAccount, setCreatingAccount] = useState(false);
    const router = useRouter();
    const { status } = useSession();

    useEffect(() => {
        get("/institution/")
            .then(data => {
                setInstitutions(data)
            })

    }, [])

    const createAccount = () => {
        if (username == "" || password == "" || displayName == "" || email == "" || selectedInsititution == null) {
            alert("Are Missing Fields!")
        } else {
            setCreatingAccount(true)
            post("/user/create-user", {
                display_name: displayName,
                email: email,
                username: username,
                password: password,
                institution_id: selectedInsititution,
                birth_date: toDate(new Date())
            }
            ).then(() => {
                router.push("/login")
            }).catch(() => {
                setCreatingAccount(false)
                alert("Failed creating account!")
            });
        }
    };

    if (status == "loading") {
        return <ScreenLoader />
    } else if (status == "authenticated") {
        return redirect('/timeline')
    }

    return (
        <div
            className="flex flex-col justify-center items-center mt-2" >
            <div className="w-2/6 text-black px-8 pb-8 pt-5 bg-white rounded-xl space-y-5 ">
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
                    <div className="grid w-full items-center">
                        <Label htmlFor="institutions"
                            label="Institution" />
                        <select id="institutions"
                            className="bg-white border border-indigo-300 
                    text-md text-gray-500 font-bold rounded-lg focus:ring-blue-500 
                    focus:border-blue-500 block w-full p-2.5"
                            onChange={({ target }) => {
                                setSelectedInstitution(target.value)
                            }}>
                            {institutions.map(inst => {
                                return <option key={inst.id}
                                    value={inst.id}>
                                    {inst.name}
                                </option>
                            })}
                        </select>
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
                    <div className="w-full">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
                            onClick={createAccount} disabled={creatingAccount}>
                            {creatingAccount ?
                                <div role="status">
                                    <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin fill-gray-600"
                                        viewBox="0 0 100 101" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                    <span class="sr-only">Loading...</span>
                                </div> :
                                "Create"}

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

