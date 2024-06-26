"use client"

import {
    PublicationsSection
} from "@/components/SectionsAdvancedSearch";
import ScreenLoader from "@/components/ui/ScreenLoader";
import { get } from "@/data/webService";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";


export default function SearchPage({ params }) {
    const [searchCategory, setSearchCategory] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/')
        },
    })

    const searchquery = params.searchquery

    useEffect(() => {
        let query = ""
        let category = "publications"
        if (searchquery.length >= 2) {
            category = searchquery[0]
            query = searchquery[1]
        } else {
            query = searchquery[0]
        }

        setSearchCategory(category);
        handleSearch(query, category);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchquery])

    const handleSearch = (searchTerm, category) => {
        searchTerm = searchTerm.replaceAll("_", " ")

        if (searchTerm.trim() === "") {
            setFilteredData([]);
        } else {
            if (category === "publications") {
                get("/post/by-title?title=".concat(searchTerm))
                    .then(data => {
                        setFilteredData(data)
                    })

            } else if (category === "authors") {
                get("/post/by-author?authorName=".concat(searchTerm))
                    .then(data => {
                        setFilteredData(data)
                    })
            }
            else if (category === "category") {
                get("/post/by-category?categoryName=".concat(searchTerm))
                    .then(data => {
                        setFilteredData(data)
                    })
            }

        }
    };


    if (searchCategory == "") {
        return <ScreenLoader />
    }
    return (
        <div>
            <div className="flex justify-center border-t border-b border-gray-300">
                <Link href={"/search/publications/".concat(searchquery[1])}
                    className="mr-4">
                    By Title
                </Link>
                <Link href={"/search/authors/".concat(searchquery[1])}
                    className="mr-4">
                    By Author Name
                </Link>
                <Link href={"/search/category/".concat(searchquery[1])}>
                    By Category
                </Link>
            </div>
            <div className="flex justify-center mt-2">
                <div className='w-8/12 h-[74dvh] pl-2 overflow-y-scroll no-scrollbar'>
                    <div>
                        {filteredData.length > 0 ? (
                            <PublicationsSection publications={filteredData} />
                        ) : (
                            <div>No publications found.</div>
                        )}
                    </div>

                    {/* {searchCategory === "authors" && (
                        <AuthorsSection authors={filteredData} />
                    )}
                    {searchCategory === "questions" && (
                        <QuestionsSection questions={filteredData} />
                    )} */}
                </div>
            </div>


        </div>
    );
};

