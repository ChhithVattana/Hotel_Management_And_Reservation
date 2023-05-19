import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImageModel } from '../Model/ImageModel';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient) {}

  imageData: ImageModel[] = [];
  imageDataDetail: ImageModel[] = [];

  getAllImage() {
    this.imageData = [];
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      }),
    };
    this.http
      .get('http://18.138.248.92:6969/api/v1/images?page=0&size=10&q=', httpOption)
      .toPromise()
      .then((res: any) => {
        res.result.forEach((r: ImageModel) => {
          this.imageData.push(r);
        });
      });
    return this.imageData;
  }

  getImageById(id: number) {
    this.imageDataDetail = [];
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      }),
    };
    this.http
      .get(`http://18.138.248.92:6969/api/v1/images/getById?id=${id}`, httpOption)
      .toPromise()
      .then((res: any) => {
        res.result.forEach((r: ImageModel) => {
          this.imageDataDetail.push(r);
        });
      });
    return this.imageDataDetail;
  }
}
