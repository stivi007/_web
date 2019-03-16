//autoinicio
document.addEventListener('DOMContentLoaded',function(){
  M.AutoInit();
});
//menu mobile
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});
  

//carousel
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems);
});
//body
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems);
});
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('#modal1,#modal2,#modal3,#modal4,#modal5,#modal6');
  var instances = M.Modal.init(elems);
});