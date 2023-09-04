import {ApiResponseTyp} from "../Types";

export default class ApiResponse<T>{

  private static MESSAGE_SUCCESS = 'success';
  private static MESSAGE_WARNING = 'warning';
  private static MESSAGE_ERROR = 'error';

  private response: T;

  constructor(private apiResponse: ApiResponseTyp<T>) {
    this.response = apiResponse.response;
  }

  public isSuccessfully(): boolean {
    return this.apiResponse.isSuccessfully;
  }


  public hasSuccessMessages(): boolean {
    return this.getSuccessMessages().length > 0;
  }

  public hasWarningsMessages(): boolean {
    return this.getWarningMessages().length > 0;
  }

  public hasErrorsMessages(): boolean {
    return this.getErrorsMessages().length > 0;
  }

  public getSuccessMessages(): string[] {
    return this.apiResponse.messages[ApiResponse.MESSAGE_SUCCESS];
  }

  public getWarningMessages(): string[] {
    return this.apiResponse.messages[ApiResponse.MESSAGE_WARNING];
  }

  public getErrorsMessages(): string[] {
    return this.apiResponse.messages[ApiResponse.MESSAGE_ERROR];
  }

  public setResponse(response: T){
    this.response = response;
  }

  public getResponse(): T {
    return this.response;
  }

}
