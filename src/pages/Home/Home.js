import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "flowbite-react";
import { useSelector } from "react-redux";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [editedPost, setEditedPost] = useState({ title: "", content: "" });
  const [editingPostId, setEditingPostId] = useState(null);
  const BASE_URL = process.env.REACT_APP_SERVER_URL;
  const { user } = useSelector((state) => state.user);

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

  const handleDeleteClick = async (postId) => {
    try {
      await axios.delete(`${BASE_URL}/api/post/delete/${postId}`);
      setPosts(posts.filter((post) => post._id !== postId));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleEditClick = (postId) => {
    const postToEdit = posts.find((post) => post._id === postId);
    setEditedPost({ title: postToEdit.title, content: postToEdit.content });
    setEditingPostId(postId);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleEditSubmit = async () => {
    try {
      await axios.put(
        `${BASE_URL}/api/post/update/${editingPostId}`,
        editedPost
      );
      const updatedPosts = posts.map((post) =>
        post._id === editingPostId ? { ...post, ...editedPost } : post
      );
      setPosts(updatedPosts);
      setEditedPost({ title: "", content: "" });
      setEditingPostId(null);
    } catch (error) {
      console.error("Error editing post:", error);
    }
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
          {" "}
          😃 welcome to the Full Stack MERN Blog Project 🌐
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-4 ">
          {posts.map((post) => (
            <Card
              key={post._id}
              href="#"
              className="w-full flex-row my-5 block relative"
            >
              <div className="w-full">
                {editingPostId === post._id ? (
                  <div className="w-full flex flex-col">
                    <input
                      type="text"
                      name="title"
                      value={editedPost.title}
                      onChange={handleInputChange}
                      className="w-full p-2 my-2 text-gray-900 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-700 dark:focus:ring-pink-500 dark:focus:border-pink-500"
                    />
                    <textarea
                      name="content"
                      value={editedPost.content}
                      onChange={handleInputChange}
                      className="w-full p-2 my-4 text-gray-900 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-600 dark:focus:ring-pink-500 dark:focus:border-pink-500 h-60 flex"
                    ></textarea>
                    <button
                      onClick={handleEditSubmit}
                      className="header__link--active"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <div className="w-full flex flex-col">
                    <img
                      src={`${post.imageUrl}`}
                      alt="Post"
                      className="mb-4 mx-auto w-80 rounded-md"
                    />{" "}
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center my-5">
                      {post.title}
                    </h5>
                    <div
                      className="font-normal text-gray-700 dark:text-gray-400 mb-10"
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    ></div>
                    {user && user.isAdmin && (
                      <div className="w-full flex justify-between -ml-6 mt-4 absolute bottom-3 p-0">
                        <button
                          onClick={() => handleEditClick(post._id)}
                          className="block text-center py-2 px-8 text-sm text-gray-500 border  dark:bg-pink-600 dark:hover:bg-pink-700  rounded-md border-red-400 focus:ring-pink-500 focus:border-pink-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500 ml-6"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteClick(post._id)}
                          className="block text-center py-2 px-8 text-sm text-gray-500 border  dark:bg-pink-600 dark:hover:bg-pink-700  rounded-md border-red-400 focus:ring-pink-500 focus:border-pink-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500 mr-6"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
