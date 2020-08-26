# News Site
The assignment is to create a responsive news site, using flexbox and/or CSS grid.

## The problem
I started by dissecting the task at hand, as well as the given mockup. After this, I created a design using Figma (https://www.figma.com/file/0vPL0xWVvdKj5vorH1dpqj/project-news-site?node-id=0%3A1), in order to make sure that I knew what I wanted for all device sizes, as well as structure the file in a way which I thought made sense.

For the styling party, I initially tried arranging the grid in a flexbox-y way, but struggled (this was before Maks' code session on Wednesday) – after which I found a good CSS grid tutorial by some guy named Travis (https://travishorn.com/responsive-grid-in-2-minutes-with-css-grid-layout-4842a41420fe) which helped me to set that one up. 

Apart from using a combination of CSS grid (small cards section) and flexbox (navigation, the top news item, and layout within the cards), the only nameworthy technology was a Javascript snippet I found called clamps.js, which cropped text longer than X rows; well-versed for the top news body text section.

If I had more time, I would first of all refactor a bunch of code. I didn't plan that well from the start, leading to somewhat of a spaghetti-ish code – especially in the CSS file. I also didn't manage to fix the header navigation the way I wanted (where the links should surround the logo in tablet view) while still keeping the navigation top links in a -nav- element. 

Lastly – being a designer, I focused heavily on the styling part, initially, leading to spending unnecessary time on it in the beginning. Next project, I'll make sure to first create the structure of the page, and then spending time on the content and design.

## View it live
https://real-fake-news.netlify.app/
