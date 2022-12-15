const yargs=require('yargs');
const { openSequelizeConnection} = require ('./db/connection');
const { createMovie, readMovies, updateMovie, deleteMovie, keyChecker} = require ('./movie/function');

async function app(yargsInput) {
    await openSequelizeConnection.sync();
    if (yargsInput.create) {
        // put code to add a movie here
        const newMovie = keyChecker(yargsInput)
        await createMovie(newMovie);
        console.log(`Created new movie:`)
        console.table(newMovie)
    } 
    else if (yargsInput.read) {
        // put code to list movies here
        const movieFilter = keyChecker(yargsInput);
        const results = await readMovies({movieFilter});
        console.table(results[0].dataValues)
    } 
    else if (yargsInput.update) {
        //put code to update actor field here
        const updatedMovie = keyChecker(yargsInput);
        const results = await updateMovie(updatedMovie, yargsInput.title);
        console.log(`Updated movie:`)
        if(results){console.table(updatedMovie)}
    } 
    else if (yargsInput.delete) {
        //put code to delete a movie here
        const deletedMovie = {title: yargsInput.title};
        const results = await deleteMovie(deletedMovie);
        if(results){console.log(`Deleted Movie:`);console.table(deletedMovie)}
        else {console.log(`No movies with that title.`)}

    } 
    else {
        console.log('Unrecognized command');
    }
};

app(yargs.argv);