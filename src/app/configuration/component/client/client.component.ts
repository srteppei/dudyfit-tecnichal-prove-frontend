import { Component, OnInit } from '@angular/core';

import { Client } from '../../../dudy-fit-api/domain/client';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientService } from '../../../dudy-fit-api/service/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  public formGroup: FormGroup;
  public client: Client;
  public clientList: Client[];

  constructor(private trainerService: ClientService) {
    this.cleanClient();
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl(this.client.name, Validators.required),
      trainerReputation: new FormControl(this.client.trainerReputation, [Validators.required, Validators.min(0), Validators.max(10)]),
    });
    this.requestClientList();
  }

  onSubmit() {
    const client = this.formGroup.value;
    if (this.client.id) {
      client.id = this.client.id;
      this.trainerService.updateClient(client).subscribe(
        trainer => {
          this.requestClientList();
          alert(`Cliente actualziado: ${trainer.id}`);
        },
        error => alert(`Error actualizando entrenador: ${error.message}`)
      )
    } else {
      this.trainerService.createClient(client).subscribe(
        trainer => {
          this.requestClientList();
          alert(`Cliente creado: ${trainer.id}`);
        },
        error => alert(`Error creando entrenador ${error.message}`),
      );
    }
  }

  selecClient(trainer: Client) {
    this.client = trainer;
    this.formGroup.patchValue(trainer);
  }

  cleanClient() {
    this.client = new Client(null, null, null);
  }

  deleteClient(trainer: Client) {
    this.trainerService.deleteClient(trainer).subscribe(
      () => {
        this.cleanClient();
        this.requestClientList();
        alert(`Cliente elminado: ${trainer.id}`);
      },
      error => alert(`Error al elimnar el entrenador ${error.message}`),
    )
  }

  private requestClientList() {
    this.trainerService.getClientList()
    .subscribe(
      trainerList => this.clientList = trainerList,
      error => console.error(error),
    );
  }

}
