export class ErrorModel {
  public constructor(public message: string, public status: number) {}
}

export class RoutNotFoundErrorModel extends ErrorModel {
  public constructor(route: string) {
    super(`Route ${route} not found!`, 404);
  }
}

export class ResourceNotFoundErrorModel extends ErrorModel {
  public constructor(id: number) {
    super(`ID ${id} not exsist!`, 404);
  }
}

export class ValidationErrorModel extends ErrorModel {
  public constructor(message: string) {
    super(message, 400);
  }
}

export class AuthErrorModel extends ErrorModel {
  public constructor(message: string) {
    super(message, 401);
  }
}
