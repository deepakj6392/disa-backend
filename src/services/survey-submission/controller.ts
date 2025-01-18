import db from "../../models";
import Brand from "../../models/brand.model";
import Product from "../../models/product.model";
import QuestionMaster from "../../models/question-master.model";
import SkuModel from "../../models/sku.model";
import SurveyQuestion from "../../models/survey-question.model";
import { SurveyAnswer, SurveySubmission } from "../../models/survey-submission.model";
import User from "../../models/user.model";
import Visit from "../../models/visit.model";
const Op = db.Sequelize.Op;

export const createSurveySubmission = async (req: any, next: any) => {
  try {
    const { surveyorId, answers } = req.body;
    
    let validateUser= await User.findByPk(surveyorId);
    if(!validateUser){
      return "User not exist";
    }

    const submission = await SurveySubmission.create({ surveyorId });

    const formattedAnswers = answers.map((answer:any) => ({
      surveySubmissionId: submission.surveySubmissionId,
      ...answer,
    }));
  
    await SurveyAnswer.bulkCreate(formattedAnswers);
  
    return submission;
  
  } catch (error) {
    next(error)
  }
}


export const findAllSurveySubmissions = async (req: any, next: any) => {
  try {
    const data = await SurveySubmission.findAll({include:[
      {
        model: SurveyAnswer,
        include:[{
          model:SurveyQuestion,
          include:[
            Brand, Visit, QuestionMaster, Product, SkuModel
          ]
        }]
      },
    ]})
    if (data)
      return data;

  } catch (error) {
    next(error)
  }
};

export const findAllSurveySubmissionByUser = async (req: any, next: any) => {
  try {
    const data = await SurveySubmission.findAll({where:{ surveyorId: req.params.id} })
    if (data)  return data;
  } catch (error) {
    next(error)
  }
};

export const getSurveySubmissionById = async (req: any, next: any) => {
  try {
    const id = req.params.id;
    const data = await SurveySubmission.findByPk(id)
    if (data) {
      return data;
    } else {
      return "Survey Submission not found";
    }
  } catch (error) {
    next(error)
  }
};


export const deleteSurveySubmissionById = async (req: any, next: any) => {
  try {
    const id = req.params.id;

    const num = await SurveySubmission.destroy({
      where: { surveySubmissionId: id }
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