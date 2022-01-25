import { Component, OnInit, Input } from '@angular/core';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss'],
})
export class CarCardComponent implements OnInit {
  @Input() carDetail!: CarDetail;
  carImage!: CarImage;
  carImageUrl: string = '';

  constructor(private carImageService: CarImageService) {}

  ngOnInit(): void {
    this.getCarImage();
  }

  getCarImage() {
    this.carImage = this.carDetail.images[0];
    this.carImageUrl = environment.apiUrl.replace("/api","") + this.carImage.imagePath;
  }
}
