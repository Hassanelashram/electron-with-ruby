import { fetchPosts } from "./fetchposts.js";
const deletePost = (id) => {
    fetch(`http://notes-desktop-api.herokuapp.com/api/v1/notes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    location.reload();
  }
  
  export { deletePost }