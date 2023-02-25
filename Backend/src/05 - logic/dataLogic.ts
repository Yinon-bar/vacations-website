import path from "path";
import dal from "../02 - utils/dal";
import VacationModel from "../04 - models/Model";
import ServerModel from "../04 - models/Model";
import { uuid } from "uuidv4";
import UserModel from "../04 - models/UserModel";
import { OkPacket } from "mysql";

async function getVacations(): Promise<ServerModel[]> {
  const sql = "SELECT * FROM vacations;";
  const data = await dal.execute(sql);
  return data;
}

async function addVacation(vacation: VacationModel): Promise<VacationModel> {
  if (vacation.image) {
    const ext = path.extname(vacation.image.name);
    vacation.imageName = uuid() + ext;
    // console.log(vacation);
    await vacation.image.mv("./src/01 - assets/images/" + vacation.imageName);
    delete vacation.image;
  }
  const sql = `
  INSERT INTO 
  vacations 
  VALUES(DEFAULT, '${vacation.description}', '${vacation.destination}', '${
    vacation.imageName
  }', '${vacation.start_date}', '${vacation.end_date}', ${
    vacation.price
  }, ${0});
  `;
  const data = await dal.execute(sql);
  return data;
}

// Get all like
async function getAlllLikes(): Promise<[]> {
  const sql = `
  SELECT * FROM likes;
  `;
  const data = await dal.execute(sql);
  return data;
}

// Get single like
async function getSingleLike(id: number, vacation: number) {
  const sql = `
  SELECT * FROM likes WHERE user_id = ${id} AND vacation_id = ${vacation};
  `;
  const data = await dal.execute(sql);
  return data;
}

async function addLike(user: UserModel, vacation) {
  const sql = `
  INSERT INTO 
  likes 
  VALUES(DEFAULT, '${user.id}', '${vacation.id}');`;
  const data = await dal.execute(sql);
  return data;
}

async function removeLike(id: number) {
  const sql = `
  DELETE FROM likes 
  WHERE id = ${id};`;
  const info: OkPacket = await dal.execute(sql);
  return info;
}

export default {
  getVacations,
  addVacation,
  addLike,
  removeLike,
  getAlllLikes,
  getSingleLike,
};
