import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { map } from 'rxjs/operators';
import { Distributor } from './vehicle-list/distributor.model';
import { AppSettings } from './../appsettings.model';

@Injectable()
export class DistributorService {
  private distributors: Distributor[] = [];

  distributorSelected = new Subject<number>();

  constructor(private http: HttpClient) { }

  getDistributors() {
    const URL = AppSettings.URL + 'tracking/distributorservice.php';
    this.http.get(URL).pipe(map(data => {
      let obj;
          for (const resp of data['Distributor']) {
            obj = new Distributor(resp.DistributorId, resp.DistributorName);
            this.distributors.push(obj);
          }
    })).subscribe();
    return this.distributors;
  }
}
