import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "flowbite-react";
export default function Home() {
  const [posts, setPosts] = useState([]);
  const BASE_URL = process.env.REACT_APP_SERVER_URL;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/post/show`);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-center text-3xl italic font-extrabold	capitalize m-10">
        Welcome to My Blog
      </h1>

      {posts.map((post) => (
        <Card href="#" className=" flex-row flex my-5">
          <div key={post._id}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {post.title}
            </h5>
            <div
              className="font-normal text-gray-700 dark:text-gray-400"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
          </div>
        </Card>
      ))}
    </div>
  );
}
