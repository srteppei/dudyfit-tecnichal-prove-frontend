import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Trainer } from '../../../dudy-fit-api/domain/trainer';
import { TrainerService } from '../../../dudy-fit-api/service/trainer.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss']
})
export class TrainerComponent implements OnInit {

  public formGroup: FormGroup;
  public trainer: Trainer;
  public trainerList: Trainer[];

  constructor(private trainerService: TrainerService) {
    this.cleanTrainer();
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl(this.trainer.name, Validators.required),
      reputation: new FormControl(this.trainer.reputation, [Validators.required, Validators.min(0), Validators.max(5)]),
      availablePlaces: new FormControl(this.trainer.availablePlaces, [Validators.required, Validators.min(1)]),
    });
    this.requestTrainerList();
  }

  onSubmit() {
    const trainer = this.formGroup.value;
    if (this.trainer.id) {
      trainer.id = this.trainer.id;
      this.trainerService.updateTrainer(trainer).subscribe(
        trainer => {
          this.requestTrainerList();
          alert(`Entrenador actualziado: ${trainer.id}`);
        },
        error => alert(`Error actualizando entrenador: ${error.message}`)
      )
    } else {
      this.trainerService.createTrainer(trainer).subscribe(
        trainer => {
          this.requestTrainerList();
          alert(`Entrenador creado: ${trainer.id}`);
        },
        error => alert(`Error creando entrenador ${error.message}`),
      );
    }
  }

  selecTrainer(trainer: Trainer) {
    this.trainer = trainer;
    this.formGroup.patchValue(trainer);
  }

  cleanTrainer() {
    this.trainer = new Trainer(null, null, null, null);
  }

  deleteTrainer(trainer: Trainer) {
    this.trainerService.deleteTrainer(trainer).subscribe(
      () => {
        this.cleanTrainer();
        this.requestTrainerList();
        alert(`Entrenador elminado: ${trainer.id}`);
      },
      error => alert(`Error al elimnar el entrenador ${error.message}`),
    )
  }

  private requestTrainerList() {
    this.trainerService.getTrainerList()
    .subscribe(
      trainerList => this.trainerList = trainerList,
      error => console.error(error),
    );
  }

}
