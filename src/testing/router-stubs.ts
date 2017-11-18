/* tslint:disable:directive-selector */
import { Directive, HostListener, Injectable, Input, NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { convertToParamMap, ParamMap } from '@angular/router';

// ---------------------------------------------------------- RouterStub
@Injectable()
export class RouterStub {
    public events = new BehaviorSubject({url: '/DeviceSearch'}).asObservable();

    navigate(urlArray: string[]) {
        return urlArray;
    }
}

// ---------------------------------------------------------- RouterLinkStubDirective
@Directive({
    selector: '[routerLink]'
})
export class RouterLinkStubDirective {
    @Input() routerLink: any;
    navigatedTo: any = null;

    @HostListener('click') onClick() {
        // now only consider 2 basic routerLink usage
        if (typeof this.routerLink === 'string') {
            this.navigatedTo = this.routerLink;
        } else {
            this.navigatedTo = this.routerLink[0];
        }
    }
}

@NgModule({
  declarations: [
    RouterLinkStubDirective
  ]
})
export class FakeDirectiveModule { }

// ---------------------------------------------------------- ActivatedRouteStub
@Injectable()
export class ActivatedRouteStub {

  // ActivatedRoute.paramMap is Observable
  private subject = new BehaviorSubject(convertToParamMap(this.testParamMap));
  paramMap = this.subject.asObservable();

  // Test parameters
  private _testParamMap: ParamMap;
  get testParamMap() { return this._testParamMap; }
  set testParamMap(params: {}) {
    this._testParamMap = convertToParamMap(params);
    this.subject.next(this._testParamMap);
  }

  // ActivatedRoute.snapshot.paramMap
  get snapshot() {
    return { paramMap: this.testParamMap };
  }
}
