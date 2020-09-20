
const updatePost = (id, data) => {
  fetch(`http://notes-desktop-api.herokuapp.com/api/v1/notes/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
}

export { updatePost }