---
layout: page
title: Events
permalink: /events/
---
### Upcoming Events
<br/>
{%- assign sorted = (site.events | where_exp: "item", "item.date >= site.time" -%}
{%- for event in sorted -%}
   [**{{event.title}}**]({{event.url}})
  {{event.content}}
{%- endfor -%}

<br/>
<hr/>
<br/>
### Past Events
<br/>
{%- assign sorted = (site.events | where_exp: "item", "item.date < site.time" -%}
{%- for event in sorted -%}
  [**{{event.title}}**]({{event.url}})
  {{event.content}}
{%- endfor -%}
