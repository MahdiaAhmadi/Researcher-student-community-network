"use client"
import PostCards from "@/components/PostCard";
import { ProfileDescription } from "@/components/ProfileDescription";
import { get } from "@/data/webService";
import { useEffect, useState } from "react";


export default function PostsConsult() {

  const [userPosts, setUserPosts] = useState([]);
  const [userLikedPosts, setUserLikedPosts] = useState([]);
  const userId = sessionStorage.getItem("userId");

  useEffect(() => {

    get(`/user/by-token`).then(({ liked_posts_id }) => {
      if (liked_posts_id) setUserLikedPosts(liked_posts_id);
    });

    get(`/post/user-posts`)
      .then((data) => {
        setUserPosts(data)
      });
  }, []);


  return (
    <ProfileDescription>
      <div className='w-full pl-2'>
        {userPosts.map((post) => {
          let liked = userLikedPosts.some((l) => l == post.id);
          return (
            <PostCards
              key={post.id}
              alreadyLiked={liked}
              userId={userId}
              postId={post.id}
              data={post}
            />
          );
        })}
      </div>
    </ProfileDescription>
  )
}
