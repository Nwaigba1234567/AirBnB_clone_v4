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

function loadPlaces (data = {}) {
$.ajax ({
  url: 'http://0.0.0.0:5001/api/v1/places_search',
  type: 'POST',
  content-Type: 'application/json',
  data: JSON.stringify(data),
  dataType: 'json', 
  success: function (data) {
     $('.places').empty();
        for (let i = 0; i < data.length; i++) {
          const place = data[i];
          $('.places').append(
        return `<article>
        <div class="title_box">
          <h2>${place.name}</h2>
          <div class="price_by_night">${place.price_by_night }</div>
        </div>
        <div class="information">
          <div class="max_guest">${place.max_guest} Guests</div>
              <div class="number_rooms">${place.number_rooms} Bedrooms </div>
              <div class="number_bathrooms">${place.number_bathrooms} Bathrooms </div>
        </div>
            <div class="description">
          ${place.description}
            </div>
      </article>`;

    }));
}
});
loadPlaces(); // load the page for the first time

  $('button[type="button"]').click(function () {
    const search = Object.keys(amenities);

    if (search.length !== 0) {
      const data = { amenities: search };
      loadPlaces(data);
    }
  });
});
