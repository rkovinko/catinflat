import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less']
})
export class GalleryComponent implements OnInit {
  itemWidth= 0;
  galleryShift = 0;

  constructor() { }

  ngOnInit() {
    this.itemWidth = document.getElementById('gallery-wrapper').offsetWidth;
  }

  onGalleryClick(dir: string) {
    const direction = (dir === 'left') ? 1 : -1;
    this.galleryShift += this.itemWidth * direction;
  }

}
