import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../Model/UserModel';
import { ResponseModel } from '../Model/ResponseModel';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userResponse: ResponseModel<UserModel[]> = new ResponseModel<UserModel[]>(
    [],
    0
  );

  constructor(private http: HttpClient) {}

  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    }),
  };

  // get all users list
  async getAllUserList(page: number) {
    this.userResponse.result = [];
    await this.http
      .get(
        `https://m1g7.seyna.iteg7.com/api/v1/account?page=${page}&size=10&q=`,
        this.httpOption
      )
      .toPromise()
      .then((res: any) => {
        res.result.forEach((r: UserModel) => {
          this.userResponse.result.push(r);
        });
        this.userResponse.length = res.length;
      });
    console.log(this.userResponse.result);
    return this.userResponse;
  }
}
