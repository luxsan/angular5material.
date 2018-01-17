import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UsersComponent>) { }
  closeDialog() {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
