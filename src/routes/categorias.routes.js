import {Router} from "express";
import { methodHTTP as categoriaController} from "../controllers/categoria.controllers.js";

/* creamos el enrutador*/
const router = Router();

/*metodo http get, configuracion respuesta desde server */
router.get("/", categoriaController.getCategorias); /*para crud read*/
router.post("/", categoriaController.postCategorias); /* para crud create*/

/* ruta que recibe un parametro*/
router.get("/:id", categoriaController.getCategory); /* para crud read una sola fila*/

/* ruta que recibe parametro id de categoria a borrar*/
router.delete("/:id", categoriaController.deleteCategory); /* para crud delete una sola fila*/

/* ruta que recibe como parametro tanto el cuerpo como el id a actualizar */
router.put("/:id", categoriaController.updateCategorias); /* para crud delete una sola fila*/


/* hacemos disponible a router para toda la app*/
export default router;  