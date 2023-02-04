import mysql from "mysql";
import appConfig from "./AppConfig";

const connection = mysql.createPool({
  host: appConfig.host,
  user: appConfig.userName,
  password: appConfig.password,
  database: appConfig.database,
});

function execute(sql: string): Promise<any> {
  return new Promise((resolve, reject) => {
    connection.query(sql, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
}

export default {
  execute,
};
