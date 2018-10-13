import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  constructor() {}

  transform(value: any, filterString: any): any {
    if (value.length === 0 || filterString === '' || filterString === undefined) {
      return value;
    }
    const vehicles = [];
    for (const item of value) {
      if (item['VehicleRegistrartion'].includes(filterString)) {
        vehicles.push(item);
      }
    }
    return vehicles;
  }
}
