import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-positions-table',
  templateUrl: './current-positions-table.component.html',
  styleUrls: ['./current-positions-table.component.scss']
})
export class CurrentPositionsTableComponent implements OnInit {

  positions = [
    {
      stock: "ABC",
      longOrShort: 'Long'
    },
    {
      stock: "FGH",
      longOrShort: 'Long'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
