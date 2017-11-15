import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Alert } from '../../settings/alert';

@Injectable()
export class StatusService {
  private alertSource: Subject<Alert> = new Subject();
  alert$: Observable<Alert> = this.alertSource.asObservable();

  constructor() { }

  // used to send message out
  alert(alert: Alert) {
    this.alertSource.next(alert);
  }

}
