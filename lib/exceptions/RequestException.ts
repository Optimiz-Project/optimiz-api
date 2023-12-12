import { HttpResponse } from "../../types/HttpResponse";

export default class RequestException extends Error {
  private responseCode: HttpResponse;
  private identifier: string;
  private data: any;
  private loadErrorDataToResponse: boolean;

  constructor(
    message: string,
    responseCode: HttpResponse = HttpResponse.InternalServerError,
    identifier: string = "REQ_ERR",
    data: any = null,
    loadErrorDataToResponse: boolean = false
  ) {
    super(message);
    this.responseCode = responseCode;
    this.identifier = identifier;
    this.data = data;
    this.loadErrorDataToResponse = loadErrorDataToResponse;
  }

  getResponse() {
    return this.responseCode;
  }

  getIdentifier() {
    return this.identifier;
  }

  getData() {
    return this.data;
  }

  getLoadErrorData() {
    return this.loadErrorDataToResponse;
  }
}
