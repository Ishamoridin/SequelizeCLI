const Movie = require('./table');

keyChecker = (input) => {
    let output = {};
    if (input.title){output.title = input.title};
    if (input.actor){output.actor = input.actor};
    if (input.director){output.director = input.director};
    if (input.rating || input.rating===0){output.rating = input.rating};
    return output
}

exports.keyChecker = keyChecker


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

exports.updateMovie = async(movieObj, movieFilter) => {
    try {
        const searchFilter = keyChecker(movieFilter);
        const updatedMovie = await Movie.update(movieObj, { where: searchFilter}).then((result) => {
            return result
        });
        console.log(`updated: ${updatedMovie}`);
        return updatedMovie
    } catch (error) {
        console.log(error)
    };
    return results
}

exports.deleteMovie = async(movieName) => {
    try {
        const deletedMovie = await Movie.destroy({where: movieName}).then((results) => {return results});
        return deletedMovie
    } catch (error) {
        console.log(error)
    }
}