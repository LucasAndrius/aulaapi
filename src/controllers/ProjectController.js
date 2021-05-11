const ProjectService = require('../services/ProjectService');

module.exports = {
    ping: (req,res)=>{
        res.json({pong:true});
    },
    all: async (req,res) =>{
        let json = {error:'',result:[]};

        let projects = await ProjectService.getAll();

        for(let i in projects){
            json.result.push({
                id: projects[i].id,
                title:projects[i].title
            });
        }

        res.json(json);
    },
    one: async (req,res) =>{
        let json = {error:'', result:{}};

        let id = req.params.id;
        let project = await ProjectService.findById(id);

        if(project) {
            json.result = project;
        }

        res.json(json);
    },
    new: async (req,res) =>{

    },
    edit: async (req,res) =>{

    },
    delete: async (req,res) =>{

    }
};