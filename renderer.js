// imports
import { fetchPosts } from "./Fetch-Apis/fetchposts.js";
import { updatePost } from "./Fetch-Apis/updatepost.js"
import { createPost } from "./Fetch-Apis/createpost.js";


// variables
const noteBtn = document.querySelector("#note-btn")


// fetches
fetchPosts("http://notes-desktop-api.herokuapp.com/api/v1/notes")

noteBtn.addEventListener('click', () => {
  let url = `http://notes-desktop-api.herokuapp.com/api/v1/notes`;
  createPost(url)
  fetchPosts("http://notes-desktop-api.herokuapp.com/api/v1/notes")
})



// window.onload = () => {
//   const updateBtn = document.querySelector("#update-btn")
//   console.log(updateBtn)
// }



// updateBtn.addEventListener('click', (id) => {
//   let url = `http://notes-desktop-api.herokuapp.com/api/v1/notes/${id}`;
//   updatePost(url)
// })



