const express = require('express');

const server = express();

server.use(express.json());

const projects = [];

/*
 * Middleware for checking existing projects
 */
function checkExistingProjects(req, res, next) {
  const {id} = req.body;

  const project = projects.find(p => p.id == id);

  if(project) {
    return res.status(400).json({ error: 'Project alread exists with same ID param' });
  }
    
  return next();
}
/*
 * Middleware for checking non existing projects
 */
function checkNonExistingProjects(req, res, next) {
  const {id} = req.params;
  
  const project = projects.find(p => p.id == id);
    
  if(!project) {
    return res.status(400).json({ error: 'Project not found' });
  }

  return next();
}

//GET All projects
server.get('/projects', (req, res) => {
  return res.json(projects);
})
//GET One project
server.get('/projects/:id', checkNonExistingProjects, (req, res) => {
  const { id } = req.params;

  const project = projects.find(p => p.id == id);

  return res.json(project);
})
//POST project
server.post('/projects', checkExistingProjects, (req, res) => {
  const { id, title } = req.body;

  const project = {
    id,
    title,
    tasks: []
  };

  projects.push(project);

  return res.json(project);
}) 
//UPDATE project
server.put('/projects/:id', checkNonExistingProjects, (req, res) => {
  const {id} = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.title = title;

  return res.json(project);
})
//DELETE a project
server.delete('/projects/:id', checkNonExistingProjects, (req, res) => {
  const {id} = req.params;

  const projectIndex = projects.findIndex(p => p.id == id);

  projects.splice(projectIndex, 1);

  return res.json(projects);
})
//POST new task on project
server.post('/projects/:id/tasks', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  if(!project) {
    return res.status(400).json({ error: 'Project not found' });
  }

  project.tasks.push(title);

  return res.json(project);
});

server.listen(3000);