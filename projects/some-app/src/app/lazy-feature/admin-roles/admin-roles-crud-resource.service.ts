import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';

const RESOURCE_URL = '/api';
@Injectable({
  providedIn: 'root'
})

export class AdminRolesCrudResourceService {

  constructor(private httpClient: HttpClient) {

  }
  findAll(): Observable<AdminRoles[]> {
    return this.httpClient.get<AdminRoles[]>(RESOURCE_URL);
  }
  
  findOne(id: string): Observable<AdminRoles> {
    return this.httpClient.get<AdminRoles>(`${RESOURCE_URL}/${id}`);
  }
  
}

export interface AdminRoles {
  prop: string;
}
