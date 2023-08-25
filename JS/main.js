// Initialize and add the map
function initMap() {
    // Your location
    const loc = { lat: 35.688768663936116, lng: 139.7621357650962 };
    // Centered map on location
    const map = new google.maps.Map(document.querySelector('.map'), {
      zoom: 14,
      center: loc
    });
    // The marker, positioned at location
    const marker = new google.maps.Marker({ position: loc, map: map });
  }
  // Sticky menu background
window.addEventListener('scroll', function() {
  if (window.scrollY > 55) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});
// Smooth Scrolling
$('#navbar a, .more').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 61
      },
      800
    );
  }
});