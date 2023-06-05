import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customNumber'
})

export class CustomNumberPipe implements PipeTransform {
  transform(value: number): string {
    const isInteger = Number.isInteger(value);

    if (isInteger) {
      return value.toFixed(2);
    } else {
      return value.toString();
    }
  }
}
