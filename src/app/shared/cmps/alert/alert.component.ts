import { Component, OnInit } from '@angular/core';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { StatusService } from '../../services/status/status.service';
import { Alert } from '../../settings/alert';

@Component({
  selector: 'my-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  providers: [NgbAlertConfig],
})
export class AlertComponent implements OnInit {
  msg: string;
  openAlert: boolean;

  constructor(private config: NgbAlertConfig, private status: StatusService) {
  }

  ngOnInit() {
    this.status.alert$.subscribe((alert: Alert) => {
      this.config.type = alert.type;
      this.msg = alert.msg;
      this.openAlert = true;
      setTimeout(_ => this.closeAlert(), 5000); // detectStrategy has to be default to trigger html change
    });
  }

  closeAlert() {
    this.openAlert = false;
  }

}
