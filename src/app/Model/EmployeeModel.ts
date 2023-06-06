export class EmployeeModel {
  constructor(
    public id: number,
    public name: string,
    public gender: boolean,
    public dob: Date,
    public phone: string,
    public email: string,
    public salary: number,
    public dateIn: Date,
    public position: string
  ) {}
}
