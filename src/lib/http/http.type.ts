export enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  UNPROCESSABLE_ENTITY = 422,
  INTERNAL_SERVER_ERROR = 500,
}

export class ResponsePayload {
  constructor(
    public message: string,
    public statusCode: number,
  ) {}
}

export class ResponseSuccessPayload<T> extends ResponsePayload {
  constructor(
    message: string,
    statusCode: number,
    public data: T,
  ) {
    super(message, statusCode)
  }
}

export class UnprocessableEntityException extends ResponsePayload {
  constructor(message: string) {
    super(message, HttpStatusCode.UNPROCESSABLE_ENTITY)
  }
}

export class UnauthorizedException extends ResponsePayload {
  constructor(message?: string) {
    super(message ?? 'Unauthorized', HttpStatusCode.UNAUTHORIZED)
  }
}
export class ForbidenException extends ResponsePayload {
  constructor(message?: string) {
    super(message ?? 'Forbiden', HttpStatusCode.FORBIDDEN)
  }
}

export class NotFoundException extends ResponsePayload {
  constructor(message?: string) {
    super(message ?? 'Not Found', HttpStatusCode.NOT_FOUND)
  }
}

export class InternalServerException extends ResponsePayload {
  constructor(message?: string) {
    super(message ?? 'Internal Server', HttpStatusCode.INTERNAL_SERVER_ERROR)
  }
}

export interface CustomRequestInit extends RequestInit {
  baseUrl?: string
}
