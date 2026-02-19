import { user } from './../../../model/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINTS } from '../../../core/api/api-endpoints';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  addUser(userobj: user): Observable<user> {
    return this.http.post<user>(API_ENDPOINTS.user.add,userobj);
}

}
