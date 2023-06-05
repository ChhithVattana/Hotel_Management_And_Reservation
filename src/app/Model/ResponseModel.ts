export class ResponseModel<T>{
  constructor(
    public result: T,
    public length: number
  ){}
}
