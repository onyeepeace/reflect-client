export const getNotes = () =>
  fetch("https://year-in-review-template.herokuapp.com").then((res) =>
    res.json()
  );

export const createNote = (note) =>
  fetch("https://year-in-review-template.herokuapp.com/create", {
    method: "POST",
    headers: {
      Accept: "applicaton/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  });

export const getNote = (id) =>
  fetch(`https://year-in-review-template.herokuapp.com/${id}`).then((res) =>
    res.json()
  );

export const updateNote = (note, id) =>
  fetch(`https://year-in-review-template.herokuapp.com/${id}`, {
    method: "POST",
    headers: {
      Accept: "applicaton/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  });

export const deleteNote = (id) =>
  fetch(`https://year-in-review-template.herokuapp.com/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
