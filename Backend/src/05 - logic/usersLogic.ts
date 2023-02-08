import dal from "../02 - utils/dal";
import UserModel from "../04 - models/UserModel";

async function getAllUsers(): Promise<UserModel[]> {
  const sql = "SELECT * FROM users;";
  const data = await dal.execute(sql);
  return data;
}

export default {
  getAllUsers,
};
