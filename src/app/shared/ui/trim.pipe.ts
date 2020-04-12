import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'trimtext' })
export class TrimTextPipe implements PipeTransform {
  transform(value: string): string {
    return value.trim();
  }
}
