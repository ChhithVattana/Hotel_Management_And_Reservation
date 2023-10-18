import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeModel } from '../Model/EmployeeModel';
import { ResponseModel } from '../Model/ResponseModel';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employeeResponse: ResponseModel<EmployeeModel[]> = new ResponseModel<
    EmployeeModel[]
  >([], 0);

  constructor(private http: HttpClient) {}

  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    }),
  };

  // get all employees list
  async getAllEmployeeList(page: number) {
    this.employeeResponse.result = [];
    await this.http
      .get(
        `https://cloudnotebase.seynaa.com/api/v1/employee?page=${page}&size=10&q=`,
        this.httpOption
      )
      .toPromise()
      .then((res: any) => {
        res.result.forEach((r: EmployeeModel) => {
          this.employeeResponse.result.push(r);
        });
        this.employeeResponse.length = res.length;
      });
    console.log(this.employeeResponse);
    return this.employeeResponse;
  }
}
