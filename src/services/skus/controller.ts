import db from "../../models";
import Product from "../../models/product.model";
import SkuModel from './../../models/sku.model';
const Op = db.Sequelize.Op;

export const createSKU = async (req: any, next: any) => {
  try {
    const { skuName, productId, skuGrammage,skuFullName,skuImage,skuCategory } = req.body;
    const checkBrand = await SkuModel.findOne({
      where: {
        skuName, productId
      }
    })
    if (checkBrand) {
      return "SKU already exists";
    }
    const brand = {
      skuName, productId, skuGrammage,skuFullName,skuImage,skuCategory
    };
    const data = await SkuModel.create(brand);
    await data.save();
    if (data) {
      const dataValue = await SkuModel.findByPk(data?.skuId,{include:[Product]});
      return dataValue;
    }

  } catch (error) {
    next(error)
  }
}


export const findAllSKUs = async (req: any, next: any) => {
  try {
    const search = req.query.search;
    var condition = search ? { skuName: { [Op.like]: `%${search}%` } } : null;

    const data = await SkuModel.findAll({ where: condition })
    if (data)
      return data;

  } catch (error) {
    next(error)
  }
};

export const getSKUById = async (req: any, next: any) => {
  try {
    const id = req.params.id;
    const data = await SkuModel.findByPk(id)
    if (data) {
      return data;
    } else {
      return "SKU not found";
    }
  } catch (error) {
    next(error)
  }
};

export const updateSKUById = async (req: any, next: any) => {
  try {
    const id = req.params.id;
    const { skuName, productId, skuGrammage,skuFullName,skuImage,skuCategory } = req.body
    let payload: any = {
      skuName, productId, skuGrammage,skuFullName,skuImage,skuCategory
    }

    const num = await SkuModel.update(payload, {
      where: { skuId: id }
    })
    if (num == 1) {
      const data = await SkuModel.findByPk(id)
      return {
        message: "SKU updated successfully.",
        data
      };
    };
  } catch (error) {
    next(error);
  }
}
export const deleteSKUById = async (req: any, next: any) => {
  try {
    const id = req.params.id;

    const num = await SkuModel.destroy({
      where: { skuId: id }
    })

    if (num == 1) {
      return {
        message: "SKU is deleted successfully!"
      };
    } else {
      return {
        message: `Cannot delete SKU with id=${id}. Maybe SKU was not found!`
      };
    }
  } catch (error) {
    next(error);
  }
};