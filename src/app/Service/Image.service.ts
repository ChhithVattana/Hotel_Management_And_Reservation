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

  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    }),
  };

  getAllImage() {
    this.imageData = [];
    this.http
      .get('https://cloudnotebase.seynaa.com/api/v1/images?page=0&size=10&q=', this.httpOption)
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
    this.http
      .get(`https://cloudnotebase.seynaa.com/api/v1/images/id?id=${id}`, this.httpOption)
      .toPromise()
      .then((res: any) => {
        res.result.forEach((r: ImageModel) => {
          this.imageDataDetail.push(r);
        });
      });
    return this.imageDataDetail;
  }
}
