"use client";

import { useState, useEffect } from "react";

import PromptCardList from "@/components/PromptCardList";

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  const handleSearchSearch = (event) => {};

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag, username, or prompt"
          value={searchText}
          onChange={handleSearchSearch}
          required
          className="search_input peer"
        />
      </form>
      <PromptCardList posts={posts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
