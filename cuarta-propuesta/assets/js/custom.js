/* Write here your custom javascript codes */


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

$(function(){
    $('#slider div:gt(0)').hide();
    setInterval(function(){
      $('#slider div:first-child').fadeOut(0)
         .next('div').fadeIn(3000)
         .end().appendTo('#slider');}, 5000);
});

