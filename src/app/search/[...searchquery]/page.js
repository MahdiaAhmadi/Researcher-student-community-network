"use client"

import {
    AuthorsSection,
    PublicationsSection,
    QuestionsSection,
} from "@/components/SectionsAdvancedSearch";
import ScreenLoader from "@/components/ui/ScreenLoader";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const publications = [
    {
        title: "Article 1",
        authors: ["Author 1", "Author 2", "Author 3"],
        date: "Mar 2024",
        doi: "10.11111",
        isbn: "1111-1111",
        images: ["author1.jpg", "author2.jpg", "author3.jpg"],
    },
    {
        title: "Article 2",
        authors: ["Author 4", "Author 5"],
        date: "Mar 2024",
        doi: "10.22222",
        isbn: "2222-2222",
        images: ["author4.jpg", "author5.jpg"],
    },
    {
        title: "Article 3",
        authors: ["Author 6", "Author 7", "Author 8"],
        date: "Mar 2024",
        doi: "10.33333",
        isbn: "3333-3333",
        images: ["author6.jpg", "author7.jpg", "author8.jpg"],
    },
    {
        title: "Conference Paper 1",
        authors: ["Author 9", "Author 10"],
        date: "Mar 2024",
        doi: "10.44444",
        isbn: "4444-4444",
        images: ["author9.jpg", "author10.jpg"],
    },
];

const authors = [
    { name: "Author 1", image: "..." },
    { name: "Author 2", image: "..." },
    { name: "Author 3", image: "..." },
    { name: "Author 4", image: "..." },
    { name: "Author 5", image: "..." },
    { name: "Author 6", image: "..." },
    { name: "Author 7", image: "..." },
    { name: "Author 8", image: "..." },
    { name: "Author 9", image: "..." },
    { name: "Author 10", image: "..." },
];

const questions = [
    { question: "Question 1" },
    { question: "Question 2" },
    { question: "Question 3" },
    { question: "Question 4" },
    { question: "Question 5" },
    { question: "Question 6" },
    { question: "Question 7" },
    { question: "Question 8" },
    { question: "Question 9" },
    { question: "Question 10" },
];

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
        console.log(searchTerm)
        if (searchTerm.trim() === "") {
            setFilteredData([]);
        } else {
            let filtered = [];
            if (category === "publications") {
                filtered = publications.filter((publication) =>
                    publication.title.toLowerCase().includes(searchTerm.toLowerCase())
                );
            } else if (category === "authors") {
                filtered = authors.filter((author) =>
                    author.name.toLowerCase().includes(searchTerm.toLowerCase())
                );
            } else if (category === "questions") {
                filtered = questions.filter((question) =>
                    question.question.toLowerCase().includes(searchTerm.toLowerCase())
                );
            }
            setFilteredData(filtered);
        }
    };

    const handleCategoryClick = (category) => {
        let query = ""
        if (searchquery.length >= 2) {
            query = searchquery[1]
        } else {
            query = searchquery[0]
        }

        setSearchCategory(category);
        handleSearch(query, category);
    };

    if (searchCategory == "") {
        return <ScreenLoader />
    }
    return (
        <div>
            <div className="flex justify-center border-t border-b border-gray-300">
                <button
                    onClick={() => handleCategoryClick("publications")}
                    className={`${searchCategory === "publications" ? "underline" : ""
                        } mr-4`}
                >
                    Publications
                </button>
                <button
                    onClick={() => handleCategoryClick("authors")}
                    className={`${searchCategory === "authors" ? "underline" : ""} mr-4`}
                >
                    Authors
                </button>
                <button
                    onClick={() => handleCategoryClick("questions")}
                    className={`${searchCategory === "questions" ? "underline" : ""}`}
                >
                    Questions
                </button>
            </div>
            <div className="flex justify-center mt-2">
                <div className='w-8/12 h-[74dvh] pl-2 overflow-y-scroll no-scrollbar'>
                    {searchCategory === "publications" && (
                        <div>
                            {filteredData.length > 0 ? (
                                <PublicationsSection publications={filteredData} />
                            ) : (
                                <div>No publications found.</div>
                            )}
                        </div>
                    )}
                    {searchCategory === "authors" && (
                        <AuthorsSection authors={filteredData} />
                    )}
                    {searchCategory === "questions" && (
                        <QuestionsSection questions={filteredData} />
                    )}
                </div>
            </div>


        </div>
    );
};

