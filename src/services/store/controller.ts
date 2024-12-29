import db from "../../models";
import Store from './../../models/store.model';
const Op = db.Sequelize.Op;

export const createStore = async (req: any, next: any) => {
  try {
    const { storeName, storePriority, storeFormatId, storeArea, retailChainId, storeType,storeAddress,storeLocation } = req.body;
    const checkBrand = await Store.findOne({
      where: {
        storeName
      }
    })
    if (checkBrand) {
      return "Store already exists";
    }
    const store = {
      storeName, storePriority, storeFormatId, storeArea, retailChainId, storeType,storeAddress,storeLocation
    };
    const data = await Store.create(store);
    await data.save();
    console.log(data)
    if (data) {
      const dataValue = await Store.findByPk(data?.storeId);
      return dataValue;
    }

  } catch (error) {
    next(error)
  }
}


export const findAllStores = async (req: any, next: any) => {
  try {
    const search = req.query.search;
    var condition = search ? { storeName: { [Op.like]: `%${search}%` } } : null;

    const data = await Store.findAll({ where: condition })
    if (data)
      return data;

  } catch (error) {
    next(error)
  }
};

export const getStoreById = async (req: any, next: any) => {
  try {
    const id = req.params.id;
    const data = await Store.findByPk(id)
    if (data) {
      return data;
    } else {
      return "Store not found";
    }
  } catch (error) {
    next(error)
  }
};

export const updateStoreById = async (req: any, next: any) => {
  try {
    const id = req.params.id;
    const { storeName, storePriority, storeFormatId, storeArea, retailChainId, storeType,storeAddress,storeLocation } = req.body
    let payload: any = {
      storeName, storePriority, storeFormatId, storeArea, retailChainId, storeType,storeAddress,storeLocation
    }

    const num = await Store.update(payload, {
      where: { storeId: id }
    })
    if (num == 1) {
      const data = await Store.findByPk(id)
      return {
        message: "Store updated successfully.",
        data
      };
    };
  } catch (error) {
    next(error);
  }
}
export const deleteStoreById = async (req: any, next: any) => {
  try {
    const id = req.params.id;

    const num = await Store.destroy({
      where: { storeId: id }
    })

    if (num == 1) {
      return {
        message: "Store is deleted successfully!"
      };
    } else {
      return {
        message: `Cannot delete Store with id=${id}. Maybe Store was not found!`
      };
    }
  } catch (error) {
    next(error);
  }
};