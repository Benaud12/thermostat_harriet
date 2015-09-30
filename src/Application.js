$( document ).ready (function() {

  $('#temp').text(thermostat.temperature);

  $('#upTemp').click(function() {
    thermostat.upTemp();
    $('#temp').text(thermostat.temperature);
    $('#temp').css("color", thermostat.setColour);

  });

  $('#downTemp').click(function() {
    thermostat.downTemp();
    $('#temp').text(thermostat.temperature);
  });

  $('#changePowerSaving').click(function() {
    thermostat.changePowerSaving();
    $('#temp').text(thermostat.temperature);
  });

  $('#reset').click(function() {
    thermostat.reset();
    $('#temp').text(thermostat.temperature);
  });

});
