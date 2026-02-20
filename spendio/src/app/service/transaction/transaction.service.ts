import { transaction } from './../../../model/transaction.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ENDPOINTS } from '../../../core/api/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }


  getUserTransactions(email: string): Observable<transaction[]> {

    return this.http.get<transaction[]>(API_ENDPOINTS.transaction.getAll + encodeURIComponent(email))

  }


}
