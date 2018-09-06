// A tiny fake API so the data-fetching exercises work without a real
// server or network. Each function returns a promise that resolves (or
// sometimes rejects) after a short delay, just like a real request.

const USERS = [
  { id: 1, name: "Ada Lovelace", username: "ada", city: "London" },
  { id: 2, name: "Alan Turing", username: "alan", city: "Manchester" },
  { id: 3, name: "Grace Hopper", username: "grace", city: "New York" },
  { id: 4, name: "Katherine Johnson", username: "kate", city: "Hampton" },
];

const POSTS = [
  { id: 1, userId: 1, title: "On algorithms" },
  { id: 2, userId: 1, title: "The analytical engine" },
  { id: 3, userId: 3, title: "Compilers are cool" },
];

function delay(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

export function fetchUsers() {
  return delay(600, USERS);
}

export function fetchUser(id) {
  const user = USERS.find((u) => u.id === id);
  return user
    ? delay(400, user)
    : Promise.reject(new Error(`user ${id} not found`));
}

export function fetchPostsByUser(userId) {
  return delay(400, POSTS.filter((p) => p.userId === userId));
}

// a version that fails, to practice error handling
export function fetchUsersFailing() {
  return new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Server unavailable")), 600)
  );
}
