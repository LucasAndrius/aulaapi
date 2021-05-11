const ProjectService = require('../services/ProjectService');

module.exports = {
    ping: (req,res)=>{
        res.json({pong:true});
    }
};