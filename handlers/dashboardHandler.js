const client = require('./../data/database');

const dashboardHandler=(req,res)=>{
    let sql = 'SELECT * FROM pokemons ORDER BY pokemon_id LIMIT 20;';
    client.query(sql).then(results => {

        res.render('./pages/dashboard', {pokemons: results.rows})
        
    }).catch((err) => {
        console.log(err);
    })

}



module.exports = dashboardHandler;