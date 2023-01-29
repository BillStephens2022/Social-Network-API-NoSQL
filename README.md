# Social-Network-API<br>![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

  ## Description

  Social Network API is an API application for a Social Network where users can sign up with username and email, add friends, and post thoughts and reactions to other users' thoughts.
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  npm install
  
  ## Usage
  
  type 'npm start' in the command line and user Insomnia or Postman to interact with the API.  
  
  Route endpoints below for the project:

   User endpoints: 
   1) /api/users - use to get all users ('GET' method) or create a new user ('POST' method).
   2) /api/users/:userId - use to get Single User ('GET' method), to update a user ('PUT' method), or delete a user ('DELETE' method).
   3) /api/users/:userId/friends/:friendId - use to add a friend to a user ('POST' method), or delete a friend from a user ('DELETE' method)

   Thought endpoints: 
   1) /api/thoughts - use to get all thoughts ('GET' method), or create a new thought ('Post' method)
   2) /api/thoughts/:thoughtId - use to get a single thought ('GET' method), update a thought ('PUT' method), or delete a thought ('DELETE' method)
   3) /api/thoughts/:thoughtId/reactions - use to create a reaction to a thought ('POST' method)
   4) /api/thoughts/:thoughtId/reactions/:reactionId - use to delete a reaction to a thought ('DELETE' method)


Waltkthrough Video below:



  ## License
This application is covered under the MIT License.
<br>For more information: https://opensource.org/licenses/MIT
  
  ## Contributing
  N/A
  
  ## Tests
  N/A

  ## Questions
  Contact Info<br>
  GitHub user name: BillStephens2022<br>
  Link to GitHub profile: https://github.com/BillStephens2022<br>
  Email: two4onebill@yahoo.com