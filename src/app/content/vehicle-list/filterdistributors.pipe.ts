import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterdistributors'
})
export class FilterdistributorsPipe implements PipeTransform {

  transform(value: any, filterString?: any): any {
    if (value.length === 0 || filterString === '' || filterString === undefined) {
      return value;
    }
    const distributors = [];
    for (const item of value) {
      if (item['distributorName'].includes(filterString)) {
        distributors.push(item);
      }
    }
    return distributors;
  }
}
