import getConnection from "./../db/database.js"

const postClientes = async (req, res)=>{
    try {
        const {ClienteID , Compania , Contacto, Titulo, Direccion , Ciudad , Regiones  , CodigoPostal, Pais, Telefono, Fax } = req.body;

        const client = {ClienteID , Compania , Contacto, Titulo, Direccion , Ciudad , Regiones  , CodigoPostal, Pais, Telefono, Fax} /*destructurar,  objeto*/

        const connection = await getConnection();

        const result = await connection.query("INSERT INTO clientes SET ?",client ) 
        res.json({result})
    } catch (error) {
        console.log("Error 500"); 
    }
}




export const methodHTTP = {
    postClientes
}