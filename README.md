# Coding Challenge

## The Situation:
You've been hired by a new search engine company Sloogle as a Full Stack Developer. For your first assignment, you've been assigned the task of making a prototype clone of Google Images for Sloogle called Sloogle Pics. Similar to Google Images, visitors to Sloogle Pics should be able to search for and download pictures. Additionally, the supervisors at Sloogle have asked for basic social feature to "Like" pictures.  The likes are anonymous since users do not have to log in to use the app.

## Tasks:
1. Using Angular 1.X (and any other dependencies) and the Unsplash API (https://unsplash.com/developers) create a page similar to Google Images with a list view of images and basic search functionality. We want to see how you would structure your code and use the API to retrieve results based on a query string. The boilerplate for the Angular app is available in the public directory in the code_challege repository.

    We're looking to gauge your Angular JS prowess (what code are you putting into the controller vs the model, are you using services or factories, etc), and just generally how you go about writing good JS code. Design is not critical (we don't expect a pixel perfect design), but we are looking for common sense when it comes to design and user experience (feel free to pull in any front end frameworks / tool kits that you think might be helpful with this).  

2. Use Node.JS/Express along with a relational database (Postgres, on Heroku) on the backend to expose a series of API's to manage "favorites" for each picture. When displaying images on the client side, display the number of favorites the picture aggregated. We've provided basic boilerplate for a Node app on the backend. You should use sequelize to simplify the integration with your database.

    Over here, we're looking to see how you would use Nodejs, Express framework to structure your server including routes, controllers and models.  We have set you up with a rough structure in this repo to help but feel free to restructure it as you see fit.

3. Bonus - since this is your first assignment at Sloogle, devise an extra killer feature that you think your supervisors at Sloogle would really enjoy. 

    We're looking to see how you contribute to the team outside of just coding. We value feedback and ideas at TritonWear!

4. Finally, deploy your application to Heroku or AWS (free tier).  Send us a fork of this repo or a zip of your source code and a link to your deployed application.
