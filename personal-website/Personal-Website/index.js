const liItem = document.querySelectorAll('.filter-menu .filter-item')
const imgItem = document.querySelectorAll('.card')
const toTop = document.querySelector(".to-top");
let images = document.querySelectorAll(".image")

// TYPING EFFECT

const typingEffect = new Typed(".multi-text", {
  strings: ["Web developer","Grafik", "Video editor", "Music Engineer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1500
})

// SCROLL UP BTN

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active")
  } else {
    toTop.classList.remove("active")
  }
})

// FILTER

liItem.forEach(li => {
  li.onclick = function() {
    liItem.forEach(li => {
      li.classList.remove('active'); 
    });
    li.classList.add('active'); 

    const value = li.textContent.trim();
    imgItem.forEach(img => {
      img.style.display = 'none';
      if (img.getAttribute('data-filter') === value || value === "Všetko" || value === "All") {
        img.style.display = 'block';
      }
    });
  };
});

//FULL SCREEN PHOTO

images.forEach(function(image) {
  if (!image.classList.contains('no-click')) {
      image.addEventListener("click", function() {
          let ImgLink = image.querySelector("img").src;

          document.getElementById("FullImage").src = ImgLink;
          document.getElementById("full-img-view").style.display = "flex";
      });
  }
});

// CANCEL FULL SCREEN PHOTO

document.getElementById("close-full-img").addEventListener("click", function(){
  
  document.getElementById("full-img-view").style.display = "none"

})

//ANIMATIONS

AOS.init()