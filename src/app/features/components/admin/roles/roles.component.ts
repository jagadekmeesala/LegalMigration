import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { RolesEditComponent } from '../roles-edit/roles-edit.component';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
  providers: [DialogService, MessageService],
})
export class RolesComponent implements OnInit, OnDestroy {
  totalRecords: any;
  data: any[] = [];
  ref: DynamicDialogRef | undefined;
  constructor(private http: HttpClient, private dialogService: DialogService) {}

  ngOnInit(): void {
    this.http.get('assets/data.json').subscribe((data: any) => {
      this.totalRecords = data.users.length;
      this.data.push(...data.users);
    });
  }

  adduser() {
    this.ref = this.dialogService.open(RolesEditComponent, {
      header: 'Create User',
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      closeOnEscape: false,
    });
    this.ref.onClose.subscribe((data: any) => {
      localStorage.removeItem('user');
      localStorage.removeItem('isEdit');
    });
  }
  editRow(id: number) {
    this.ref = this.dialogService.open(RolesEditComponent, {
      header: 'Edit User',
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      closeOnEscape: false,
    });
    this.ref.onClose.subscribe((data: any) => {
      localStorage.removeItem('user');
      localStorage.removeItem('isEdit');
    });

    let data = this.data.filter((item: any) => {
      return item.userId === id;
    });
    localStorage.setItem('isEdit', JSON.stringify(true));
    localStorage.setItem('user', JSON.stringify(data));
  }
  ngOnDestroy() {
    console.log('testDestroy');

    localStorage.removeItem('user');
    localStorage.removeItem('isEdit');
  }
}
