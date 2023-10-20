import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
/**
 * @title Dialog elements
 */
@Component({
  selector: 'dialog-elements-example',
  templateUrl: 'bottom-l.component.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
})
export class DialogContentExample {
  constructor(public dialog: MatDialog, private router: Router) {}

  openDialog() {
    this.dialog.open(DialogContentExampleDialog);
  }
  async login() {
    this.router.navigate(['/home']);
    this.dialog.closeAll();
  }
}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
  styleUrls: ['./bottom-l.component.scss'],
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    CommonModule,
  ],
})
export class DialogContentExampleDialog {
  onLogin: boolean = true;
  constructor(private router: Router, public dialog: MatDialog) {}
  async login() {
    this.onLogin = false;
    setTimeout(() => {
      this.router.navigate(['/home']);
      this.dialog.closeAll();
    }, 3000);
  }
}
