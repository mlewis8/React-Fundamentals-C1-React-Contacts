const api = process.env.REACT_APP_CONTACTS_API_URL || "http://localhost:5001";

let token = localStorage.token;
const stringResult = Math.random().toString(36)
if (!token) token = localStorage.token = stringResult.substring(stringResult.length -8);

const headers = {
  Accept: "application/json",
  Authorization: token,
};

export const getAll = () =>
  fetch(`${api}/contacts`, { headers })
    .then((res) => res.json())
    .then((data) => data.contacts);

export const remove = (contact) =>
  fetch(`${api}/contacts/${contact.id}`, { method: "DELETE", headers })
    .then((res) => res.json())
    .then((data) => data.contact);

export const create = (body) =>
  fetch(`${api}/contacts`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());
