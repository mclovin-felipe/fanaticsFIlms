import { Component, OnInit } from '@angular/core';
import { ImageListService } from '../../home/services/image-list.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {
  images: string[] = [];

  constructor(private imageListService: ImageListService) {}

  ngOnInit(): void {
    this.imageListService.getMovieImages().then((images) => {
      this.images = images;
    });
  }
}
