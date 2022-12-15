const Actor = require('./table');

exports.createActor = async(actorObj) => {
    try {
        const newActor = await Actor.create(actorObj);
        console.log(newActor);
    } catch (error) {
        console.log(error);
    }
};

exports.readActors = async(actorFilter) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
}

exports.updateActor = async(actorObj) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
}

exports.deleteActor = async(actorName) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
}