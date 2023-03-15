import {
  getProductsService,
} from "../model/product.service.js";

export const getProducts = async (req, res) => {
  try {
    const result = await getProductsService();
    res.json({ status: true, message: "Successfull Database request send" });
  } catch (error) {
    console.log(error);
    res.json({ status: false, message: error });
  }
};
