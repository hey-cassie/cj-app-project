import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slideIndex = 0;
  images = [
    {
      image: '',
      thumbnail: '/assets/images/gallery-pics/pjThumb-01.svg',
      title: 'test',
      caption: '2020 Paul Carey Logo'
    },
    {
      image: '',
      thumbnail: '/assets/images/gallery-pics/blm.jpg',
      title: 'test',
      caption: 'Black Lives Matter Screenprint'
    },
    {
      image: '',
      thumbnail: '/assets/images/gallery-pics/sskcThumb-01.svg',
      title: 'test',
      caption: '2020 Single Speed Kansas City Logo'
    },
    {
      image: '',
      thumbnail: '/assets/images/gallery-pics/bat.jpg',
      title: 'test',
      caption: 'Hang in there, Baby! Screenprint'
    },
    {
      image: '',
      thumbnail: '/assets/images/gallery-pics/pogoThumb-01.svg',
      title: 'test',
      caption: 'St. Louis Pogo Club Logo'
    },
    {
      image: '',
      thumbnail: '/assets/images/gallery-pics/tn30.jpg',
      title: 'test',
      caption: "Branding for Trailnet's 30th anniversay"
    },
    {
      image: '',
      thumbnail: '/assets/images/gallery-pics/stlFriesThumb-01.svg',
      title: 'test',
      caption: 'STL Fries Logo'
    },
    {
      image: '',
      thumbnail: '/assets/images/gallery-pics/zombie2020.jpg',
      title: 'test',
      caption: 'I Survived 2020 stickers'
    },
    {
      image: '',
      thumbnail: '/assets/images/gallery-pics/borThumb-01.svg',
      title: 'sskc test',
      caption: 'Barf-o-Rama HQ Sticker/Shirt Design'
    },
    {
      image: '',
      thumbnail: '/assets/images/gallery-pics/tnSouthCity.jpg',
      title: 'test',
      caption: 'Trailnet and South City collaboration'
    },
    {
      image: '',
      thumbnail: '/assets/images/gallery-pics/xmasThumb-01.svg',
      title: 'test',
      caption: '2020 Christmas Card Commission'
    },
    {
      image: '',
      thumbnail: '/assets/images/gallery-pics/r2l.jpg',
      title: 'test',
      caption: 'CrossFit Ready 2 Live Logo'
    },
  ]

  openModal() {
    document.getElementById('imgModal').style.display = "block";
   }
   closeModal() {
    document.getElementById('imgModal').style.display = "none";
   }
   plusSlides(n) {
    this.showSlides(this.slideIndex += n);
   }
   currentSlide(n) {
    this.showSlides(this.slideIndex = n);
   }
   
   showSlides(slideIndex);

   showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("img-slides") as HTMLCollectionOf < HTMLElement > ;
    const dots = document.getElementsByClassName("images") as HTMLCollectionOf < HTMLElement > ;
    //const captionText = document.getElementById("caption");
    if (n > slides.length) {
     this.slideIndex = 1
    }
    if (n < 1) {
     this.slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
    }
    for (let j = 0; j < dots.length; j++) {
     dots[j].className = dots[j].className.replace("active", "");
    }
    slides[this.slideIndex - 1].style.display = "block";
    if (dots && dots.length > 0) {
     dots[this.slideIndex - 1].className += "active";
     //captionText.innerHTML = dots[this.slideIndex-1].alt;
    }
   }

}
