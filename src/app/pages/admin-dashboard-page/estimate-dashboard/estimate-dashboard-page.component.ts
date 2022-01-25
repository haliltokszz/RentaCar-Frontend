import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-estimate-dashboard-page",
  templateUrl: "./estimate-dashboard-page.component.html",
  styleUrls: ["./estimate-dashboard-page.component.scss"],
})
export class EstimateDashboardPageComponent implements OnInit {
  estimates = [
    {
      carCategory: "Coupe",
      month: "January",
      value: 3896,
      totalRent: 12784,
    },
    { carCategory: "Hatchbag", month: "January", value: 7892, totalRent: 21546 },
    { carCategory: "Minivan", month: "January", value: 751, totalRent: 3125 },
    { carCategory: "Pickup", month: "January", value: 896, totalRent: 4032 },
    { carCategory: "Sedan", month: "January", value: 11073, totalRent: 28654 },
    { carCategory: "Sport", month: "January", value: 1123, totalRent: 4861 },
    { carCategory: "Station", month: "January", value: 5804, totalRent: 9131 },
    { carCategory: "SUV", month: "January", value: 6097, totalRent: 10755 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
