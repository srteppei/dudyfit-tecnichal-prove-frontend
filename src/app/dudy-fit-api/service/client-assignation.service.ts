import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { ClientAssignation } from '../domain/client-assignation';

@Injectable({
  providedIn: 'root'
})
export class ClientAssignationService {

  constructor(private httpClient: HttpClient) { }

  getClientAssignationList() {
    return this.httpClient.get<ClientAssignation[]>(this.getUrl());
  }

  private getUrl() {
    return environment.dudyfit.endpoint + '/client-assignation';
  }
}
