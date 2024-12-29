import db from "../../models";
import RetailChain from "../../models/retail-chain.model";
const Op = db.Sequelize.Op;

export const createRetailChain = async (req: any, next: any) => {
  try {
    const { retailChain } = req.body;
    const checkBrand = await RetailChain.findOne({
      where: {
        retailChain
      }
    })
    if (checkBrand) {
      return "Retail Chain already exists";
    }
    const brand = {
      retailChain
    };
    const data = await RetailChain.create(brand);
    await data.save();
    if (data) {
      const dataValue = await RetailChain.findByPk(data?.retailChainId);
      return dataValue;
    }

  } catch (error) {
    next(error)
  }
}


export const findAllRetailChain = async (req: any, next: any) => {
  try {
    const search = req.query.search;
    var condition = search ? { retailChain: { [Op.like]: `%${search}%` } } : null;

    const data = await RetailChain.findAll({ where: condition })
    if (data)
      return data;

  } catch (error) {
    next(error)
  }
};

export const getRetailChainById = async (req: any, next: any) => {
  try {
    const id = req.params.id;
    const data = await RetailChain.findByPk(id)
    if (data) {
      return data;
    } else {
      return "Retail chain not found";
    }
  } catch (error) {
    next(error)
  }
};

export const updateRetailChainById = async (req: any, next: any) => {
  try {
    const id = req.params.id;
    const { retailChain } = req.body
    let payload: any = {
      retailChain
    }

    const num = await RetailChain.update(payload, {
      where: { retailChainId: id }
    })
    if (num == 1) {
      const data = await RetailChain.findByPk(id)
      return {
        message: "Retail Chain updated successfully.",
        data
      };
    };
  } catch (error) {
    next(error);
  }
}
export const deleteRetailChainById = async (req: any, next: any) => {
  try {
    const id = req.params.id;

    const num = await RetailChain.destroy({
      where: { retailChainId: id }
    })

    if (num == 1) {
      return {
        message: "Retail Chain is deleted successfully!"
      };
    } else {
      return {
        message: `Cannot delete Retail Chain with id=${id}. Maybe Retail Chain was not found!`
      };
    }
  } catch (error) {
    next(error);
  }
};