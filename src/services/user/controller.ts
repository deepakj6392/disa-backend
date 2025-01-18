import { ADMIN_USER } from "../../constants";
import db from "../../models";
import User from "../../models/user.model";
import { Utilities } from "../../utils/Utilities";
import { CONSTANTS } from '../../../config/configuration';
const Op = db.Sequelize.Op;

export const createUser = async (req: any, next: any) => {
  try {
    const { firstName, lastName, email, password, username, mobile } = req.body;

    const checkUser = await User.findOne({
      where: {
        [Op.or]: [
          { email },
          { username }
        ]
      }
    })
    if (checkUser) {
      return "User already exists";
    }
    const hashPass = await Utilities.cryptPassword(password);

    const user = {
      firstName, lastName, email, mobile,
      password: hashPass, username, lastLogin: Date.now()
    };
    const data = await User.create(user);
    await data.save();
    if (data) {
      const dataValue = await User.findByPk(data?.userId);
      return dataValue;
    }

  } catch (error) {
    next(error)
  }
}

export const loginUser = async (req: any, next: any) => {
  try {
    const { username, password } = req.body;
    let data = await User.findOne({
      where:
        { username },
    })
    if (!data) {
      return "User not found";
    }
    const isValidPass = await Utilities.VerifyPassword(password, data?.password)
    if (!isValidPass)
      return "Incorrect Password";

    const token = await Utilities.createJWTToken({ username, id: data?.userId, isAdmin: data?.isAdmin, email: data.email });
    await User.update({ lastLogin: Date.now() }, {
      where: {
        username
      }
    })
    if (data)
      return { token, data };
  } catch (error) {
    next(error);
  }
};


export const findAllUsers = async (req: any, next: any) => {
  try {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    const data = await User.findAll({ where: condition })
    if (data)
      return data;

  } catch (error) {
    next(error)
  }
};

export const getUserById = async (req: any, next: any) => {
  try {
    const id = req.params.id;
    const data = await User.findByPk(id)
    if (data) {
      return data;
    } else {
      return "User not found";
    }
  } catch (error) {
    next(error)
  }
};

export const updateById = async (req: any, next: any) => {
  try {
    const id = req.params.id;
    const { firstName, lastName, mobile, countryCode } = req.body
    let payload: any = {
      firstName, lastName, mobile, countryCode
    }
    if (req.file) {
      payload.avatar = req.file?.filename
    }

    const num = await User.update(payload, {
      where: { userId: id }
    })
    if (num == 1) {
      const data = await User.findByPk(id)
      return {
        message: "User updated successfully.",
        data
      };
    };
  } catch (error) {
    next(error);
  }
}
export const deleteById = async (req: any, next: any) => {
  try {
    const id = req.params.id;

    const num = await User.destroy({
      where: { userId: id }
    })

    if (num == 1) {
      return {
        message: "User was deleted successfully!"
      };
    } else {
      return {
        message: `Cannot delete User with id=${id}. Maybe User was not found!`
      };
    }
  } catch (error) {
    next(error);
  }
};

export const createDefaultUsers = async () => {
  try {
    const data = await User.findOne({ where: { userId: 1 } });
    if (!data) {
      let users: any[] = ADMIN_USER;
      for (let user of users) {
        user.password = await Utilities.cryptPassword(user.password);
        user.lastLogin = Date.now()
      }
      users = await User.bulkCreate(users);
      console.log('default users created')
    }
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

export const uploadFile= async(req:any,next: any)=>{
  try {
    // upload file logic here
    const file= req.files[0].filename;
    return {file};
  } catch (error) {
    next(error);
  }
}