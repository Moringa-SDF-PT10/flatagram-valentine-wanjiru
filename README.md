
# Flatagram Project

## Overview

Flatagram is an application that displays an image with a title and allows users to add comments and like the image. The application uses a JSON server to fetch the images and comments data

## Features

- Displays an image and its title fetched from a JSON server.
- Allows users to view and add comments to the image.
- Enables users to like the image, with the like count increasing with every click.

## Technologies Used

- HTML
- CSS
- JavaScript
- JSON Server

## Setup Instructions

1. **Clone the Repository:**

   ```bash
   git clone git@github.com:Valentine101098/flatagram-valentine-wanjiru.git

   ```
    - Navigate into the repository you just cloned

    ```bash
     cd flatagram-valentine-wanjiru
    ```

2. **Install JSON Server:**

- To check if you have JSON server installed, run the following command;

   ```bash
  json-server --version
  ```


- If a version number appears, skip to the next step. If not,you need to install JSON server using the following command;

    ```bash
    npm install json-server --global

    ```

3. **Start JSON server**

Run this command to get the backend started;

 ```bash
    json-server --watch db.json
```
Make sure the db.json file is in the same directory where you run this command.

4. **Open `index.html` in your browser.**

## File Structure
```bash
flatagram/
├── index.html         # Main HTML file

├── flatagram.css      # CSS stylesheet

├── flatagram.js       # JavaScript logic

└── db.json            # JSON database for storing data
```


## Data Structure (db.json)

The `db.json` file is structured as follows;

```bash
{
    "images": [
      {
        "id": 1,
        "title": "Woofing those bugs away",
        "likes": 0,
        "image": "./assets/coder-dog.png"
      }
    ],
    "comments": [
      {
        "id": 1,
        "imageId": 1,
        "content": "What a cute dog!"
      },
      {
        "id": 2,
        "imageId": 1,
        "content": "He's got a nose for bugs!"
      },
      {
        "id": 3,
        "imageId": 1,
        "content": "Woof!"
      }
    ]
  }

```
#### Brief Overview of the JSON file:

1. `images`: This is an array of image objects containing;
    - `id` : Unique identifier for the image
    - `title` : Title of the image
    - `image` : URL of the image
    - `likes` : Number of likes the image has

2. `comments`: This is an array of comment objects each containing;
    - `id`: Unique identifier for the comment
    - `imageId`: ID of the image to which the comment belongs
    - `content`: Text of the comment

## API Endpoints

The application uses the following API endpoints:

- `GET /images`: Fetches the list of images

- `GET/comments`: Fetches the list of comments

## Interactions

The user can interact with the following parts of the application:

- `likes` : The user can click on the heart icon to increase the number of likes on the image

- `comments` : The user can add a comment by typing it on the comment-section input and then pressing on the enter key on their keyboard or clicking on the post button

## Contributions

Feel free to contribute to this project by submitting pull requests.
