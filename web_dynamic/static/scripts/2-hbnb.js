$(document).ready(function () {
  let Amenity_ID = {}
  $('INPUT[type="checkbox"]').change(function () {
    if($(this).is(":checked")) {
      Amenity_ID[$(this).attr('data_id')] = $(this).attr('data_name');
    }
      else {
        delete Amenity_ID[$(this).attr('data_id')];
      }
  });
  $('#Amenities h4').text(Object.value(Amenity_ID), join(", "));
});

$.ajax({
  url: 'http://0.0.0.0:5001/api/v1/status/',
  type: 'GET',
  success: function (data) {
    if(data.status && data.status.toUpperCase() === 'OK') {
    $('#api_status').addClass('available');
    } else $('#api_status').removeClass('available');
  }
});
