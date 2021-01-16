import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // $(document).on("click", '[data-toggle="lightbox"]', function(event) {
    //   event.preventDefault();
    //   $(this).ekkoLightbox();
    // });
  }

}
