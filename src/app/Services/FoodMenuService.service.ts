import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodMenuServiceService {
  constructor() {}

  data = [
    {
      id: 'breakfast',
      name: 'name',
      price: '10$',
      description: 'blah blah blah blah',
    },
    {
      id: 'breakfast',
      name: 'name',
      price: '20$',
      description: 'blah blah blah blah',
    },
    {
      id: 'breakfast',
      name: 'name',
      price: '30$',
      description: 'blah blah blah blah',
    },
    {
      id: 'breakfast',
      name: 'name',
      price: '40$',
      description: 'blah blah blah blah',
    },
    {
      id: 'breakfast',
      name: 'name',
      price: '50$',
      description: 'blah blah blah blah',
    },
    {
      id: 'breakfast',
      name: 'name',
      price: '60$',
      description: 'blah blah blah blah',
    },
    {
      id: 'launch',
      name: 'name',
      price: '10$',
      description: '============================',
    },
  ];

  getAllData() {
    return this.data;
  }
}
