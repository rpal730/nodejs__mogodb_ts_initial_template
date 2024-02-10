class CustomError extends Error {

  readonly errorCode: string;
  
  public constructor(msg: string, errorCode: string) {
    super(msg);
    this.errorCode = errorCode;
  
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}
  
export { CustomError };