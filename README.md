# News Site

This project is a news site, for news about vegetarian food.

## The problem

Describe how you approached to problem, and what tools and techniques you used to solve it. How did you plan? What technologies did you use? If you had more time, what would be next?

I had troubles getting the responsive feature to work, so I added different background colors for mobile, tablet and desktop. Then I saw that I had misplaced a curly bracket and that's why it didn't work to put it in desktop mode.

It was hard to get the layout to work as I wanted it to, both for the header and the main news section. I had to try both flexbox and grid to see the different results and then go for the one closest to my intentions (and in the main news sections, the float property geve me wath I wanted). I also tried dividing the page into sections in several different ways, to see how it changed the outcome.

I realised that a lot of my styling was the same for tablet and desktop version. Instead of repeating myself in two different media queries I decided to make one media query for everything bigger than a mobile. Then I have two smaller media queries with the css that is unique for tablet or desktop.

I wish I knew how to collapse the nav bar into an accordian, but instead I made a grid for it to fit on mobile screens, which I think is an okay solution.

If I had more time I would make sure the buttons in the small news were aligned.

I've learned why it is good to know the lauout from the beginning, because it was much harder to fit a new element into the layout when it was already done, than to first put all the elements in place and then style. Especially with all the margins and ppaddings to ajust.

## View it live

Every project should be deployed somewhere. Be sure to include the link to the deployed project so that the viewer can click around and see what it's all about.
