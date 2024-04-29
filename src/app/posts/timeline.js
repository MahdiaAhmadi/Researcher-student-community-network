import { useState } from "react";
import postList from "../../components/Postslist";

export default function Timeline() {
  const [posts, setPosts] = useState([
    {
      title: "My New research paper",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper nunc nec nunc tincidunt, a sagittis odio mollis. Fusce mattis quam vel libero sodales, vitae congue justo molestie. Nulla facilisi. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam quis nisl nec nunc suscipit mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam quis nibh et nunc mollis molestie.",
      author: "Mario",
      id: "1",
    },
    {
      title: "Neural Networks",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper nunc nec nunc tincidunt, a sagittis odio mollis. Fusce mattis quam vel libero sodales, vitae congue justo molestie. Nulla facilisi. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam quis nisl nec nunc suscipit mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam quis nibh et nunc mollis molestie.",
      author: "Ana",
      id: "2",
    },
    {
      title: "Artifical intelligence Rock",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper nunc nec nunc tincidunt, a sagittis odio mollis. Fusce mattis quam vel libero sodales, vitae congue justo molestie. Nulla facilisi. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam quis nisl nec nunc suscipit mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam quis nibh et nunc mollis molestie.",
      author: "Jose",
      id: "3",
    },
  ]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <postList posts={posts} title="My posts"></postList>
      <postList
        posts={posts.filter((post) => post.author == "mario")}
        title="Researcher A posts"
      ></postList>
    </main>
  );
}
