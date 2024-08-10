$(document).ready(function () {
  var ourCollection = $('#shopByDimonds');
  ourCollection.owlCarousel({
    loop: true,
    nav: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      350: {
        items: 4
      },
      650: {
        items: 5
      }
    },
    onInitialized: highlightCenter,
    onTranslated: highlightCenter
  });

  ourCollection.on('mousewheel','.owl-stage',function (e) {
    if (e.originalEvent.deltaY > 0)
    {
      ourCollection.trigger('next.owl.carousel');
    } else
    {
      ourCollection.trigger('prev.owl.carousel');
    }
    e.preventDefault();
  });

  function highlightCenter (event) {
    $('.owl-item .item').removeClass('highlight');
    var centerItem = $('.owl-item.active').eq(Math.floor($('.owl-item.active').length / 2)).find('.item');
    centerItem.addClass('highlight');
  }
});


document.addEventListener("DOMContentLoaded",function () {
  const thumbnails = document.querySelectorAll(".thumbnail")
  const mainImage = document.getElementById("mainImage")
  const mainHeading1 = document.getElementById("mainHeading1")
  const mainHeading2 = document.getElementById("mainHeading2")
  const mainDescription = document.getElementById("mainDescription")

  const firstThumbnail = thumbnails[ 0 ]
  mainImage.src = firstThumbnail.dataset.image
  mainHeading1.textContent = firstThumbnail.dataset.heading1
  mainHeading2.textContent = firstThumbnail.dataset.heading2
  mainDescription.textContent = firstThumbnail.dataset.description
  firstThumbnail.classList.add("active")

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click",function () {
      thumbnails.forEach((thumb) => thumb.classList.remove("active"))

      this.classList.add("active")

      mainImage.src = this.dataset.image
      mainHeading1.textContent = this.dataset.heading1
      mainHeading2.textContent = this.dataset.heading2
      mainDescription.textContent = this.dataset.description
    })
  })
})



AOS.init({
  duration: 1700,
  // once: true
});


$(function () {
  $("#header").load("header.html");
  $("#footer").load("footer.html");
});


$(".essentials-card,.hoop-card").tilt({
  maxTilt: 25,
  perspective: 1000,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  speed: 300,
  glare: false,
  maxGlare: 0,
  scale: 1
});


var swiper = new Swiper(".mySwiper2",{
  slidesPerView: 5, // Default for larger screens
  spaceBetween: 20,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  }
});

