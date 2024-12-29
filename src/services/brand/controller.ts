import db from "../../models";
import Brand from "../../models/brand.model";
const Op = db.Sequelize.Op;

export const createBrand = async (req: any, next: any) => {
  try {
    const { brandName } = req.body;
    let brandLogo;
    if(req.files?.length){
      brandLogo = req.files[0].filename;
    }

    const checkBrand = await Brand.findOne({
      where: {
        brandName
      }
    })
    if (checkBrand) {
      return "Brand already exists";
    }
    const brand = {
      brandName, brandLogo
    };
    const data = await Brand.create(brand);
    await data.save();
    if (data) {
      const dataValue = await Brand.findByPk(data?.brandId);
      return dataValue;
    }

  } catch (error) {
    next(error)
  }
}


export const findAllBrands = async (req: any, next: any) => {
  try {
    const search = req.query.search;
    var condition = search ? { brandName: { [Op.like]: `%${search}%` } } : null;

    const data = await Brand.findAll({ where: condition })
    if (data)
      return data;

  } catch (error) {
    next(error)
  }
};

export const getBrandById = async (req: any, next: any) => {
  try {
    const id = req.params.id;
    const data = await Brand.findByPk(id)
    if (data) {
      return data;
    } else {
      return "Brand not found";
    }
  } catch (error) {
    next(error)
  }
};

export const updateBrandById = async (req: any, next: any) => {
  try {
    const id = req.params.id;
    const { brandName } = req.body
    let payload: any = {
      brandName
    }
    if (req.files?.length) {
      payload.brandLogo = req.files[0]?.filename
    }

    const num = await Brand.update(payload, {
      where: { brandId: id }
    })
    if (num == 1) {
      const data = await Brand.findByPk(id)
      return {
        message: "Brand updated successfully.",
        data
      };
    };
  } catch (error) {
    next(error);
  }
}
export const deleteBrandById = async (req: any, next: any) => {
  try {
    const id = req.params.id;

    const num = await Brand.destroy({
      where: { brandId: id }
    })

    if (num == 1) {
      return {
        message: "Brand is deleted successfully!"
      };
    } else {
      return {
        message: `Cannot delete Brand with id=${id}. Maybe Brand was not found!`
      };
    }
  } catch (error) {
    next(error);
  }
};