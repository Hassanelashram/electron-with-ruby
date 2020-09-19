const title = document.querySelector("#mytitle")

const createPost = (url) => {
    fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({title: title.value})
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
}

export { createPost };