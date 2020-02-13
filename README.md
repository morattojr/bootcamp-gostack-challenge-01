
<h2 align="center">
  # First Challenge on Bootcamp GoStack
</h2>

<img src="https://github.githubassets.com/images/modules/profile/profile-first-repo.png" alt="Minha Figura">	

<h3 align="center">
  NodeJS Basics
</h3>

<p align="center">
  <a href="#rocket-about-the-challenge">About the Challenge</a>
</p>

## :rocket: About the Challenge
Create an Application to store projects and tasks using [Express](https://expressjs.com/pt-br/).

### Routes

- `POST /projects`: This route receives `id` and `title` on body and post a new project within an array in the following format: `{ id: "1", title: 'New project', tasks: [] }`; You have to send the project as a String with double quotes.

- `GET /projects`: List all projects and tasks;

- `PUT /projects/:id`: Changes the title by `id`;

- `DELETE /projects/:id`: Delete project by `id`;

- `POST /projects/:id/tasks`: This route receives `title` on body and post a new task on tasks array by `id`;

### Example

Calling the route `POST /projects` with body `{ id: 1, title: 'New project' }` and route `POST /projects/1/tasks` with `{ title: 'New Task' }`, projects array must be like this:

```js
[
  {
    id: "1",
    title: "New project",
    tasks: ["New task"]
  }
];
```

### Middlewares

- checkExistingProjects;

- checkNonExistingProjects;

---
<p>Made with ♥ by Geraldo Moratto Junior- <a href="https://www.linkedin.com/in/geraldo-moratto-junior/" target="_blank" rel="nofollow">Get in touch!</a></p>
