import { Component, OnInit } from '@angular/core';
import { ClientAssignation } from 'src/app/dudy-fit-api/domain/client-assignation';
import { ClientAssignationService } from 'src/app/dudy-fit-api/service/client-assignation.service';

@Component({
  selector: 'app-assignation',
  templateUrl: './assignation.component.html',
  styleUrls: ['./assignation.component.scss']
})
export class AssignationComponent implements OnInit {

  public clientAssignationList: ClientAssignation[] = [];

  constructor(private clientAssignationService: ClientAssignationService) { }

  ngOnInit(): void {
    this.clientAssignationService.getClientAssignationList().subscribe(
      clientAssignationList => this.clientAssignationList = clientAssignationList,
    )
  }

}
