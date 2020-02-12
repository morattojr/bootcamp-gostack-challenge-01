
<h3 align="center">
  # First Challenge on Bootcamp GoStack
</h3>

<h3 align="center">
  Challenge 1: NodeJS Basics
</h3>

<p align="center">
  <a href="#rocket-sobre-o-desafio">About the Challenge</a>
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

Made with ♥ by @morattojr

