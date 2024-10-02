JavaScript 2 Course Assignment

Client-side Social Media Application

Project Overview

This project is part of the JavaScript 2 course, where we will build a client-side social media application. The application will allow users to perform CRUD operations (Create, Read, Update, Delete) on their own posts. Additional features include following/unfollowing users, commenting on posts, and reacting to posts with emojis.

We are two students working together on this project.

Functionality

The application uses an API that requires authorization via JWT (JSON Web Tokens). The following API features are supported (features marked with * are required for the assignment):

	•	Register new user*
	•	Log in user*
	•	Follow/Unfollow user
	•	Create post*
	•	Get single post*
	•	Get multiple posts*
	•	Edit post*
	•	Delete post*
	•	Comment on post
	•	React to a post with emoji

The application will use HTTP methods like GET, POST, PUT, and DELETE. We will store JWT tokens in localStorage to manage the user session securely.

API Features to Implement

	1.	Registration – Allow new users to create an account.
	2.	Login – Allow existing users to log in and receive a token.
	3.	Create Post – Allow logged-in users to create a new post.
	4.	Edit Post – Allow users to edit their own posts.
	5.	Delete Post – Allow users to delete their own posts.
	6.	Get Post – Allow users to view individual or multiple posts.

UI Features

To support the user experience, the application will include:

	•	Registration form
	•	Login form
	•	Logout button (removes JWT token from the browser)
	•	Form for creating/editing posts
	•	Delete button to remove posts
	•	Listing page showing the most recent 12 posts
	•	Single post page based on ID

Technical Restrictions

The project has the following limitations:

	•	Use of JavaScript client-side frameworks or UI libraries such as React, Vue, Svelte, Angular, or similar, is not allowed.
	•	Design and styling will be minimal with just a basic wireframe. Styling will be addressed later in the course.

Project Structure

This project is set up using a Vite template with Vanilla JavaScript in MPA (Multi-page application) mode. Any additional HTML pages must be listed in the vite.config.js file.

Work Process

	1.	Cloning the Repository: We started by cloning the GitHub repository.
	2.	Creating HTML Pages: Create or update necessary HTML pages for the user interface.
	3.	Developing JavaScript Functions: Implement necessary API and UI functions.
	4.	Testing and Error Handling: Test the application for errors and track bugs via the Issues tab on GitHub.
	5.	Refactoring: Continuously improve the code to ensure it is clean and readable.
	6.	Documentation: All functions will be documented using JS Docs.

Work Distribution

We are two students working together, using GitHub Projects to assign tasks and GitHub Issues to track bugs and improvements.

Delivery

For delivery, the following items will be included:

	•	A link to the public GitHub repository
	•	(Optional) A link to the deployed production website (Netlify/Vercel/GitHub Pages)
	•	(Optional) A Gantt chart or Kanban project board
	•	(Optional) A video or written summary of the work
	•	(Optional) A link to Figma design (wireframe/prototype)

Level 2 (Optional Challenge)

For additional functionality, we may implement the following:

	•	Emoji menu to react to posts
	•	Comment form to allow commenting on posts
	•	Reply comment form to reply to comments
	•	Follow/Unfollow users
	•	Pagination for posts
	•	Search function based on keywords
	•	Use TypeScript instead of JavaScript
	•	Create unit tests for key functions

Resources

	•	Noroff API Documentation
	•	Noroff API Swagger
