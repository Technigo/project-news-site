# News Site

I create a classic magazine about "Nature". The site has a name, a logo and navbar. Added some news about the nature in the contents of the body.

## The problem

1. Links:
. I had problem with my "navbar links" which had opened in the same page I already was inside, so I searched in some other pages and got to know that I need to add  "target="_blank" in HTML and in front of the link codes so the links could open in a new window.
. I did not want to have a underline for the links so I have found out that I can add "text-decoration: none;" for the links in CSS.

2. Logo
. I had to have my logo responsive in the tablet version and I wandted to put it between my navbar. The only technique I found, was to add a "logo-hidden" in HTML and with "display:none;" in CSS. In media query I had to make the "logo-hidden" visible so I added "none" to the display of the logo itself.

3. responsive design
. I struggled a lot with my responsive pages in media query. The major problem was to have everything in the center of the page since the "Justify-content:center;" did not work in my Body in CSS. On the internet I found that I can have  "Body" in media query with "display:inline-block" and managed to fix it but I still have problem with the left gap for the CSS grid boxes. It would not change and I cannot find which code override my codes in CSS grid for media query.

. The navbar in media query for mobile version did not work and the position was not right. I could not find the answer on internet and even in stack overflow. At the end I just deleted the codes for navbar and added "justify-content: space-between;" instead and then it worked perfectly in the mobile version and even the gaps have been fixed.

4. big image

The big image resized/minimized/vanished when I changed the size of the page for tablet or mobile. I read that I can add these codes to my big image in CSS: 
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: bottom;

## View it live
Every project should be deployed somewhere. Be sure to include the link to the deployed project so that the viewer can click around and see what it's all about.
