# OLIVE
***
- OLIVE is an app that presents shades of the color olive.
- OLIVE can store users and thier preferences (thier shade of olive).
- OLIVE has two modes, one that toggles the shades of OLIVE and sets it as the users color, and the other presents the users color.

##Dependencies
***
- express
- jade
- less
- socket.io

##Future
***
Users:
- Can view others users OLIVE colors.
- Can use other users OLIVE colors. 
  
  
PIMENTO:
- User can toggle a pimento onto thier page.


Text:
- can use shade of OLIVE?
  
## Try it out
***
Test it out at: http://olive.koteako.com/


## Deployment
***
To deploy be sure to modify the following lines to your enviroment
1. modify app.js
    app.listen(3838);
2. modify /views/layout.jade
    var socket = io.connect('http://olive.koteako.com');
3. modify /public/javascripts/sliderstuffs.js
    var socket = io.connect('http://olive.koteako.com');

### Contact
Contact me at blakmatrix@gmail.com for any questions or tips!