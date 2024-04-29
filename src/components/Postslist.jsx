export default function PostList({ posts, title }) {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <div className="postContent" key={posts.id}>
          <h2>{posts.title}</h2>
          <p>{posts.body}</p>
          <p> Written by : {posts.author}</p>
        </div>
      ))}
    </div>
  );
}
