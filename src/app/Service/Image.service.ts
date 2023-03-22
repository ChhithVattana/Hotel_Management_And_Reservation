import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImageModel } from '../Model/ImageModel';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  imageData: ImageModel[] = [];

  getAllImage() {
    this.imageData = [];
    this.http
      .get('http://localhost:6969/api/v1/images?page=0&size=10&q=', this.httpOption)
      .toPromise()
      .then((res: any) => {
        res.result.forEach((r: ImageModel) => {
          this.imageData.push(r);
        });
      });
      console.log(this.imageData);
    return this.imageData;
  }

  getImageById(id: number) {
    this.imageData = [];
    this.http
      .get(`http://localhost:6969/api/v1/images/getById?id=${id}`, this.httpOption)
      .toPromise()
      .then((res: any) => {
        res.result.forEach((r: ImageModel) => {
          this.imageData.push(r);
        });
      });
      console.log(this.imageData);
    return this.imageData;
  }
}
