import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';

const RESOURCE_URL = '/api/major';
@Injectable({
  providedIn: 'root'
})

export class MajorRolesCrudResourceService {

  constructor(private httpClient: HttpClient) {

  }
  findAll(): Observable<MajorRoles[]> {
    return this.httpClient.get<MajorRoles[]>(RESOURCE_URL);
  }
  
  findOne(id: string): Observable<MajorRoles> {
    return this.httpClient.get<MajorRoles>(`${RESOURCE_URL}/${id}`);
  }
  
}

export interface MajorRoles {
  prop: string;
}
