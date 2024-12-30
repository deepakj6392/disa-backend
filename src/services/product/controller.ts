import { DEFAULT_PRODUCT } from "../../constants/default";
import db from "../../models";
import Product from "../../models/product.model";
const Op = db.Sequelize.Op;

export const createProduct = async (req: any, next: any) => {
  try {
    const { productName } = req.body;

    const checkBrand = await Product.findOne({
      where: {
        productName
      }
    })
    if (checkBrand) {
      return "Product already exists";
    }
    const brand = {
      productName
    };
    const data = await Product.create(brand);
    await data.save();
    if (data) {
      const dataValue = await Product.findByPk(data?.productId);
      return dataValue;
    }

  } catch (error) {
    next(error)
  }
}


export const findAllProducts = async (req: any, next: any) => {
  try {
    const search = req.query.search;
    var condition = search ? { productName: { [Op.like]: `%${search}%` } } : null;

    const data = await Product.findAll({ where: condition })
    if (data)
      return data;

  } catch (error) {
    next(error)
  }
};

export const getProductById = async (req: any, next: any) => {
  try {
    const id = req.params.id;
    const data = await Product.findByPk(id)
    if (data) {
      return data;
    } else {
      return "Product not found";
    }
  } catch (error) {
    next(error)
  }
};

export const updateProductById = async (req: any, next: any) => {
  try {
    const id = req.params.id;
    const { productName } = req.body
    let payload: any = {
      productName
    }

    const num = await Product.update(payload, {
      where: { productId: id }
    })
    if (num == 1) {
      const data = await Product.findByPk(id)
      return {
        message: "Product updated successfully.",
        data
      };
    };
  } catch (error) {
    next(error);
  }
}
export const deleteProductById = async (req: any, next: any) => {
  try {
    const id = req.params.id;

    const num = await Product.destroy({
      where: { productId: id }
    })

    if (num == 1) {
      return {
        message: "Product is deleted successfully!"
      };
    } else {
      return {
        message: `Cannot delete Product with id=${id}. Maybe Product was not found!`
      };
    }
  } catch (error) {
    next(error);
  }
};

export const createDefaultProducts= async()=>{
  try {
    const product= await Product.findOne({where: { productId: 1 }});
    if(!product){
      await Product.bulkCreate(DEFAULT_PRODUCT);
      console.log("Default products created successfully!")
    }
  } catch (error) {
    console.log(`default products create failed: ${error}`)
  }
}