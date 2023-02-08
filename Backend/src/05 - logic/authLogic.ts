import UserModel from "../04 - models/UserModel";
import dal from "../02 - utils/dal";
import authJwt from "../02 - utils/authJwt";
import getNewToken from "../02 - utils/authJwt";
import CredentialsModel from "../04 - models/credentialsModel";
import { OkPacket } from "mysql";

async function register(user: UserModel) {
  const sql = `
  INSERT INTO users 
  VALUES(DEFAULT, '${user.first_name}', '${user.last_name}', '${user.user_name}', '${user.password}');
  `;
  const data = await dal.execute(sql);
  // Validation
  // Create new user
  // const newUser = await dal.
  // genereate token
  const token = authJwt.getNewToken(data);
  return token;
}

async function login(credentials: CredentialsModel): Promise<string> {
  const sql = `
  SELECT * FROM users 
  WHERE(user_name = '${credentials.user_name}' AND password = '${credentials.password}')
  `;
  const data = await dal.execute(sql);
  console.log(data);
  if (data.length === 0) {
    const err = "Wrong user name or password";
    return err;
  }
  const token = authJwt.getNewToken(data);
  return token;
}

export default { register, login };
