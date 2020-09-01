import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Client } from '../domain/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient: HttpClient) { }

  createClient(trainer: Client){
    return this.httpClient.post<Client>(this.getUrl(), trainer);
  }

  updateClient(trainer: Client) {
    return this.httpClient.put<Client>(this.getUrl(), trainer);
  }

  getClientList() {
    return this.httpClient.get<Client[]>(this.getUrl() + '/all');
  }

  deleteClient(trainer: Client) {
    return this.httpClient.delete(this.getUrl() + `/${trainer.id}`);
  }

  private getUrl() {
    return environment.dudyfit.endpoint + '/client';
  }
}
