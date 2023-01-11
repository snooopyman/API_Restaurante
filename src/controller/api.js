const ContenedorFile = require("./file");

const contendorFileController = new ContenedorFile('./src/data/data.json');


const modificarEstado = (req, res, next) => {
    const {id} = req.params;
    try {
        contendorFileController.updateById(id);
        res.status(204);
    } catch (e) {
        console.log(error);
        next(e);
    }
}
const getAll = (req, res, next) => {
    try {
        const result = contendorFileController.getAll();
        res.status(200).json(result);
    } catch (e) {
        next(e);
    }
}
const getByID = (req, res, next) => {
    const {id} = req.params;
    try {
        const result = contendorFileController.getById(id);
        res.status(200).json(result);
    } catch (e) {
        next(e);
    }
}


module.exports = {
    modificarEstado,
    getAll,
    getByID
};

