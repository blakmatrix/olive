@title = 'OLIVE Color Picker'


div class:'color_picker', ->
  div class:'page-header', ->
    h1 @title

  p -> 'Use the Olive Color Picker Tool to pick your shade of olive'
  br ->
  div id:'colorpickerContainer', ->
    div id:'colorpickerHolder', ->
    div id:'colorpickerPreview', ->

  br ->
  input id: 'submit_color',  value: 'Change Site Color',           type: 'submit', class:'btn primary'
  input id: 'set_fav_color', value: 'Set as Favorite Olive Color', type: 'submit', class:'btn'
