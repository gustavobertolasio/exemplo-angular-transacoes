import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { TransferRequest } from '../models/transfer';
import { Operation } from '../models/operation';

@Injectable({
  providedIn: 'root',
})
export class OperationApiService {
  constructor(private http: HttpClient) {}

  url = `${environment.operationApi}/operation`;

  defaultHttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  });

  getTransferTax(date: string): Observable<number> {
    return this.http.get<number>(`${this.url}/${date}`, {
      headers: this.defaultHttpHeaders,
    });
  }

  getScheduledOperations(): Observable<Operation[]> {
    return this.http.get<Operation[]>(`${this.url}/all`, {
      headers: this.defaultHttpHeaders,
    });
  }

  transferAmount(transferData: TransferRequest): Observable<any> {
    return this.http.post<TransferRequest>(`${this.url}/transfer`, transferData, {
      headers: this.defaultHttpHeaders,
    });
  }
}
