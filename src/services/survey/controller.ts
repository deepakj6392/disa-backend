import { DEFAULT_SURVEY } from "../../constants/default";
import db from "../../models";
import Brand from "../../models/brand.model";
import Survey from './../../models/survey.model';
const Op = db.Sequelize.Op;

export const createSurvey = async (req: any, next: any) => {
  try {
    const { surveyBrandId,surveyStartDate,surveyEndDate } = req.body;
    const survey = {
      surveyBrandId,surveyStartDate,surveyEndDate
    };
    const data = await Survey.create(survey);
    await data.save();
    if (data) {
      const dataValue = await Survey.findByPk(data?.surveyId,{
        include:[Brand]
      });
      return dataValue;
    }

  } catch (error) {
    next(error)
  }
}


export const findAllSurveys = async (req: any, next: any) => {
  try {
    const search = req.query.search;
    var condition = search ? { surveyBrandId: { [Op.like]: `%${search}%` } } : null;

    const data = await Survey.findAll({ where: condition })
    if (data)
      return data;

  } catch (error) {
    next(error)
  }
};

export const getSurveyById = async (req: any, next: any) => {
  try {
    const id = req.params.id;
    const data = await Survey.findByPk(id)
    if (data) {
      return data;
    } else {
      return "Survey not found";
    }
  } catch (error) {
    next(error)
  }
};

export const updateSurveyById = async (req: any, next: any) => {
  try {
    const id = req.params.id;
    const { surveyBrandId,surveyStartDate,surveyEndDate } = req.body
    let payload: any = {
      surveyBrandId,surveyStartDate,surveyEndDate
    }

    const num = await Survey.update(payload, {
      where: { surveyId: id }
    })
    if (num == 1) {
      const data = await Survey.findByPk(id)
      return {
        message: "Survey updated successfully.",
        data
      };
    };
  } catch (error) {
    next(error);
  }
}
export const deleteSurveyById = async (req: any, next: any) => {
  try {
    const id = req.params.id;

    const num = await Survey.destroy({
      where: { surveyId: id }
    })

    if (num == 1) {
      return {
        message: "Survey is deleted successfully!"
      };
    } else {
      return {
        message: `Cannot delete Survey with id=${id}. Maybe Survey was not found!`
      };
    }
  } catch (error) {
    next(error);
  }
};

export const createDefaultSurveys= async()=>{
  try {
    const survey= await Survey.findOne({where: { surveyId: 1 }});
    if(!survey){
      await Survey.bulkCreate(DEFAULT_SURVEY);
      console.log("Default survey created successfully!")
    }
  } catch (error) {
    console.log(`default survey create failed: ${error}`)
  }
}