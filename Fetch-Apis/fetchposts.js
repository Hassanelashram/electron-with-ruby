import { updatePost } from "./updatepost.js"
import { deletePost } from "./deletePost.js"
const container = document.querySelector("#container")

const fetchPosts = (url) => {
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        container.innerHTML = "";
        data.forEach(note => {
            let html = `<div class="col-3 note-card">
                      <input id="title-${note.id}" value=${note.title}>
                      <textarea id="text-${note.id}">${note.body === null ? "Nothing here" : note.body}</textarea>
                      <a id="id-${note.id}" class="btn-primary"> Save </a> <a id="del-${note.id}" class="btn-primary"> Delete </a>
                    </div>`
            container.insertAdjacentHTML("beforeend", html)
            
            document.querySelector(`#del-${note.id}`).addEventListener("click", (event) => {
                let id = event.target.id.substring(4)
                // let body = document.querySelector(`#id-${note.id}`).previousElementSibling.value
                // let title = document.querySelector(`#id-${note.id}`).parentElement.firstElementChild.value
                // let data = {"title": title, "body": body}
                deletePost(id)
            })

            document.querySelector(`#id-${note.id}`).addEventListener("click", (event) => {
                let id = event.target.id.substring(3)
                let body = document.querySelector(`#id-${note.id}`).previousElementSibling.value
                let title = document.querySelector(`#id-${note.id}`).parentElement.firstElementChild.value
                let data = {"title": title, "body": body}
                updatePost(id, data)
            })
        });
    })
}

export { fetchPosts }