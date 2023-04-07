# <img align="left" width="40" height="40" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c4e7.png">  Manchester United Blog React.js Project


## About The Project - Non-technical Description

The project is designed as a football blog platform for the fans of Manchester United FC. 
The main "unit" in this platform is the blogs section which can be viewed, created, modified, comented and deleted depending on certain user roles.

This [project](https://github.com/s-itov/Manchester-United-Blog-ReactJS.git) was created by [Simeon Itov](https://github.com/s-itov) for the purposes of React. js Softuni Course, Feb-April 2023.

![Project Dashboard](https://i.ibb.co/6mnccCP/1.png](https://i.ibb.co/GWZvY0G/man-u-blog.png)


## Public part

This part of the platform is designed for non-registered users. These users have access to the following:

* Home page -> 
Main dashboard page in which the user can find basic information about the site as well as the latest blogs. All users can see the live table in the Birtish Premier League as well as the next fixture of the club.
* Blogs -> 
Blogs catalog page which lists all available blogs created by the creators /authors/.
* Blog Details Page -> 
A page offering more detailed information about the blog article such as: image, title, short description, author, submission date details, the main text and all the comments posted by the registered users.
* Creators-> 
A page listing all blog creators registered in the platform with their avatars, names, emails and about info.
* Login-> 
A page where the login form for already registered users is located.
* Register-> 
A page where the register form for non-users is located.

## Private part

### Blog creators private pages

* Profile -> 
The page where a blog creator can view their user information as well as the blogs they've created. 
* Create Blog -> 
A page with a form for creating a blog.
* Edit Blog -> 
A page with a form for modification of a particularly selected blog, part of their blogs.
* Delete Blog -> 
A page with a confirmation about the deletion of particularly selected blog, part of their blogs.
* Comments -> 
Guest and users are able to read the comments in the blogs. 
Owners of a blog can not comment a blog they have created. 
Logged in useres can comment all the blogs that they have not created.

## About The Project - Technical Description

### Built With

* [HTML + CSS designed by Simeon Itov](https://github.com/s-itov)
* [React.js](https://reactjs.org/)
* [SoftUni practice server](https://github.com/softuni-practice-server/softuni-practice-server.git)

### To start the practice server:

When you are in the project directory:

Open a command prop window and navigate to the server directory with command  `cd server`.

While you are located in the server directory. To execute the server run the following command:  `node server.js`.

### Authentication

The server is initialized with two users, which can be used for immediate testing:
* peter@abv.bg : 123456
* john@abv.bg : 123456

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Learn More About React JS

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
