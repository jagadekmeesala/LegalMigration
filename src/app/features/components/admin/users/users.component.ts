import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  totalRecords: any;
  data: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http.get('assets/data.json').subscribe((data: any) => {
      this.totalRecords = data.users.length;
      this.data.push(...data.users);
    });
  }

  editRow(id: number) {
    let data = this.data.filter((item: any) => {
      return item.userId === id;
    });
    localStorage.setItem('isEdit', JSON.stringify(true));
    localStorage.setItem('user', JSON.stringify(data));
    this.router.navigate(['/main/dashboard/admin/edituser']);
  }

  adduser() {
    this.router.navigate(['/main/dashboard/admin/createuser']);
  }
}
