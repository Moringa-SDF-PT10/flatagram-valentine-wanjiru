const IMAGES = "http://localhost:3000/images";
const COMMENTS = "http://localhost:3000/comments";

const logoContainer = document.getElementById("logo-container");
const imageContainer = document.getElementById("image-container");
const commentContainer = document.getElementById("comment-section");
const postContainer = document.getElementById("add-comment");
const heartButton = document.getElementById("heart");
const likeCountDisplay = document.getElementById("like-count");

const logo = document.createElement("img");
logo.setAttribute('src', "./assets/flatagram-logo.png");
logoContainer.appendChild(logo);

let imageResponse = fetch(IMAGES)
console.log("Image" , imageResponse);

let commentsResponse = fetch(COMMENTS)
console.log("Comments", commentsResponse);

function formatResponse(response) {
    const body = response.json();
    return body
}


function parseImageData(body) {
    const title = document.createElement("p");
    title.innerText = body[0]["title"];

    const imageContent = document.createElement("img");
    imageContent.setAttribute('src', body[0]["image"]);
    // console.log("JSON Data:", body);
    // console.log(imageContent);


    imageContainer.appendChild(title);
    imageContainer.appendChild(imageContent);
}

imageResponse.then(formatResponse).then(parseImageData);

function parseCommentsData(body){
    const comment1 = document.createElement("p");
    comment1.innerText = body[0]["content"];
    commentContainer.appendChild(comment1);
    const comment2 = document.createElement("p");
    comment2.innerText = body[1]["content"];
    commentContainer.appendChild(comment2);
    const comment3 = document.createElement("p");
    comment3.innerText = body[2]["content"];
    commentContainer.appendChild(comment3);
}

const addPost = document.createElement("input");
addPost.type = "text";
addPost.placeholder = "Add a comment...";
addPost.id = "comment";


const postBtn = document.createElement("input")
postBtn.type = "button";
postBtn.value = "Post";
postBtn.id = "post";

postContainer.appendChild(addPost);
postContainer.appendChild(postBtn)

postBtn.addEventListener('click', () => {
    let newComment = document.createElement("p");
    newComment.innerText = comment.value;
    comment.value = ""
    commentContainer.appendChild(newComment)



})

addPost.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        let newComment = document.createElement("p");
        newComment.innerText = addPost.value;
        addPost.value = "";
        commentContainer.appendChild(newComment);
    }
})

commentsResponse.then(formatResponse).then(parseCommentsData);


let likeCount = 0;
heartButton.addEventListener("click", () => {

    likeCount++;
    likeCountDisplay.textContent = likeCount ;
})



