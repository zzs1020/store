import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

export class StoreStub {
  select(): Observable<any> {
    return of('');
  }
}
