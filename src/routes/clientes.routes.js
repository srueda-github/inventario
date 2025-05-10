import {Router} from "express";
import { methodHTTP as clienteController} from "../controllers/cliente.controllers.js";

/* creamos el enrutador*/
const router = Router();

/*metodo http get, configuracion respuesta desde server */
router.post("/", clienteController.postClientes); /* para crud create*/

export default router;  
