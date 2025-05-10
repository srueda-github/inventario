import {Router} from "express";
import { methodHTTP as productoController} from "../controllers/producto.controllers.js";

/* creamos el enrutador*/
const router = Router();

/*metodo http get, configuracion respuesta desde server */
router.get("/", productoController.getProductos)
router.put("/:id", productoController.updateProductos);

/* hacemos disponible al router en toda la aplicacion */
    export default router;