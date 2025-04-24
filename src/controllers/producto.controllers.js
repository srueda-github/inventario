import getConnection from "./../db/database.js"
const getProductos = async (req, res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query( "SELECT productos.ProductoID, productos.ProductoNombre, productos.PrecioUnitario, productos.UnidadesStock, categorias.CategoriaNombre FROM productos INNER JOIN categorias ON productos.CategoriaID = categorias.CategoriaID")
        res.json(result);    
    } catch (error) {
        console.log("Error 500"); 
    }
    

}

export const methodHTTP = {
    getProductos
}