# News Site

The project was to design a news website using the flexbox method. We were
asked to make the page responsive, so that its layout would reconfigure itself
depending on the browser size, e.g. mobile, tablet, desktop.


## The problem

I designed everything mobile-first, and then used media querries to alter the things
which I knew would be different in larger browser sizes. It was important to know in advance exactly which elements would change between views and how they would look different. I found it necessary to do the media querries as I went along, otherwise all the html elements would confuse each other, as some needed there display set to 'none' or they would push other elements out of place. Perhaps it would have been better to just add the html elements used in mobile-view first and when that was finished add the tablet/desktop elements. 

Switching the flex direction between 'row' and 'column' was a simple way to restyle the main look of the page depending on the browser-size. Setting 'max-widths' to certain elements also helped to keep the look of the page clean no matter how stretched or compressed it was. 

If I had more time I would like to have added a sidebar to the main body of the page, hidden in mobile view. Its flex-container would have been a column, set in the broader 'row' flex-container of the whole main-news page. I also realized that there is no 'hover' function on real mobiles so I had to make a quick fix for my grid-news items and change the opacity of text. I am not entirely happy with how this looks and would change if I had more time. 



## View it live
https://goofy-dijkstra-2fa48a.netlify.com/
