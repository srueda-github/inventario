import {Router} from "express";
import { methodHTTP as empleadoController} from "../controllers/empleado.controllers.js";

/* creamos el enrutador*/
const router = Router();

/*metodo http get, configuracion respuesta desde server */
router.get("/", empleadoController.getEmpleados); /*para crud read*/

/* ruta que recibe un parametro*/
router.get("/:id", empleadoController.getEmployee); /* para crud read una sola fila*/



/* hacemos disponible a router para toda la app*/
export default router;  