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


const updateProductos = async (req, res)=>{
    try {
        const {id} = req.params
        const {ProductoNombre , PrecioUnitario} = req.body; /*body, es el formulario que llena el usuario */
        const product = {ProductoNombre , PrecioUnitario} /*destructurar,  objeto*/
        const connection = await getConnection();
        const result = await connection.query("UPDATE productos SET ? WHERE 	ProductoID  = ?",[product, id] ) 
        res.json({result}) 
    } catch (error) {
        console.log("Error 500"); 
    }
}

export const methodHTTP = {
    getProductos,
    updateProductos
}