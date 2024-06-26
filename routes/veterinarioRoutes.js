import express from 'express';
import { 
    autenticar, 
    comprobarToken, 
    confirmar, 
    nuevoPassword, 
    olvidePassword, 
    perfil, 
    registrar,
    actualizarPerfil,
    actualizarPassword
} from '../controllers/veterinarioController.js';
import checkAuth from '../middleware/authMiddleware.js';
const router = express.Router();

// Area publica
router.post( '/', registrar);
router.get( '/confirmar/:token', confirmar);
router.post( '/login', autenticar);
router.post( '/olvide-password', olvidePassword);
router.route( '/olvide-password/:token').get(comprobarToken).post(nuevoPassword);

// Area publica
router.get( '/perfil', checkAuth, perfil);
router.put('/perfil/:id', checkAuth, actualizarPerfil);
router.put('/actualizar-password', checkAuth, actualizarPassword)

export default router;