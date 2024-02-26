import { Button, TextInput } from "flowbite-react";
import ReactQuill from "react-quill";
import { useState } from "react";
import axios from "axios";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const BASE_URL = process.env.REACT_APP_SERVER_URL;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BASE_URL}/api/post/create`, {
        title,
        content,
      });
      if (response.status === 201) {
        console.log("Post created successfully:", response.data);
        navigate("/");
      } else {
        setError("Failed to create post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
      setError("Error creating post. Please try again later.");
    }
  };

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Create a post</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {error && <div className="text-red-500">{error}</div>}
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            value={title}
            onChange={handleTitleChange}
            className="flex-1"
          />
        </div>
        <ReactQuill
          theme="snow"
          placeholder="Write something..."
          className="h-72 mb-12"
          required
          value={content}
          onChange={handleContentChange}
        />
        <Button
          type="submit"
          className="text-white bg-pink-400 hover:bg-rose-400 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
        >
          Publish
        </Button>
      </form>
    </div>
  );
}
