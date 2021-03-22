import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';

const RESOURCE_URL = '/api';
@Injectable({
  providedIn: 'root'
})

export class SuperAdminCrudResourceService {

  constructor(private httpClient: HttpClient) {

  }
  findAll(): Observable<SuperAdmin[]> {
    return this.httpClient.get<SuperAdmin[]>(RESOURCE_URL);
  }
  
  findOne(id: string): Observable<SuperAdmin> {
    return this.httpClient.get<SuperAdmin>(`${RESOURCE_URL}/${id}`);
  }
  
}

export interface SuperAdmin {
  prop: string;
}
