import { DEFAULT_STORE_FORMAT } from "../../constants/default";
import db from "../../models";
import StoreFormat from "../../models/store-format.model";
const Op = db.Sequelize.Op;

export const createStoreFormat = async (req: any, next: any) => {
  try {
    const { storeFormat } = req.body;
    const checkSF = await StoreFormat.findOne({
      where: {
        storeFormat
      }
    })
    if (checkSF) {
      return "Store Format already exists";
    }
    const storeF = {
      storeFormat
    };
    const data = await StoreFormat.create(storeF);
    await data.save();
    if (data) {
      const dataValue = await StoreFormat.findByPk(data?.storeFormatId);
      return dataValue;
    }

  } catch (error) {
    next(error)
  }
}


export const findAllStoreFormat = async (req: any, next: any) => {
  try {
    const search = req.query.search;
    var condition = search ? { storeFormat: { [Op.like]: `%${search}%` } } : null;

    const data = await StoreFormat.findAll({ where: condition })
    if (data)
      return data;

  } catch (error) {
    next(error)
  }
};

export const getstoreFormatById = async (req: any, next: any) => {
  try {
    const id = req.params.id;
    const data = await StoreFormat.findByPk(id)
    if (data) {
      return data;
    } else {
      return "Store format not found";
    }
  } catch (error) {
    next(error)
  }
};

export const updateStoreFormatById = async (req: any, next: any) => {
  try {
    const id = req.params.id;
    const { storeFormat } = req.body
    let payload: any = {
      storeFormat
    }

    const num = await StoreFormat.update(payload, {
      where: { storeFormatId: id }
    })
    if (num == 1) {
      const data = await StoreFormat.findByPk(id)
      return {
        message: "Store format updated successfully.",
        data
      };
    };
  } catch (error) {
    next(error);
  }
}
export const deleteStoreFormatById = async (req: any, next: any) => {
  try {
    const id = req.params.id;

    const num = await StoreFormat.destroy({
      where: { storeFormatId: id }
    })

    if (num == 1) {
      return {
        message: "Store format is deleted successfully!"
      };
    } else {
      return {
        message: `Cannot delete Store format with id=${id}. Maybe Store format was not found!`
      };
    }
  } catch (error) {
    next(error);
  }
};

export const createDefaultStoreFormat= async()=>{
  try {
    const store= await StoreFormat.findOne({where: { storeFormatId: 1 }});
    if(!store){
      await StoreFormat.bulkCreate(DEFAULT_STORE_FORMAT);
      console.log("Default store formats created successfully!")
    }
  } catch (error) {
    console.log(`default store formats create failed: ${error}`)
  }
}