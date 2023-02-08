import { OkPacket } from "mysql";
import path from "path";
import dal from "../02 - utils/dal";
import VacationModel from "../04 - models/Model";
import ServerModel from "../04 - models/Model";
import Model from "../04 - models/Model";
import { uuid } from "uuidv4";

async function getVacations(): Promise<ServerModel[]> {
  const sql = "SELECT * FROM vacations;";
  const data = await dal.execute(sql);
  return data;
}

async function addVacation(vacation: VacationModel): Promise<VacationModel> {
  if (vacation.image) {
    const ext = path.extname(vacation.image.name);
    vacation.imageName = uuid() + ext;
    console.log(vacation);
    await vacation.image.mv("./src/01 - assets/images/" + vacation.imageName);
    delete vacation.image;
  }
  const sql = `
  INSERT INTO 
  vacations 
  VALUES(DEFAULT, '${vacation.description}', '${vacation.destination}', '${vacation.imageName}', '${vacation.start_date}', '${vacation.end_date}', ${vacation.price}, ${vacation.followers});
  `;
  const data = await dal.execute(sql);
  return data;
}

// async function updateStatus(body: ServerModel): Promise<ServerModel> {
//   const sql = `UPDATE servers SET serverStatus = '${body.status}' WHERE id = ${body.id};`;
//   const data: OkPacket = await dal.execute(sql);
//   return body;
// }

export default { getVacations, addVacation };
