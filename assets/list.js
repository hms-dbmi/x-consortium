var now = new Date();
// Filter to get upcoming list.
var eventLists = document.getElementById('event-lists');
var homeEvents = document.getElementById('home-events');
// This is the home page.
if (homeEvents != undefined) {
    $('#home-events [data-date]').filter(function(){
      return (new Date($(this).data('date').split(' ')[0] +  ' ' + $(this).data('date').split(' ')[1]) < now);
    }).remove()
    $('#home-events [data-date]').slice(1).remove()
}
// This is the events page.
else if(eventLists != undefined){
  $('#upcoming [data-date]').filter(function(){
      return (new Date($(this).data('date').split(' ')[0] + ' ' + $(this).data('date').split(' ')[1]) < now);
    }).remove();
  $('#past [data-date]').filter(function(){
      return (new Date($(this).data('date').split(' ')[0] + ' ' + $(this).data('date').split(' ')[1]) >= now);
    }).remove();
  $('#past').children().each((e,i) => $('#past').prepend(i))
}
