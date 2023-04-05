import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  name: string = "André";
  age: number = 30;
  job: string = "Programador";

  hobbies = ['Correr','Jogar','Estudar'];

  car = {
    name: 'Polo',
    year: 2019,
  };

}
