import { Button, TextInput } from "flowbite-react";
import ReactQuill from "react-quill";
import { useState } from "react";
import axios from "axios";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const BASE_URL = process.env.REACT_APP_SERVER_URL;
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("image", image);
      formData.append("content", content);

      const response = await axios.post(
        `${BASE_URL}/api/post/create`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

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
        <div>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
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
          gradientDuoTone="pinkToOrange"
          className=" w-full p-1 rounded-md bg-gradient-to-r from-pink-500 to-rose-300 text-white"
        >
          Publish
        </Button>
      </form>
    </div>
  );
}
