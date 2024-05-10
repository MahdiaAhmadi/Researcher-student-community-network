"use client";
export default function PostList({ posts, title }) {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <div className="postContent" key={posts.id}>
          <h2 className="text-fourth mb-2 font-semibold">{posts.title}</h2>
          <p className="">{posts.summary}</p>
          <p className=""> Written by : {posts.created_at}</p>
        </div>
      ))}
    </div>
  );
}
