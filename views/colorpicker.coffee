
@title = 'OLIVE Color Picker'


div class:'colorpicker', ->
  h1 @title

  p -> 'Use the Olive Color Picker Tool to pick your shade of olive'
  br ->
  p -> 'Sorry the color picker tool is under maintenence.'
  br ->
  input id: 'submit_color',  value: 'Change Site Color',           type: 'submit'
  input id: 'set_fav_color', value: 'Set as Favorite Olive Color', type: 'submit'