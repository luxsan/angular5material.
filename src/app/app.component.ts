import { Component,OnInit,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import { UsersComponent } from './users/users.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  HasProductToBook : Boolean = false;
  panelOpenState: Boolean = false;
  ProductToBook:any;
  constructor(public dialog: MatDialog) {
    this.ProductToBook=[];
  }
  ex(){
    this.panelOpenState = true;
    console.log("click");
  }
  ngOnInit() {}
SelectProductToBook(id) {
  this.ProductToBook.push(id);
  if(this.ProductToBook.length){
    this.HasProductToBook=true;
  }
  console.log(this.ProductToBook);
}
SelectUsers(): void {
  let dialogRef = this.dialog.open(UsersComponent, {
    width: '70%',
    height:'100vh'
  });
}
}