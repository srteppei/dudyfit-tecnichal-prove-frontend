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

  public formGroup;

  constructor(private trainerService: TrainerService) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      reputation: new FormControl('', [Validators.required, Validators.min(0), Validators.max(5)]),
      availablePlaces: new FormControl('', [Validators.required, Validators.min(1)]),
    });
  }

  onSubmit() {
    const trainer = this.formGroup.value as Trainer;
    this.trainerService.createTrainer(trainer).subscribe(
      trainer => alert(`Entrenador creado: ${trainer.id}`),
      error => alert(`Error creating trainer ${error.message}`),
    );
  }

}
