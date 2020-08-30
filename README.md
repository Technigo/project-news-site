# News Site

The brief was to create a news site/magazine and I choosed to create a magazine for "Swecation" - destinations in Sweden suitable for vacation. The structure of the site is divided in North - East - South - West. This is the west coast edition. 

## The problem

I had a problem with the logo and heading in the header, wanting them to be in a row with the logo to the left and the heading in the center of the header. I solved it with making a div for the heading and turned the width of the header to 100%, the heading-div to 60% and the logo-container to 20%. 

I also had problem with the big articles, where the article to the right jumped down and got more padding + margin on the top of it when scaling. I'm not 100% sure but I think I solved it with setting the width of the container to 80% and each article to a width of 45%. I also changed to "flex-direction: column" in the ".news-class" and "flex-start" in the ".news-container".

If I had more time I would have:
– Filled the site with more content.
– Made each card clickable, not only the text. 
– Tried to scale the site better for each device. Now the cards scales between 2-5 text rows, depending on the device you use, which effect the images that jumps up and change the alignment of the cards as a consequence. Ther
for I would have presented the cards one by one when using an iPhone 5 for example. 
– Fixed that the navbar is in a row when it suites the size of the device – and switch to column with 2 links in each column, when it doesn't fit with row due to device.
– Switching place of the logo into the footer in tablet and mobile.

## Link to my project
https://gracious-allen-2207b3.netlify.app/
