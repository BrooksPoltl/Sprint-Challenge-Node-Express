const express = require('express');
const server = express();
const actionDB = require('./data/helpers/actionModel');
const projectDB = require('./data/helpers/projectModel');


server.use(express.json());

//get actions and projects

server.get('/api/actions',(req,res)=>{
    actionDB.get()
    .then(actions=>{
        res.json(actions)
    })
    .catch(err=>{
        res.status(500).json({error: 'post cannot be retrieved'})
    })
})

server.get('/api/projects', (req, res) => {
    projectDB.get()
        .then(projects => {
            res.json(projects)
        })
        .catch(err => {
            res.status(500).json({ error: 'projects cannot be retrieved' })
        })
})

//get projects and actions by id

server.get('/api/actions/:id', (req,res)=>{
    const id = req.params.id
    actionDB.get(id)
        .then(action =>{
            res.json(action)
        })
        .catch(err =>{
            res.status(500).json({ error: 'cannot retrieve that id'})
        })
})

server.get('/api/projects/:id', (req, res) => {
    const id = req.params.id
    projectDB.get(id)
        .then(project => {
            res.json(project)
        })
        .catch(err => {
            res.status(500).json({ error: 'cannot retrieve that id' })
        })
})

// post project and actions

server.post('/api/actions', (req, res) => {
    const postInfo = req.body;
    actionDB
        .insert(postInfo)
        .then(result => {
            res.status(201).json(result);
        })
        .catch(err =>
            res.status(500).json({ errorMessage: 'internal error' })
        );
});

server.post('/api/projects', (req, res) => {
    const projectInfo = req.body;
    projectDB
        .insert(projectInfo)
        .then(result => {
            res.status(201).json(result);
        })
        .catch(err =>
            res.status(500).json({ errorMessage: 'internal error' })
        );
});

//update project and post


module.exports = server;

