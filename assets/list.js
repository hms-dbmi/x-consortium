function asDate(el) {
  return new Date(el.split(' ')[0] +  ' ' + el.split(' ')[1])
}
var now = new Date();
// This is the home page.
$('#home-events [data-date]').filter(function(){
  return (asDate($(this).data('date')) < now);
}).remove()
$('#home-events [data-date]').slice(1).remove()
// This is the events page.
$('#upcoming [data-date]').filter(function(){
    return (asDate($(this).data('date')) < now);
  }).remove();
$('#past [data-date]').filter(function(){
    return (asDate($(this).data('date')) >= now);
  }).remove();
$('#past').children().each((e,i) => $('#past').prepend(i))
