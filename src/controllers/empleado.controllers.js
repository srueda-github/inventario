import getConnection from "../db/database.js"

const getEmpleados = async (req, res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT EmpleadoID, Nombre, Apellido , Direccion FROM empleados")
        res.json(result);    
    } catch (error) {
        console.log("Error 500"); 
    }
}

const postEmpleados = async (req, res)=>{
    try {
        const {EmpleadoID, Nombre, Apellido , Direccion} = req.body;

        const employee = {EmpleadoID, Nombre, Apellido , Direccion} /*destructurar,  objeto*/

        const connection = await getConnection();

        const result = await connection.query("INSERT INTO empleados SET ?",employee ) 
        res.json({result})
    } catch (error) {
        console.log("Error 500"); 
    }
}


const getEmployee = async (req, res)=>{
    try {
        console.log(req.params);
        const {id} = req.params
        const connection = await getConnection();
        const result = await connection.query("SELECT EmpleadoID, Nombre, Apellido , Direccion FROM empleados WHERE EmpleadoID = ?", id)
        res.json(result);    
    } catch (error) {
        console.log("Error 500"); 
    }
}

const deleteEmployee = async (req, res)=>{
    try {
        console.log("Id de empleado a eliminar: ", req.params);
        const {id} = req.params
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM empleados WHERE EmpleadoID = ?", id)
        res.json(result);    
    } catch (error) {
        console.log("Error 500"); 
    }
}

const updateEmpleados = async (req, res)=>{
    try {
        const {id} = req.params
        const {EmpleadoID, Nombre, Apellido , Direccion} = req.body; /*body, es el formulario que llena el usuario */
        const employee = {EmpleadoID, Nombre, Apellido , Direccion} /*destructurar,  objeto*/
        const connection = await getConnection();
        const result = await connection.query("UPDATE empleados SET ? WHERE EmpleadoID = ?",[employee, id] ) 
        res.json({result}) 
    } catch (error) {
        console.log("Error 500"); 
    }
}



export const methodHTTP = {
    getEmpleados,
    postEmpleados,
    getEmployee ,
    deleteEmployee,
    updateEmpleados
}