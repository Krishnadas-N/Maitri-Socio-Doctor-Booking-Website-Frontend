import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat',
  standalone: true,
})
export class TimeFormatPipe implements PipeTransform {
  transform(date: Date): any {
    if (!date) {
      return '';
    }
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    console.log(date, `${hours}:${minutes}`);
    return `${hours}:${minutes}`;
  }
}
