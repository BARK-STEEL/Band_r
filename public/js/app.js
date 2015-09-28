console.log('...loaded');

var app = app || {};

app.fans = new app.FanCollection();
app.fanPainter = new app.FanListView({
  collection: app.fans,
  el: $('#fans-list')
});
app.fans.fetch();

var $emailInput = $('#email');
var $firstName = $('#first_name');
var $lastName = $('#last_name');
$(document).on('keyup', function(){
  var $userInput = $emailInput.val();
  console.log($userInput);
  if ($firstName.val() !== "" && $lastName.val() !== "" && $userInput.indexOf('@') != -1 && $userInput.indexOf('.') != -1){
    $emailInput.css('color', 'green');
    $('#signUpSubmit').css('display', 'inline-block');
  } else {
    $emailInput.css('color', 'red');
    $('#signUpSubmit').css('display', 'none');
  }
});

$('form.create-fan').on('submit', function(e){
  e.preventDefault();
  var data = $(this).serializeJSON();
  app.fans.create(data.fan);
  $('#first_name').val("");
  $('#last_name').val("");
  $('#email').val("");
  $('#signUpSubmit').css('display', 'none');
});
