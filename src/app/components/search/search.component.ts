import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  DateTimeNow: Date = new Date();
  rentalStartDate: Date = new Date();
  rentalEndDate: Date = new Date();

  constructor() {}

  ngOnInit(): void {}
}
