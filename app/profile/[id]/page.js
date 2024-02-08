"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";

import UserProfile from "@/components/UserProfile";

const Page = () => {
  const params = useParams();
  const userId = params.id;

  const searchParams = useSearchParams();
  const username = searchParams.get("name");

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/user/${userId}/posts`);
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <Suspense>
      <UserProfile
        name={username}
        description={`Welcome to ${username}'s personalized profile page. Explore ${username}'s exceptional prompts and be inspired by the power of their imagination`}
        posts={posts}
      />
    </Suspense>
  );
};

export default Page;
