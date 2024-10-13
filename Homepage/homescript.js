$(document).ready(function() {
  $(".hover").mouseleave(function() {
    $(this).removeClass("hover");
  });

  var carElements = document.querySelectorAll('.car-listings .car');
  let section = document.getElementsByClassName("car-listings")[0]; // Access the first element since getElementsByClassName returns a collection
  let card_name = document.getElementById("car-name");
  let card_price = document.getElementById("price");

  function card() {
    carElements.forEach(function(carElement) {
      carElement.addEventListener('click', function() {
        var h3Value = carElement.querySelector('h3').innerText;
        var pValue = carElement.querySelector('p').innerText;

        card_name.innerHTML = h3Value;
        card_price.innerHTML = pValue;
        section.style.display = "none"; // Hide car listings section when a card is clicked
      });
    });
  }

  document.querySelector('.car-listings').addEventListener('click', card);

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function checkViewport() {
    const cars = document.querySelectorAll('.car');
    let delay = 0;
    cars.forEach(car => {
      if (isInViewport(car)) {
        setTimeout(() => {
          car.style.opacity = '1';
          car.style.animation = 'fadeInUp 0.5s ease forwards';
        }, delay);
        delay += 100;
      }
    });
  }
  document.addEventListener("DOMContentLoaded", function() {
    console.log('Welcome To Console');
    console.log(h3Value);
  }); 
  

  checkViewport();

  window.addEventListener('scroll', checkViewport);

  let circles = document.querySelectorAll(".circle");

  circles.forEach(circle => {
    circle.addEventListener("click", () => {
      circles.forEach(c => c.classList.remove("active"));
      circle.classList.add("active");
    });
  });
});



gsap.from(".product-card",{
  x:50,
  duration:1,
  delay:2
})