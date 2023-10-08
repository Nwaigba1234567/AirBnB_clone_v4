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
