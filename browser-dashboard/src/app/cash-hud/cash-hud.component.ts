import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cash-hud',
  templateUrl: './cash-hud.component.html',
  styleUrls: ['./cash-hud.component.scss']
})
export class CashHudComponent implements OnInit {

  fakePl = 42000.00
  fakeCash = 1050000.00

  constructor() { }

  ngOnInit(): void {
  }

}
