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
        let json = {error:'', result:{}};

        let title = req.body.title;
        let body = req.body.body;

        if(title && body) {
            let projectId = await ProjectService.add(title,body);

            json.result = {
                id: projectId,
                title,
                body
            }
        } else {
           json.error('Campos não enviados.')
        }

        res.json(json);
    },
    edit: async (req,res) =>{
        let json = {error:'', result:{}};

        let id = req.params.id;
        let title = req.body.title;
        let body = req.body.body;

        if(id && title && body) {            
            await ProjectService.update(id, title, body);

            json.result = {
                id,
                title,
                body
            }
        } else {
            json.error('Campos não enviados');
        }

        res.json(json);
    },
    delete: async (req,res) =>{
        let json = {error:'', result:{}};

        await ProjectService.delete(req.params.id);

        res.json(json);
    }
};