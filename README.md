# News Site

This project is a news site, for news about vegetarian food.

## The problem

I started this project by making the basic layout with placeholder images and text. Then I worked my way through the different sections adding a more detailed layout within each section. Next came fonts and colors and then I started to put more elements in, which I did not think of in the beginning. In the end I had to make a lot of ajustments to the margins and paddings.

I've learned why it is good to know the layout from the beginning, because it was much harder to fit a new element into the layout when it was already done, than to put new elements into existing containers for that element.

I had troubles getting the responsive feature to work, so I added different background colors for mobile, tablet and desktop. Then I saw that I had misplaced a curly bracket and that's why it didn't work to put it in desktop mode.

It was also hard to get the layout to work as I wanted it to, both for the header and the main news section. I had to try both flexbox and grid to see the different results and then go for the one closest to my intentions (and in the main news sections, the float property gave me what I wanted). I also tried dividing the page into sections in several different ways, to see how it changed the outcome.

I realised that a lot of my styling was the same for tablet and desktop version. Instead of repeating myself in two different media queries I decided to make one media query for everything bigger than a mobile. Then I have two smaller media queries with the css that is unique for tablet or desktop. I also made one for small mobile phones since the layout looked ugly on my own phone otherwise.

I wish I knew how to collapse the nav bar into an accordian, because that would make it even prettier, but when I started to read up on how to do it, I realised that it would take to much time for me to learn now. Instead I made a grid for it to fit on mobile screens, which I think is an okay solution.

If I had more time I would also make sure the buttons in the small news were aligned.

## View it live

Here is my site: https://warm-panda-028459.netlify.app/
