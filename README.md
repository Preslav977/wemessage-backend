# wemessage-backend

# Overview

This is the backend of the wemessage that handles all the CRUD operations from the frontend, which is created with PostgreSQL, Express, React, and Node.

# About the project the project

WeMessage is a messaging application that allows users to update their information, start a conversation with another user, send messages or images, create groups with more users, send messages or images, and use GlobalChat, which contains all users that can send messages or images between them.

# Live Preview

-

# Features

- Live validation 
- The user can update their background image
- The user can update their profile image
- The user can update their information
- The user can update their password
- The user can see their online presence when they log in or log out
- A user can start a conversation with another user
- The user can type to search for another user
- A user can send messages to another user
- A user can send an image to another user
- The user can edit their message
- The user can delete their message or image
- The user can create a group by selecting the user they had a conversation with
- In the group, you can send a message or image, edit their message, and delete their message
- Only admins for now can update the group name and delete the group
- globalChat that has all the users that you can send a message or image to, edit your message, or delete it

# Technology Used

- Prisma with PostgreSQL: creating models and relationships between users, chats, messages, groups, and messagesGGChat (messages for Groups and GlobalChat), globalChat
- PassportJS: checking if the user exists and creating the localStrategy for login with username and password
- Express: provides a robust set of features for web applications.
- Node: that allows the JavaScript to run more modules, packages, etc.
- PrismaSessionStore: creating a session and storing it for 24 hours
- Bcrypt: hashing the passwords for the users
- Cloudinary: uploading the images to the cloud and deleting them

# Lessons Learned
- Enum: how to use them for allowing the user to have multiple roles and online presence
- Prisma ORM: a user that can have two relationships for the chats, one for sending and one for the receiver, which solved the problem with 1:1 conversation between each user
- Learned that it is better sometimes to create, update, or delete in the backend and fetch the result by ID instead of doing that in the frontend.
- Learned that with Prisma you can use raw queries for searching for a user
- Learned that you can use the OR operator in a query to prevent creating the same conversation between the users if it exists.
- Learned that inside include, you can select the field and order it by asc or desc
- Learned also that OR operator is useful to fetch the chats either for the sender or the receiver
- BcryptJS: learned that you can check your old password with bcrypt that allows you to update the user password only if it matches
- Learned that you can connect multiple users using connect, for example, creating a group or global chat.
- Also learned that you can update the user's online presence on login or logout
- Learned also that you can select users by role using some in a query
- Cloudinary: learned how to delete an image from the cloud by using uploader destroy
- Supertest: learned how to use the beforeAll hook to connect to the database and then use afterAll to delete everything and disconnect before running each test 

# Future Improvements
- Would remove creating each user, chat, or group from each test and maybe create it in another file to reduce the load for each test
- Would change the way of validating for uploading an image before it is actually uploaded
- Would implement the socket.io library