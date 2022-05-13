---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}

type: "album"
coverImg: "img/album_covers/{{ replace .Name "-" " " | title }}.jpg"
menu:
  main:
    parent: "gallery"
---

