"use client";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { useState } from "react";

import { put } from "@/data/webService";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

export default function ChangePassword() {

    const [newPassword, setNewPassword] = useState("");
    const [newPasswordConfirmation, sertNewPasswordConfirmation] = useState("");

    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/");
        },
    });


    const router = useRouter();

    const handleBackClick = () => {
        router.back();
    };



    const onSubmit = () => {
        if (!((newPassword != newPasswordConfirmation) || newPassword == "" || newPasswordConfirmation == ""))
            put("/user/change-password?newPassword=".concat(newPasswordConfirmation))
                .then(() => {
                    alert("Paswword Changed!")
                }).catch(() => alert("Error changing the password!"))
    }



    return (
        <div
            className="flex flex-col justify-center items-center bg-gradient-to-br h-[83.8dvh]">
            <div className="text-black px-8 pb-8 pt-5 bg-white w-1/4 rounded-xl space-y-5 ">
                <header className="flex justify-start ">
                    <span className="material-symbols-outlined cursor-pointer mt-[4px] h-[24px]"
                        onClick={handleBackClick}>
                        arrow_back
                    </span>
                    <h1 className="text-center text-bold text-2xl">Change Password</h1>


                </header>

                <div className="space-y-5 w-full">
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="newPassword"
                            label="New Password" />
                        <Input
                            required
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            id="newPassword"
                            type="password"
                        />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="newPasswordConfirmation"
                            label="New Password Confirmation" />
                        <Input
                            required
                            value={newPasswordConfirmation}
                            onChange={(e) => sertNewPasswordConfirmation(e.target.value)}
                            id="newPasswordConfirmation"
                            type="password"
                        />
                    </div>

                    <div className="w-full">
                        <button className={"bg-blue-500 text-white font-bold py-2 px-4 rounded-full w-full ".concat(
                            ((newPassword != newPasswordConfirmation) || newPassword == "" || newPasswordConfirmation == "") ? " opacity-50 cursor-not-allowed" : " hover:bg-blue-700"
                        )} disabled={((newPassword != newPasswordConfirmation) || newPassword == "" || newPasswordConfirmation == "")} onClick={onSubmit}>
                            Change
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}