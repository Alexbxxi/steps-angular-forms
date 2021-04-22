import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  constructor() { }
  
  Stepper: Stepper;

  ngOnInit(): void {
    this.Stepper = new Stepper(document.querySelector('.bs-stepper'));
  }

  continuar() {
      this.Stepper.next();
  }

  finalizar() {
    this.Stepper.reset();
  }
}
