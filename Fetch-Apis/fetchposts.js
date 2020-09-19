const container = document.querySelector("#container")

const fetchPosts = (url) => {
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        container.innerHTML = "";
        data.forEach(note => {
            let html = `<div class="col-3 note-card">
                      <h2><input value=${note.title}> </h2>
                      <textarea>${note.body === null ? "Nothing here" : note.body}</textarea>
                      <a class="btn-primary" onclick="updatePost(${note.id})"> Save changes</a>
                    </div>`
            container.insertAdjacentHTML("beforeend", html)
        });
    })
}

export { fetchPosts }