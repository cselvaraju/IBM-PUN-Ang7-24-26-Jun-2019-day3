import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  favDish: string;
  data4Child: string;
  childFavCountry: string;

  constructor() { }

  ngOnInit() {
    this.favDish = '';
    this.data4Child = '';
    this.childFavCountry = '';
  }

  sendData2Child() {
    this.data4Child = this.favDish;
  }

  getChildFavCountry(event) {
    // console.log(event);
    this.childFavCountry = event;
  }
}
