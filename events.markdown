---
layout: page
title: Events
---
<div id="event-lists">
<h3>Upcoming Events</h3>
<ul id='upcoming'>
{%- for event in site.events -%}
<li class="event-link" data-date="{{ event.date }}">
<a  href="{{ event.url | relative_url }}" >{{event.title}}</a>
<br/>
{{event.summary}}
<br/>
<br/>
</li>                                   
{%- endfor -%}
</ul>
<h3>Past Events</h3>
<ul id='past'>
{%- for event in site.events -%}
<li class="event-link" data-date="{{ event.date }}">
<a  href="{{ event.url | relative_url }}" >{{event.title}}</a>
<br/>
{{event.summary}}
<br/>
<br/>
</li>                                   
{%- endfor -%}
</ul>
</div>
