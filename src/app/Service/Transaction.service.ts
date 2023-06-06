import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../Model/ResponseModel';
import { TransactionModel } from '../Model/TransactionModel';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  response: ResponseModel<TransactionModel[]> = new ResponseModel<
    TransactionModel[]
  >([], 0);

  constructor(private http: HttpClient) {}

  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    }),
  };

  // get all reservation list
  async getAllReservationList(page: number) {
    this.response.result = [];
    await this.http
      .get(
        `https://m1g7.seyna.iteg7.com/api/v1/transaction?page=${page}&size=10&q=`,
        this.httpOption
      )
      .toPromise()
      .then((res: any) => {
        res.result.forEach((r: TransactionModel) => {
          this.response.result.push(r);
        });
        this.response.length = res.length;
      });
    console.log(this.response.result);
    return this.response;
  }
}
