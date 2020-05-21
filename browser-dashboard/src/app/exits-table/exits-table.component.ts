import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exits-table',
  templateUrl: './exits-table.component.html',
  styleUrls: ['./exits-table.component.scss']
})
export class ExitsTableComponent implements OnInit {

  positions = [
    {
      stock: "DEF",
      longOrShort: 'Long'
    },
    {
      stock: "XYZ",
      longOrShort: 'Long'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
