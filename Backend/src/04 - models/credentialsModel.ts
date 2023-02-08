class CredentialsModel {
  public user_name: string;

  public password: string;

  public constructor(credentials: CredentialsModel) {
    this.user_name = credentials.user_name;
    this.password = credentials.password;
  }
}

export default CredentialsModel;
