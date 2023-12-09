import { Component, Inject, OnInit, NgModule } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'angular-test-delete-user-dialog',
  templateUrl: './delete-user-dialog.component.html',
  styleUrls: ['./delete-user-dialog.component.scss'],
})
export class DeleteUserDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {},
    private dialogRef: MatDialogRef<DeleteUserDialogComponent>,
  ) {}

  ngOnInit(): void {  }
  
  deleteUser($event: any) {
    this.dialogRef.close($event);
  }
}

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [DeleteUserDialogComponent],
  exports: [DeleteUserDialogComponent],
})
export class DeleteUserComponentModule {}
