//SIDENAV
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

//slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
    indicators: true, 
    height: 500,
    transition: 500,
    interval: 6000
});


//MODAL
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });
    