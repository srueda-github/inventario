import getConnection from "./../db/database.js"
const getCategorias = async (req, res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias")
        res.json(result);    
    } catch (error) {
        console.log("Error 500"); 
    }
    

}

export const methodHTTP = {
    getCategorias
}