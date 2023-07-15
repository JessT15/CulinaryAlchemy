import { User } from "../../db/models";
import { UserInterface } from "../../interfaces";

export const updateUser = async (id: string, newValues: UserInterface) => {
  return new Promise(async (resolve, reject) => {
    if (typeof id !== "string") {
      throw new Error("invalid id format, id must be a string!");
    }
    try {
      const doesUserExist = await User.findByPk(id);
      if (!doesUserExist) {
        throw new Error("user does not exist");
      }
      await User.update(
        { newValues },
        {
          where: {
            id: id,
          },
        }
      );
      resolve("");
    } catch (error) {
      reject({ error });
    }
  });
};
