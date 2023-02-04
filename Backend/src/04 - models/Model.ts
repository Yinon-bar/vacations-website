import { UploadedFile } from "express-fileupload";

class VacationModel {
  public id: number;
  public description: string;
  public destination: string;
  public image: UploadedFile;
  public imageName: string;
  public start_date: number;
  public end_date: number;
  public price: Date;
  public followers: Date;

  public constructor(vacation: VacationModel) {
    this.id = vacation.id;
    this.description = vacation.description;
    this.destination = vacation.destination;
    this.image = vacation.image;
    this.imageName = vacation.imageName;
    this.start_date = vacation.start_date;
    this.end_date = vacation.end_date;
    this.price = vacation.price;
    this.followers = vacation.followers;
  }
}

export default VacationModel;
