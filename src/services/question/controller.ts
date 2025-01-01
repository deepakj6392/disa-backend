import { DEFAULT_QUESTIONS } from "../../constants/default";
import db from "../../models";
import QuestionMaster from "../../models/question-master.model";
const Op = db.Sequelize.Op;

export const createQuestion = async (req: any, next: any) => {
  try {
    const { questionCategory,questionSubCategory,questionChildCategory,
      description, questionHint,screenType,responseType,storeDisplayLocation,
      usedForDeviation, skuSpecific
     } = req.body;
    const survey = {
      questionCategory,questionSubCategory,questionChildCategory,
      description,screenType,responseType,storeDisplayLocation,questionHint,
      usedForDeviation, skuSpecific
    };
    const data = await QuestionMaster.create(survey);
    await data.save();
    if (data) {
      const dataValue = await QuestionMaster.findByPk(data?.questionId);
      return dataValue;
    }

  } catch (error) {
    next(error)
  }
}


export const findAllQuestions = async (req: any, next: any) => {
  try {
    const search = req.query.search;
    var condition = search ? { shortQuestion: { [Op.like]: `%${search}%` } } : null;

    const data = await QuestionMaster.findAll({ where: condition })
    if (data)
      return data;

  } catch (error) {
    next(error)
  }
};

export const getQuestionById = async (req: any, next: any) => {
  try {
    const id = req.params.id;
    const data = await QuestionMaster.findByPk(id)
    if (data) {
      return data;
    } else {
      return "Question not found";
    }
  } catch (error) {
    next(error)
  }
};

export const updateQuestionById = async (req: any, next: any) => {
  try {
    const id = req.params.id;
    const { questionCategory,questionSubCategory,questionChildCategory,
      description,screenType,responseType,questionHint,storeDisplayLocation ,
      usedForDeviation, skuSpecific} = req.body
    let payload: any = {
      questionCategory,questionSubCategory,questionChildCategory,
      description,screenType,responseType,questionHint,storeDisplayLocation,
      usedForDeviation, skuSpecific
    }

    const num = await QuestionMaster.update(payload, {
      where: { questionId: id }
    })
    if (num == 1) {
      const data = await QuestionMaster.findByPk(id)
      return {
        message: "Question updated successfully.",
        data
      };
    };
  } catch (error) {
    next(error);
  }
}
export const deleteQuestionById = async (req: any, next: any) => {
  try {
    const id = req.params.id;

    const num = await QuestionMaster.destroy({
      where: { questionId: id }
    })

    if (num == 1) {
      return {
        message: "Question is deleted successfully!"
      };
    } else {
      return {
        message: `Cannot delete Question with id=${id}. Maybe Question was not found!`
      };
    }
  } catch (error) {
    next(error);
  }
};

export const createDefaultQuestions= async()=>{
  try {
    const questions= await QuestionMaster.findOne({where: { questionId: 1 }});
    if(!questions){
      await QuestionMaster.bulkCreate(DEFAULT_QUESTIONS);
      console.log("Default questions created successfully!")
    }
  } catch (error) {
    console.log(`default questions create failed: ${error}`)
  }
}