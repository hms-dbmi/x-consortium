function makeUL(array) {
    var list = document.createElement('ul');
    array.forEach(function(elem) {
      var item = document.createElement('li');
      item.appendChild(elem);
      list.appendChild(item);
    })
    return list;
}
// Get list of events.
var eventList = Array.from(document.getElementsByClassName('event-link'));
var now = new Date();
// Filter to get upcoming list.
var upcomingList = eventList.filter((a) => new Date(a.attributes.date.value.split(' ')[0] + ' ' + a.attributes.date.value.split(' ')[1]) >= new Date());
var eventDiv = document.getElementById('event-list');
var upcomingEventDiv = document.getElementById('upcoming-event');
// This is the home page.
if (upcomingEventDiv != undefined) {
  upcomingEventDiv.innerHTML = '';
  upcomingEventDiv.appendChild(upcomingList[0]);
}
// This is the events page.
else if(eventDiv != undefined){
  // Set innerHTML to be empty.
  eventDiv.innerHTML = '';

  // Create upcoming list html and append.
  var upcomingDiv = document.createElement('div');
  upcomingDiv.id = 'upcoming';
  upcomingDiv.appendChild(makeUL(upcomingList));
  var upcomingHeader = document.createElement('H3');
  var text = document.createTextNode("Upcoming Calls");
  upcomingHeader.appendChild(text);
  eventDiv.appendChild(upcomingHeader);
  eventDiv.appendChild(upcomingDiv);

  // Filter to get past list.
  var pastList = eventList.filter((a) => new Date(a.attributes.date.value.split(' ')[0] + ' ' + a.attributes.date.value.split(' ')[1]) < new Date()).reverse();
  // Create past list html and append.
  var pastDiv = document.createElement('div');
  pastDiv.id = 'past';
  pastDiv.appendChild(makeUL(pastList));
  var pastHeader = document.createElement('H3');
  text = document.createTextNode("Past Calls");
  pastHeader.appendChild(text);
  eventDiv.appendChild(pastHeader);
  eventDiv.appendChild(pastDiv);
}
