import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mailTo',
})
export class MailToPipe implements PipeTransform {
  transform(value: string): string {
    return `<a href="${value}">${value}</a>`;
  }
}
