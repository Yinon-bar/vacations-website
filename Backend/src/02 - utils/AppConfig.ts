class AppConfig {
  // db host
  public host = "localhost";

  // db user name
  public userName = "root";

  // user password
  public password = "";

  // db name
  public database = "vacations_task";

  // port
  public port = 3001;
}

const appConfig = new AppConfig();

export default appConfig;
