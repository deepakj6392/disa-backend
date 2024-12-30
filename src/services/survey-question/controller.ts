import db from "../../models";
import Brand from "../../models/brand.model";
import Product from "../../models/product.model";
import QuestionMaster from "../../models/question-master.model";
import SkuModel from "../../models/sku.model";
import SurveyQuestion from "../../models/survey-question.model";
import Visit from "../../models/visit.model";
const Op = db.Sequelize.Op;

export const createSurveyQuestion = async (req: any, next: any) => {
  try {
    const { questionId, brandId, productId, skuId, visitId, expectedResponse,
      surveyorResponse, baseScore
    } = req.body;

    let validateQuestion= await QuestionMaster.findByPk(questionId);
    if(!validateQuestion){
      return "Question not exist";
    }

    let validateBrand= await Brand.findByPk(brandId);
    if(!validateBrand){
      return "Brand not exist";
    }

    
    let validateProduct= await Product.findByPk(productId);
    if(!validateProduct){
      return "Product not exist";
    }

        
    let validateSKU= await SkuModel.findByPk(skuId);
    if(!validateSKU){
      return "SKU not exist";
    }
    let validateVisit= await Visit.findByPk(visitId);
    if(!validateVisit){
      return "Visit not exist";
    }
    let referenceImage, surveyorImage;
    if (req.files?.length) {
      for (let file of req.files) {
        if (file.fieldname === 'referenceImage') {
          referenceImage = file.filename;
        } else if (file.fieldname === 'surveyorImage') {
          surveyorImage = file.filename;
        }
      }
    }


    const survey = {
      questionId, brandId, productId, skuId, visitId, expectedResponse,
      surveyorResponse, baseScore, referenceImage, surveyorImage
    };
    const data = await SurveyQuestion.create(survey);
    await data.save();
    if (data) {
      const dataValue = await SurveyQuestion.findByPk(data?.surveyQuestionId);
      return dataValue;
    }

  } catch (error) {
    next(error)
  }
}


export const findAllSurveyQuestions = async (req: any, next: any) => {
  try {
    const search = req.query.search;
    var condition = search ? { questionId: { [Op.like]: `%${search}%` } } : null;

    const data = await SurveyQuestion.findAll({ where: condition })
    if (data)
      return data;

  } catch (error) {
    next(error)
  }
};

export const getSurveyQuestionById = async (req: any, next: any) => {
  try {
    const id = req.params.id;
    const data = await SurveyQuestion.findByPk(id)
    if (data) {
      return data;
    } else {
      return "Survey Question not found";
    }
  } catch (error) {
    next(error)
  }
};

export const updateSurveyQuestionById = async (req: any, next: any) => {
  try {
    const id = req.params.id;
    const { questionId, brandId, productId, skuId, visitId, expectedResponse,
      surveyorResponse, baseScore } = req.body
    let referenceImage, surveyorImage;
    if (req.files?.length) {
      for (let file of req.files) {
        if (file.fieldname === 'referenceImage') {
          referenceImage = file.filename;
        } else if (file.fieldname === 'surveyorImage') {
          surveyorImage = file.filename;
        }
      }
    }
    let payload: any = {
      questionId, brandId, productId, skuId, visitId, expectedResponse,
      surveyorResponse, baseScore, referenceImage, surveyorImage
    }

    const num = await SurveyQuestion.update(payload, {
      where: { productId: id }
    })
    if (num == 1) {
      const data = await SurveyQuestion.findByPk(id)
      return {
        message: "Survey question updated successfully.",
        data
      };
    };
  } catch (error) {
    next(error);
  }
}
export const deleteSurveyQuestionById = async (req: any, next: any) => {
  try {
    const id = req.params.id;

    const num = await SurveyQuestion.destroy({
      where: { surveyQuestionId: id }
    })

    if (num == 1) {
      return {
        message: "Survey question is deleted successfully!"
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

// export const createDefaultSurveys= async()=>{
//   try {
//     const survey= await Survey.findOne({where: { surveyId: 1 }});
//     if(!survey){
//       await Survey.bulkCreate(DEFAULT_SURVEY);
//       console.log("Default survey created successfully!")
//     }
//   } catch (error) {
//     console.log(`default survey create failed: ${error}`)
//   }
// }