# BLOG

## Overview

The app is a full-stack blogging platform that enables the owner to create, edit, and manage blog posts via the platform's dashboard. Upon logging in or signing up, users can read, comment on, and edit their comments beneath the blog posts(nice to have).

## Problem

The need for a personalized and manageable blogging platform is on the rise, tailored specifically for individual bloggers who seek control over their content while offering interactive features for their audience. Existing solutions often fall short, being either overly complex for personal use or lacking in essential functionalities for effective engagement and management. There is a particular demand for a platform that combines a user-friendly dashboard for the blog owner with the capability for readers to interact through comments(nice-to-have), all within a system that balances simplicity with comprehensive control over blog posts.

## User Profile

This app is designed for individual blog owners looking for a streamlined way to manage their blogs and engage with their audience. The primary user is someone who values autonomy over creating, editing, and deleting blog posts directly from a dashboard. This includes hobbyist bloggers documenting life experiences or interests, and professionals or experts sharing knowledge in their field. The platform aims to simplify the blogging process for the owner while ensuring interactive features for readers, such as commenting or deleting their own comments. Key considerations for this user base include ease of use, advanced content management capabilities, and security features to safeguard the blog's content and the privacy of its interactions.

## Features

- **User Authentication:<br/>**
  Users can sign up, log in, and log out.<br/>
  Support for email/password authentication and OAuth with Google.<br/>

- **Blog Management:<br/>**
  Admin can create, edit, and delete to their blog posts.<br/>
  CRUD functionality for managing blog content.<br/>

- **Authorization System:<br/>**
  Role-based access control (admin, regular user) to manage user access to blog posts.<br/>

- **API Endpoints:<br/>**
  Implement RESTful API endpoints for interacting with blog posts (create, read, update, delete).<br/>
  Configure CORS headers to allow requests from the frontend React application.<br/>
  Additional endpoints for uploading and managing images.<br/>

- **User Interface (UI):<br/>**
  Design and develop user interface components for displaying blog posts.<br/>
  Implement user authentication and registration forms using React components and context API for managing authentication state.<br/>
  Implement a filter feature to choose the topic for the blog posts users want to see.<br/>

## Tech Stack

- Frontend:<br/>
  React.js for building the user interface.<br/>
  Sass for styling the frontend components.<br/>
  Utilize React-Redux for managing global state, including user authentication status.<br/>

- Backend:<br/>
  Node.js with Express for the backend server.<br/>
  Implement JWT-based authentication and authorization middleware.<br/>
  MongoDB for the database.<br/>

- Additional Libraries:<br/>
  Create React App for initializing the React project.<br/>
  Axios for making HTTP requests from the frontend to the backend.<br/>
  Other necessary libraries for authentication, authorization, and API development.<br/>

## APIs

No external APIs will be used. All data will be managed internally within the application.<br/>

## Sitemap

Home Page:<br/>
Displays a list of blog posts.<br/>

Login/Register Page:<br/>
Allows users to log in or register for a new account.<br/>

Provides admin-level access to manage users and blog posts (nice-to-have).<br/>

## Data

In our blog application, we have the following data entities and their relationships:

Blog Posts:<br/>
Each blog post belongs to the admin.<br/>
Each blog post can have CRUD functionalities.<br/>

Relationships:<br/>
One-to-Many relationship between Users and Blog Posts (One user can have many blog posts).<br/>
One-to-Many relationship between Users and Comments (One user can leave many comments).<br/>
One-to-Many relationship between Blog Posts and Comments (One blog post can have many comments).<br/>

## Endpoints

Here are the endpoints that the server will implement:<br/>

**User Authentication:<br/>**

**POST** /api/auth/register: Register a new user. Parameters: email, password. Example response: { "message": "User registered successfully" }.<br/>
**POST** /api/auth/login: Log in a user. Parameters: email, password. Example response: { "token": "JWT_TOKEN" }.<br/>
**GET** /api/auth/logout: Log out the current user. Example response: { "message": "User logged out successfully" }.<br/>

**Blog Posts:<br/>**

**GET** /api/posts: Retrieve all blog posts. Example response: [{ "id": 1, "title": "Sample Post", "content": "Lorem ipsum...",}, ...].<br/>
**GET** /api/posts/:id: Retrieve a specific blog post by ID. Example response: { "id": 1, "title": "Sample Post", "content": "Lorem ipsum...", }.<br/>
**POST** /api/posts: Create a new blog post. Parameters: title, content, author (user ID). Example response: { "message": "Blog post created successfully" }.<br/>
**PUT** /api/posts/:id: Update an existing blog post by ID. Parameters: title, content. Example response: { "message": "Blog post updated successfully" }.<br/>
**DELETE** /api/posts/:id: Delete a blog post by ID. Example response: { "message": "Blog post deleted successfully" }.<br/>

