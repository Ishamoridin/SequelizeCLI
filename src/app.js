const yargs=require('yargs');
const { openSequelizeConnection} = require ('./db/connection');
const { createMovie, readMovies, updateActor, deleteMovie} = require ('./movie/function');

async function app(yargsInput) {
    await openSequelizeConnection.sync();
    if (yargsInput.create) {
        // put code to add a movie here
        await createMovie({title: yargsInput.title, actor: yargsInput.actor, director: yargsInput.director, rating: yargsInput.rating});
    } 
    else if (yargsInput.read) {
        // put code to list movies here
        let movieFilter = {};
        if (yargsInput.title){movieFilter.title = yargsInput.title};
        if (yargsInput.actor){movieFilter.actor = yargsInput.actor};
        if (yargsInput.director){movieFilter.director = yargsInput.director};
        if (yargsInput.rating || yargsInput.rating===0){movieFilter.rating = yargsInput.rating};
        const results = await readMovies({movieFilter});
        console.table(results[0].dataValues)
    } 
    else if (yargsInput.update) {
        //put code to update actor field here
    } 
    else if (yargsInput.delete) {
        //put code to delete a movie here
    } 
    else {
        console.log('Unrecognized command');
    }
};

app(yargs.argv);