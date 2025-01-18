import { DEFAULT_VISIT } from "../../constants/default";
import db from "../../models";
import Store from "../../models/store.model";
import Survey from "../../models/survey.model";
import User from "../../models/user.model";
import Visit from './../../models/visit.model';
const Op = db.Sequelize.Op;

export const createVisit = async (req: any, next: any) => {
  try {
    const { visitDate,surveyId,surveyorId,storeId } = req.body;
    let validateStore= await Store.findByPk(storeId);
    if(!validateStore){
      return "Store not exist";
    }

    let validateSurvey= await Survey.findByPk(surveyId);
    if(!validateSurvey){
      return "Survey not exist";
    }

    
    let validateUser= await User.findByPk(surveyorId);
    if(!validateUser){
      return "Surveyor not exist";
    }
    const checkBrand = await Visit.findOne({
      where: {
        surveyId, storeId, surveyorId
      }
    })
    if (checkBrand) {
      return "Already visited this store";
    }
    const brand = {
      visitDate,surveyId,surveyorId,storeId
    };
    console.log(brand)
    const data = await Visit.create(brand);
    await data.save();
    if (data) {
      const dataValue = await Visit.findByPk(data?.visitId);
      return dataValue;
    }
  } catch (error) {
    next(error)
  }
}


export const findAllVisits = async (req: any, next: any) => {
  try {
    const search = req.query.search;
    var condition = search ? {visitDate : { [Op.like]: `%${search}%` } } : null;

    const data = await Visit.findAll({ where: condition })
    if (data)
      return data;

  } catch (error) {
    next(error)
  }
};

export const getVisitById = async (req: any, next: any) => {
  try {
    const id = req.params.id;
    const data = await Visit.findByPk(id)
    if (data) {
      return data;
    } else {
      return "Visit not found";
    }
  } catch (error) {
    next(error)
  }
};

export const updateVisitById = async (req: any, next: any) => {
  try {
    const id = req.params.id;
    const { visitDate,surveyId,surveyorId,storeId } = req.body
    let payload: any = {
      visitDate,surveyId,surveyorId,storeId
    }

    const num = await Visit.update(payload, {
      where: { visitId: id }
    })
    if (num == 1) {
      const data = await Visit.findByPk(id)
      return {
        message: "Visit updated successfully.",
        data
      };
    };
  } catch (error) {
    next(error);
  }
}

export const deleteVisitById = async (req: any, next: any) => {
  try {
    const id = req.params.id;

    const num = await Visit.destroy({
      where: { visitId: id }
    })

    if (num == 1) {
      return {
        message: "Visit is deleted successfully!"
      };
    } else {
      return {
        message: `Cannot delete Visit with id=${id}. Maybe Visit was not found!`
      };
    }
  } catch (error) {
    next(error);
  }
};

export const createDefaultVisits= async()=>{
  try {
    const visit= await Visit.findOne({where: { visitId: 1 }});
    if(!visit){
      await Visit.bulkCreate(DEFAULT_VISIT);
      console.log("Default visits created successfully!")
    }
  } catch (error) {
    console.log(`default visits create failed: ${error}`)
  }
}