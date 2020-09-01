import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {Trainer} from '../domain/trainer';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor(private httpClient: HttpClient) { }

  createTrainer(trainer: Trainer){
    return this.httpClient.post<Trainer>(this.getUrl(), trainer);
  }

  private getUrl() {
    return environment.dudyfit.endpoint + '/trainer';
  }
}
