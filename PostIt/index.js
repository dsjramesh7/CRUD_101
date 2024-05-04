const form = document.querySelector("#form");
const input = document.getElementById("input");
const msg = document.getElementById("msg");
const post = document.querySelector("#post");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("clicked");
  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post is blank Kiddo!!!";
  } else {
    msg.innerHTML = "";
    acceptData();
  }
};

let data = {};

let acceptData = () => {
  data["text"] = input.value;
  // console.log(data);
  createPost();
};

let createPost = () => {
  post.innerHTML += `
  <div class="singlePost">
    <p>${data.text}</p>
    <span id="options">
      <button onClick="editPost(this)" class="editBtn">Edit</button>
      <button onClick="deletePost(this)" class="deleteBtn">Delete</button>
    </span>
  </div>
  `;
  input.value = "";
  // console.log(post);
};

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
