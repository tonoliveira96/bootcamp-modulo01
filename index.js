const express = require('express');

const server = express();
server.use(express.json())

const projects = [{
  id: "1",
  title: "primeiro projeto teste",
  tasks:["Nova terefa"]
}]

server.get('/projects', (req, res)=>{
  return res.json(projects);
} )

server.get('/projects/:id', (req, res)=>{
  const {id} = req.params
  return res.json(projects[id]);
} )

server.post('/projects',(req,res)=>{

  const {id} = req.body;
  const {title} = req.body;
  const {tasks} = req.body;
  
  const newTask = {id, title, tasks} 
   
  projects.push(newTask);

  return res.json(projects)

})

server.put('/projects/:id', (req, res)=>{
  const{id} = req.params;
  const {title} = req.body;

  projects[id].title = title;

  return res.json(projects)
})

server.post('/projects/:id/tasks', (req, res)=>{
  const{id} = req.params;
  const {tasks} = req.body;

  projects[id].tasks.push(tasks)

  return res.json(projects)
})

server.delete('/projects/:id', (req, res)=>{
  const {id } = req.params;

  projects.splice(id, 1);

  return res.send();
})

server.listen(3000)