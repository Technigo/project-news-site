# The Hikealot Magazine - Building a News Site

The purpose of this project was to design a simple news website on a self-chosen topic, in this case outdoor life. The main objective was to train responsiveness using the flexbox-model in css. This is one of the first websites I created during the Technigo Bootcamp in fall 2020, on my way to become a frontend developer.

## The requirements - What you'll find in the code

Following the requirements of the project, I built a news site with a header containing a logo and nav-bar. Below, you find a big news-section with the latest / most important article and further down a list of smaller articles. In mobile view these will be displayed as one column, in tablet view there will be two columns and in desktop view there will be four columns. I achieved this by using flexbox and flexwrap, combined with media queries. At the end of the page you find a footer. 

## Bonus effects - The nitty-gritty

The project required to try out hover effects, which I did on the images. They become opaque when you hover them. Also, I included an emoji in the footer that will change appearance when you hover it. I achieved that by using a span element in the html and the :before-attribute in css.

## Browser compatibility

I tried to view the page in Firefox, Chrome and Edge using the dev tools to check the page on different screen sizes. It works on all three of them but in desktop view there are some differences between the appearance in Firefox vs. Chrome and Edge that effect the big news-section in the top of the page. I can't explain this but suspect that it could have to do with lines 98 and 192/193 in the style.css-file, which I commented on in the file. There's also a Stack Overflow-Thread on this: https://stackoverflow.com/c/technigo/questions/1299 Feel free to share your thoughts on this!

## View it live
The project is deployed on Netlify and you can view it here: https://hikealot.netlify.app/ 
