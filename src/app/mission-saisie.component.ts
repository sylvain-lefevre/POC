import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mission-saisie',
  templateUrl: './mission-saisie.component.html',
  styleUrls: ['./mission-saisie.component.css'],
})

export class MissionSaisieComponent implements OnInit {
  date: NgbDateStruct;
  liste = [
      'item1',
      'item2',
      'item3',
     ];
  selectedItem = null;
  ngOnInit(): void {

    return;
  }
}




