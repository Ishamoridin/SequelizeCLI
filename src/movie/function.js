const Movie = require('./table');

exports.createMovie = async(movieObj) => {
    try {
        const newMovie = await Movie.create(movieObj);
        console.log(`created: ${newMovie}`);
    } catch (error) {
        console.log(error);
    }
};

exports.readMovies = async(movieFilter) => {
    try {
        const results = await Movie.findAll(movieFilter);
        return results
    } catch (error) {
        console.log(error)
    }
}

exports.updateMovie = async(movieObj) => {
    try {
        const updatedMovie = await Movie.update(movieObj);
        console.log(`updated: ${updatedMovie}`)
    } catch (error) {
        console.log(error)
    }
}

exports.deleteMovie = async(movieName) => {
    try {
        const deletedMovie = await Movie.destroy(movieName);
        console.log(`deleted: ${deletedMovie}`)
    } catch (error) {
        console.log(error)
    }
}