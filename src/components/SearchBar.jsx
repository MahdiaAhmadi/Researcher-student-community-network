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
      className="flex">

      <input
        type="text"
        placeholder="Search Subject"
        value={searchTerm}
        onChange={handleInputChange}
        className="text-black rounded-3xl"
      />
      <Link href={"/search/publications/".concat(searchTerm.replace(" ", "_"))}>
        <span className="material-symbols-outlined text-black">search</span>
      </Link>

    </div>
  );
}

