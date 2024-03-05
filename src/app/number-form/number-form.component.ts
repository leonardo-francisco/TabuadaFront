import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-number-form',
  templateUrl: './number-form.component.html',
  styleUrls: ['./number-form.component.css']
})
export class NumberFormComponent {

  numberList = '';
  //results: string[] = [];
  results: [string, string[]][] = [];

  constructor(private apiService: ApiService) { }

  submitNumbers() {
    const numeros = this.numberList.split(',').map(num => parseInt(num.trim(), 10));
    console.log(numeros)
    this.apiService.processNumbers(numeros).subscribe(
      data => {
        this.results = data.map(tabuada => {
          const lines = tabuada.split('\r\n');
          return [lines[0].split(' x ')[0], lines];
        });

        console.log(this.results)
      },
      error => {
        console.log(error);
      }
    );
  }

}
