import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getData(): [number, number, number] {
    return [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
    ];
  }

  addDefault(): void {
    this.add('dashboard-tile');
  }

  add(tileKind: string): void {

    const data = this.getData();

    const tile = document.createElement(tileKind);
    tile.setAttribute('class', 'col-lg-4 col-md-3 col-sm-2');
    tile.setAttribute('a', '' + data[0]);
    tile.setAttribute('b', '' + data[1]);
    tile.setAttribute('c', '' + data[2]);

    const content = document.getElementById('content');
    content.appendChild(tile);

  }

}
