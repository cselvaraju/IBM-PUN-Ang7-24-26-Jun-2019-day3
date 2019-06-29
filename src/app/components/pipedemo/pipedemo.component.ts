import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  text: string;
  price: number;
  today: Date;
  student;

  constructor() { }

  ngOnInit() {
    this.text = '';
    this.price = 35.7;
    this.today = new Date();
    this.student = {
      name: 'ABCD',
      cgpa: 3.77
    };
  }

}
