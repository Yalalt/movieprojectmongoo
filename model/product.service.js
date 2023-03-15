import "../config/mongoose.js";


export const getProductsService = async () => {
    const result = await pool.query();
    return result;
}