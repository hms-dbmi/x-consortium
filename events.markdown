---
layout: page
title: Events
permalink: /events/
---
### Past Events
<br/>
{%- for event in site.past_events -%}
  [**{{event.title}}**]({{event.url}})
  {{event.content}}
{%- endfor -%}
<br/>
<hr/>
<br/>
### Upcoming Events
<br/>
{%- for event in site.upcoming_events -%}
   [**{{event.title}}**]({{event.url}})
  {{event.content}}
{%- endfor -%}
