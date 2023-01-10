const ContenedorFile = require("./file");

const contendorFileController = new ContenedorFile('./src/data/data.json');


const modificarEstado = (req, res, next) => {
    const {id} = req.params;
    const {estado} = req.body;
    try {
        contendorFileController.updateById(id, estado);
        res.status(204);
    } catch (e) {
        next(e);
    }
}
const getAll = (req, res, next) => {
    const {id} = req.params;
    const {estado} = req.body;
    try {
        contendorFileController.getAll(id, estado);
        res.status(204);
    } catch (e) {
        next(e);
    }
}
const getByID = (req, res, next) => {
    const {id} = req.params;
    const {estado} = req.body;
    try {
        contendorFileController.updateById(id, estado);
        res.status(204);
    } catch (e) {
        next(e);
    }
}


module.exports = {
    modificarEstado,
    getAll,
    getByID
};

