
@title = 'OLIVE About'


div class:'about', ->
  div class:'page-header', ->
    h1 @title
  h2 "OLIVE was designed by Farrin A. Reid using the folowing tools:"
  ul ->
    li -> h3 ->  a class:'ah3list', href: 'http://nodejs.org/', -> "Node.js"
    li -> h3 ->  a class:'ah3list', href: 'http://expressjs.com/', -> "The Express Framework"
    li -> h3 ->  a class:'ah3list', href: 'http://jashkenas.github.com/coffee-script/', -> "CoffeeScript"
    li -> h3 ->  a class:'ah3list', href: 'http://coffeekup.org/', -> "CoffeeKup"
    li -> h3 ->  a class:'ah3list', href: 'http://socket.io/', -> "Socket.IO"
    li -> h3 ->  a class:'ah3list', href: 'http://lesscss.org/', -> "LESS"
    li -> h3 ->  a class:'ah3list', href: 'http://chakra-project.org/', -> "The Chakra Project OS"