const {Router} =  require("express");
const {modificarEstado, getAll, getByID} = require("../../controller/api");
const router = Router();

router.get('/test',(req, res) => {
    res.send('Hola desde Test');
});

router.get('/:id', getByID);
router.get('/', getAll);
router.put('/modificarEstado/:id', modificarEstado);



module.exports = router;