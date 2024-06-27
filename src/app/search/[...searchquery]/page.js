"use client"

import PostCards from "@/components/PostCard";
import ScreenLoader from "@/components/ui/ScreenLoader";
import { get } from "@/data/webService";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";


export default function SearchPage({ params }) {

    const [follows, setFollows] = useState([]);
    const [userLikedPosts, setUserLikedPosts] = useState([]);
    const [searchCategory, setSearchCategory] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    const userId = sessionStorage.getItem("userId");

    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/')
        },
    })

    const searchquery = params.searchquery;

    useEffect(() => {
        if (status == "authenticated") {
            get(`/user/by-token`)
                .then(({ liked_posts_id, follows_id }) => {
                    if (liked_posts_id) setUserLikedPosts(liked_posts_id);
                    if (follows_id) setFollows(follows_id);
                }).catch(() => null);
        }

    }, [status]);

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
                <div className='w-8/12 h-[84dvh] pl-2 overflow-y-scroll no-scrollbar'>
                    <div>
                        {filteredData.length > 0 ? (
                            <section>
                                {filteredData.map((post) => {
                                    let liked = userLikedPosts.some((l) => l == post.id);
                                    let followUser = follows.some((l) => l == post.author_id);
                                    return (
                                        <PostCards
                                            key={post.id}
                                            alreadyLiked={liked}
                                            userId={userId}
                                            postId={post.id}
                                            authorIsFollowed={followUser}
                                            data={post}
                                        />
                                    );
                                })}
                            </section>
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

