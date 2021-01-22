# News Site

For this project the assignment was to do a news site front  with a header, a main news section, a grid style section for lesser news and a footer. Main requierments: flexbox, responsiveness (desktop, tablet and mobile), hover:effects and styling.


## The problem

The site was first sketched up on paper both for desktop and mobile device. Main features was also written down for a basic plan. 
The header took shape first, just to see the vision come to life in code. In the header there was some playing around with flexbox and styling features and a background-picture were set. To get the header to be able to have a navbar and a logo in different places (navbar on top, logo right corner of the header class) nested flexboxes were used. The navbar was set to fixed to always follow the window while scrolling. An input for search was also added and styled.
(A smaller background-image for the header was added for mobile device, as a unnecessary big one isn't needed and only takes up loading time of the page. )

Three google fonts were added in the CSS file.
After link styling and proper placing of items the next step was the actual content of the page.

The two sections (big news and small news) were divided in to divs/containers and filler images and text ("lorem ipsum") were applied to get a overview of the design. Responsiveness and flexbox-positioning was being implemented until the site behaved as desired on desktop, tablet and mobile devices. 
Images were then inserted. Containers were used to manage postition and scaling of pictures. Links were also styled with some :hover and :active. 

For some extra features animations were applied. A meteor animation was put in the header to go over the space sky. This was done using keyframes, translation, transform and transition. The images in the grid news session also got some interactive features using transform: rotate and preserve 3d, so they spin on hover.

Box-shadow has been used in various ways: as borders that looks a bit "spacey", for the meteor to make it "glow" and for the grid news pictures to make them look more 3d.

The footer was added quite late because the expectations were that it would be an easy element. Using flexbox it was easy to align the technigo logo and a copyright text in the footer class. Though, making it stay on the bottom of the page was more advanced, but got solved making body position:relative with a height of 100vh + padding the same size as the footer and then set the footer class to postition:absolute. This makes the footer place right under its relative-positioned parent without the parent being dependent on the childs postitioning and the padding makes it so that the lower space of the page will be empty of other content except the footer. 

During coding of the page things were constantly tweaked in size, position and more while being viewed in live server - so that the responsiveness would be optimal. 

As there still was time to do more on the site, the flexsystem for the grid news section was replaced with a CSS grid. It was better for this kind of content because it had multiple rows and columns and could easily be specified how the content should be divided in the different breakpoints. 

A scroll to top button was added with a fixed position to the side of the window by putting an id on the html tag and having a link that refers to that tag. 

To advance the mobile device layout the navbar would collapse into a drop-down menu on that view. First of all to get in to a columnar menu the flexbox direction - it was just changed to column. But how to make it actually drop down on click/touch? This took a bit of tinkering as CSS doesn't have any on-click element. Though, this got done using something known as the "checkbox-hack" - meaning an invisible checkbox is set with a label wrapped around the menu-button and when it has the condition :checked the div with the navbar menu will go from hidden to visible. Also added was that the navbar menu would go from 0px in height to 200px with some transition time, which gives a impression of the drop down menu sliding down from top.
The same technique was implemented on the searchbar where the input gets visible first when you click the magnifying glass.

Next the pages of the links in the navbar were built with a very simple layout only using the navbar, footer and a simplified header. 

Some forms were put in to the sign-up and login pages (linked in the navbar). In signup the user has the possibility to add name, e-mail, username and password and then click a submit (sign up) button. In the login there is only username and password. Every element in the form were set to required. Password was set to a min- and max-length.
All the form elements (even placeholders) were styled. These pages are also responsive.

A proper svg logo for the page was done in the program Inkscape, both a normal logo and a minimal logo for mobile devices. The text that had been the logo in the header was swapped out for these, the simplified one only visible during mobile layout. 

Techniques used: Flexbox, CSS Grid, Animations/keyframes (transform/translate/transition), Forms, Placeholders, Breakpoints, Pseudoclasses, Box-shadow, Visibility

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

With more time the page would evolve, maybe more use of CSS grid and more featured link pages. Also, neater and cleaner solutions for different features can always be found given enough time.

Looking back the best thing would be to set up everyting with filler images/text from the beginning and also with header/content/footer already specified (empty). The CSS grid should be used earlier.


## View it live
Every project should be deployed somewhere. Be sure to include the link to the deployed project so that the viewer can click around and see what it's all about.
