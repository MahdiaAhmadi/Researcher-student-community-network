"use client"

import Link from "next/link";
import { useState } from "react";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div
      className="flex bg-white rounded-3xl">

      <input
        type="text"
        placeholder="Search Subject"
        value={searchTerm}
        onChange={handleInputChange}
        className="text-black rounded-3xl border-none"
      />
      <Link href={"/search/publications/".concat(searchTerm.replace(" ", "_"))}
        className="h-[24px] mt-2 mr-2">
        <span className="material-symbols-outlined text-black">search</span>
      </Link>

    </div>
  );
}

