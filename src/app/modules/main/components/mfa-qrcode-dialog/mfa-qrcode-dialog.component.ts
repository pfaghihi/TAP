import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../services/auth.service";
import {BsModalService} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-mfa-qrcode-dialog',
  templateUrl: './mfa-qrcode-dialog.component.html',
  styleUrls: ['./mfa-qrcode-dialog.component.less']
})
export class MfaQrcodeDialogComponent implements OnInit {
  imageData?: string;
  constructor(
    private authService: AuthService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.authService.mfaQrcode().subscribe(value => {
      this.imageData = "data:image/svg+xml;base64," + value.data
    });
  }

  hide() {
    this.modalService.hide();
  }
}
