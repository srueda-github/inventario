import {Router} from "express";
import { methodHTTP as categoriaController} from "../controllers/categoria.controllers.js";

/* creamos el enrutador*/
const router = Router();

/*metodo http get, configuracion respuesta desde server */
router.get("/", categoriaController.getCategorias)

/* hacemos disponible al router en toda la aplicacion */
    export default router;