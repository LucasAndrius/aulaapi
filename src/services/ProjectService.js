//funções
//comunicação do sistema com o banco de dados 

const db = require('../db');

module.exports = {
    getAll:() =>{
        return new Promise((resolve,reject)=>{

            db.query('SELECT * FROM projects',(error,result)=>{
                if(error){
                    reject(error);
                    return;
                }
                resolve(result);
            });

        });
    },
    findById: (id) => {
        return new Promise((resolve, reject)=>{

            db.query('SELECT * FROM projects WHERE id = ?', [id], (error, results) => {
                if(error) { 
                    reject(error); 
                    return;
                }
                if(results.length > 0) {
                    resolve(results[0]);
                } else {
                    resolve(false);
                }
            });

        });
    },
};