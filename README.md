# News Site

The assignment is to practise flexbox and css grid by making a responsive layout for an imaginary news paper or maqazine. 

Being a graphic designer i wanted to steer clear of spending too much time on exploring the aesthetic side of this, (after all it's about coding and not design :) so i "borrowed" the structure of the header and grid from The New York Times website (https://www.nytimes.com/). I started by making a design sketch in figma (https://www.figma.com/file/F7KYa77k403VSV6N5R4r6f/The-Technigo-Times?node-id=0%3A1) where i decided on the basic layout of the page in different breakpoints. 

I developed with mobile first (to the best of my understanding of what that actually means) and started with the header layout, the first real obstacle was having the hamburger menu change positions between mobile and tablet. I solved it by having the menu appear on both the right and the left side of the header, and then hiding one and showing the other.

Once the grid was working ok i started filling the boxes with content. I had some trouble getting images to display properly, i wanted a solution where the page grid would "decide" how much space images get, both in height and width, and the image itself is always filling up all its space without being distorted and without any of the container background visible. I managed to solve it like so: https://stackoverflow.com/c/technigo/a/1934/168

If i'd had more time i would have......

The site can be viewed here:
https://lucid-knuth-f8734c.netlify.app/

## In case you are looking at my code - here are some things I am wondering:
- how could i have structured the css to make it more easily maintainable? is it quite scattered?
- flex "gap" is only at some 60% on caniuse.com - is it acceptable to use it?
- 


## To do
- <!-- put top logo in proper flex div -->
- <!-- add top menu -->
- <!-- "small news" align to grid -->
- <!-- "podcasts" add content
- <!-- - "full length news" add content --> -->
- <!-- smaller text in "optional" div -->
- <!-- - spacing and image size in mobile -->
<!-- - add css grid section -->
- expanding hamburger menu
- "full length news" side scroll
- footer
- overflow ellipsis
<!-- - reorganize css - text
- reorganize css - functional classes -->
- image credits inside image as nyt
<!-- - other animation? -->