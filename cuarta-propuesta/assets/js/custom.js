/* Write here your custom javascript codes */

/*$(document).ready(function(){
  $('.sliderCursos').bxSlider({
    slideWidth: 350,
    minSlides: 1,
    maxSlides: 3,
    moveSlides: 1,
    slideMargin: 0
  });
});*/

$('#modal1').on('shown.bs.modal', function () {
  $('#curso').focus()
})


$('#inscribirse').on('click', function () {
  $('.pago').removeClass("opacity-pago");
})

$('#factura').change(function() {
        if($(this).is(":checked")) {
           $('#detalle-factura').show(500)
        }
  });

