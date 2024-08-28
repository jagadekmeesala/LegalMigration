// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://172.17.13.147:8080/user/login'; // Ensure the URL has the correct protocol
  private userData: any; // Variable to hold user data

  constructor(private http: HttpClient) {}

  login(userName: string, password: string): Observable<any> {
    const body = { userName, password };
    return this.http.post<any>(this.apiUrl, body);
  }

  setUserData(data: any) {
    this.userData = data;
    sessionStorage.setItem('userData', JSON.stringify(data)); // Store in session storage
    console.log("userdaaaata", this.userData);
    
  }

  getUserData() {
    return this.userData || JSON.parse(sessionStorage.getItem('userData')!); 
  }

  getRoleId() {
    const userData = this.getUserData();
    console.log("Inside the role id", userData)
    if (userData) {
      // Depending on the role_id structure, adjust the logic here
      if (userData.lawyerdata)
        { localStorage.setItem("roleName","Lawyer")
          return userData.lawyerdata.role_id;
        }

      if (userData.clientsdata) {
        localStorage.setItem("roleName","Client")
        return userData.clientsdata.role_id;
      }
      if (userData.firmdata) 
        {
          localStorage.setItem("roleName","Firm")
          return userData.firmdata.role_id;
        } 

    }


    // return null;
  }

getFirstName() {
    const userData = this.getUserData();
    console.log("Inside the role id", userData)
    if (userData) {
      // Depending on the role_id structure, adjust the logic here
       console.log("heelo",userData.userdata[0].first_name )
      localStorage.setItem("firstname",userData.userdata[0].first_name)
    }
    // return null;
  }




   
    private RegisterUrl = 'http://172.17.13.147:8080/user/register';  
    
 
    
    register(userData: any) {
      console.log(userData)
    return this.http.post<any>(this.RegisterUrl, userData);
    }
    
  
}