> These endpoints provide the necessary functionality for user authentication, blog post management, and commenting within my application.

## Auth

**Authentication:<br/>**
For authentication, we're implementing a combination of email/password authentication and Google login. Users will have the choice to sign up using their email and a secure password, or they can opt for a quicker sign-up process via Google.<br/>

**Authorization:<br/>**
Authorization in our system will be role-based, with different levels of access assigned to users based on their roles. We'll have two main roles: admin, and regular user. Admins will have full access to all features and functionalities, and regular users will have access to basic features. Authorization checks will be performed at both the frontend and backend to ensure users only have access to resources appropriate for their role.

## Roadmap

**Sprint 1: Setting Up the Project Environment<br/>**
Task 1: Set up a development environment.<br/>
Task 2: Initialize React project using Create React App.<br/>
Task 3: Set up Sass for styling in the React project.<br/>
Task 4: Create folder structure for organizing React components and Sass files.<br/>
Task 5: Set up backend technology stack (Node.js with Express).<br/>
Task 6: Set up database (MongoDB).<br/>
Task 7: Set up version control for the project (initialize Git repository).<br/>

**Sprint 2: Backend Development<br/>**
Task 1: Implement user authentication system (email/password, OAuth with Google).<br/>
Task 2: Develop CRUD (Create, Read, Update, Delete) functionality for blog posts.<br/>
Task 3: Implement authorization system for managing user access to blog posts.<br/>
Task 4: Implement API endpoints for interacting with blog posts.<br/>

**Sprint 3: Frontend Development<br/>**
Task 1: Design user interface (UI) wireframes/mockups for blog website.<br/>
Task 2: Set up frontend technology stack (React.js).<br/>
Task 3: Develop user interface components for displaying blog posts.<br/>
Task 4: Implement user authentication and registration forms.<br/>
Task 5: Integrate frontend with backend API endpoints.<br/>

**Sprint 4: Testing and Refinement<br/>**
Task 1: Write unit tests for backend APIs and frontend components.<br/>
Task 2: Conduct user acceptance testing (UAT) to ensure functionality meets requirements.<br/>
Task 3: Address any bugs or issues identified during testing.<br/>
Task 4: Optimize performance and improve user experience based on feedback.<br/>

**Sprint 5: Deployment and Launch<br/>**
Task 1: Set up a production environment.<br/>
Task 2: Deploy backend and frontend code to the production server.<br/>
Task 3: Perform final testing in the production environment.<br/>
Task 4: Launch blog website to users.<br/>

**Timeframes:<br/>**
Sprint 1: 2 days<br/>
Sprint 2: 5 days<br/>
Sprint 3: 4 days<br/>
Sprint 4: 2 days<br/>
Sprint 5: 1 days<br/>

## Nice-to-haves
Filter Feature:<br/>
Users can filter blog posts based on topics of interest. They can select specific topics with buttons or input keywords to filter blog posts accordingly. This feature enhances user experience by allowing users to find relevant content quickly and efficiently.

Comments Section:<br/>
Add a comments section to each blog post for users to leave feedback or engage in discussions.
Add a comments section to each blog post for users to leave feedback or engage in discussions.

Blog Detail Page:<br/>
Displays the content of a specific blog post.<br/>
Includes the comments section (nice-to-have).<br/>

Comments:<br/>
GET /api/posts/:postId/comments: Retrieve all comments for a specific blog post. Example response: [{ "id": 1, "content": "Great post!", "author": "Jane Doe" }, ...].<br/>
POST /api/posts/:postId/comments: Add a new comment to a blog post. Parameters: content, author (user ID). Example response: { "message": "Comment added successfully" }.<br/>
DELETE /api/posts/:postId/comments/:commentId: Delete a comment from a blog post by comment ID. Example response: { "message": "Comment deleted successfully" }.<br/>

Image Upload:<br/>

POST /api/upload: Upload an image file. Parameters: file (image file). Example response: { "imageUrl": "https://example.com/uploads/image.jpg" }.
DELETE /api/upload/:imageName: Delete an uploaded image by image name. Example response: { "message": "Image deleted successfully" }.
