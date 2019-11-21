---
layout: page
title: Events
---
<div id="event-list">
<br/>
{%- for event in site.events -%}
<div class="event-link" date="{{ event.date }}">
<a  href="{{ event.url | relative_url }}" >{{event.title}}</a>
<br/>
{{event.summary}}
<br/>
<br/>
</div>                                   
{%- endfor -%}
</div>
