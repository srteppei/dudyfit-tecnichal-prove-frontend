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

  updateTrainer(trainer: Trainer) {
    return this.httpClient.put<Trainer>(this.getUrl(), trainer);
  }

  getTrainerList() {
    return this.httpClient.get<Trainer[]>(this.getUrl() + '/all');
  }

  deleteTrainer(trainer: Trainer) {
    return this.httpClient.delete(this.getUrl() + `/${trainer.id}`);
  }

  private getUrl() {
    return environment.dudyfit.endpoint + '/trainer';
  }
}
