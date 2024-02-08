"use client";

import { useState, useEffect, useMemo } from "react";

import PromptCardList from "@/components/PromptCardList";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  const handleSearchChange = (event) => setSearchQuery(event.target.value);

  const filteredPosts = useMemo(() => {
    if (!searchQuery) return posts;

    const searchRegex = new RegExp(
      searchQuery.replace(/[^a-zA-Z0-9]/g, ""),
      "i"
    );

    return posts.filter((post) =>
      [post.creator.username, post.tag, post.prompt].some((text) =>
        searchRegex.test(text)
      )
    );
  }, [posts, searchQuery]);

  const handleTagClick = (tag) => setSearchQuery(tag);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag, username, or prompt"
          value={searchQuery}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <PromptCardList posts={filteredPosts} handleTagClick={handleTagClick} />
    </section>
  );
};

export default Feed;
