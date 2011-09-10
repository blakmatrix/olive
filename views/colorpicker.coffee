@title = 'OLIVE Color Picker'


div class:'color_picker', ->
  div class:'page-header', ->
    h1 -> "#{@title} <small>Pick your favorite olive color</small>"

  p -> 'Use the Olive Color Picker Tool to pick your shade of olive'
  br ->
  div id:'colorpickerContainer', ->
    div id:'colorpickerHolder', ->
    div id:'colorpickerPreview', ->
      div class:'topbar', id: 'divbar', ->
        div class: 'divbar-inner', ->
          div id:'containerBarPreview', class: 'container',  ->
            h3 -> a href:'#',  -> 'OLIVE'
            ul class: 'nav', ->
              li id:'liActivePrieview',class:'active',  -> a  href:'#', -> 'Home'
              li -> a id:'colorpicker', href:'#', -> 'Color Picker'
      div id:'containerBodyPreview', ->
        h4 id:'hPreview', -> 'Header <small id="smallPreview">Sub-header</small>'
        p id:'pPreview', -> 'Paragraph text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan dictum erat, non ullamcorper tellus elementum et.'
        a id:'linkPreview', href:'#', -> 'Link'
        input style:'float:right;', id: 'btnPreview',  value: 'button', type: 'submit', class:'btn '
  div style:'clear: both;', ->
  div id:'btnContainer', ->
    input id: 'submit_color',  value: 'Change Site Color', type: 'submit', class:'btn'
