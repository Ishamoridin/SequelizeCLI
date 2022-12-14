const Movie = require('./table');

exports.createMovie = async(movieObj) => {
    try {
        const newMovie = await Movie.create(movieObj);
        console.log(newMovie);
    } catch (error) {
        console.log(error);
    }
};
