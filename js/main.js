// JavaScript Document
/* sidebar */
$(document)
    .ready(function () {

        $('.ui.sidebar')
            .sidebar('attach events', '.launch.button', 'slide out');
    });
/* review google */
jQuery(document).ready(function( $ ) {
   $("#google-reviews").googlePlaces({
        placeId: 'ChIJ-4AXfdwUAHwRqESxGhdknak' //Find placeID @: https://developers.google.com/places/place-id
      , render: ['reviews']
      , min_rating: 5
      , max_rows: 5
   });
});
/* services popup */
$(function () {
    $("#emphasize").click(function () {
        $(".emphasize").modal('show');
    });
    $(".emphasize").modal({
        closable: true
    });
});

$(function () {
    $("#volumize").click(function () {
        $(".volumize").modal('show');
    });
    $(".volumize").modal({
        closable: true
    });
});

$(function () {
    $("#customize").click(function () {
        $(".customize").modal('show');
    });
    $(".customize").modal({
        closable: true
    });
});

/* photos dropdown menu */
$('#search-select-mobile')
    .dropdown();
$('#search-select-computer')
    .dropdown();

/* contact pop-up */
$(function () {
    $("#map").click(function () {
        $(".map").modal('show');
    });
    $(".map").modal({
        closable: true
    });
});
$(function () {
    $("#email").click(function () {
        $(".email").modal('show');
    });
    $(".email").modal({
        closable: true
    });
});

/* contact message form*/
$('.ui.form.message')
    .form({
        name: {
            identifier: 'first-name',
            rules: [{
                type: 'empty',
                prompt: 'Please enter your first name'
            }]
        },
        name: {
            identifier: 'last-name',
            rules: [{
                type: 'empty',
                prompt: 'Please enter your last name'
            }]
        },
        email: {
            identifier: 'email-address',
            rules: [{
                type: 'empty',
                prompt: 'Please enter your email address'
            }]
        },
        message: {
            identifier: 'message',
            rules: [{
                type: 'empty',
                prompt: 'Please enter a message'
            }]
        }
    });