"use client";

import { Dropdown } from "flowbite-react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function UserIcon() {

  const router = useRouter();
  const { data: session } = useSession();

  return (
    <Dropdown label=""
      inline
      renderTrigger={() =>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 cursor-pointer  "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>}>
      <Dropdown.Header>
        <span className="block text-sm">{session.user.displayName}</span>
        <span className="block truncate text-sm font-medium">{session.user.email}</span>
      </Dropdown.Header>
      <Dropdown.Item onClick={() => {
        router.push('/profile')
      }}>Profile</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={() => signOut()}>
        Sign out
      </Dropdown.Item>
    </Dropdown>
  );
}
