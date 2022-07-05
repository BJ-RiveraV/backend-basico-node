const { Router } = require('express');
const { usuariosGet, usuariosPost, usuariosPut, usuariosPath, usuariosDelete } = require('../controllers/usuarios.controller');

const router = Router();

router.get('/', usuariosGet);

router.post('/', usuariosPost);

router.put('/:id', usuariosPut);

router.put('/', usuariosPath);

router.delete('/', usuariosDelete);


module.exports = router;