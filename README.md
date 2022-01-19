# News Site

The brief was to create a responsive website with 3 breakpoints for desktop, tablet, and mobile, with a large article at the top, and 4, 2, or 1 columns of articles depending on breakpoint. There were additional challenges to include animation or other effects.

## The problem

I approached it desktop-first, even though the guidelines stated a mobile-first approach would be easier. This was because I already had a vision in mind for the desktop version, and wanted to see if I was able to work the other way down. I used a combination of flex (for the navbar), and grid (for the layout of the articles), as well as a nested flex inside a grid for the head article. I planned by sketching a wireframe first, and looking at color palettes. I wanted the article content to be revealed using a :hover effect. It took some trial and error, but I achieved a result I'm satisfied with. I began working on a second website, where I wanted to go from mobile -> desktop. Halfway through, I decided to drop the project and instead review my code for my existing project, by fine-tuning some design as well as trying to refactor and simplify my code and make it more DRY. If I had more time, I would have liked to learn some JavaScript to implement a tap instead of hover for revealing the articles, since :hover doesn't work well on mobile. I discovered that the hard way while testing after building the majority of my site - instead of tapping, you have to tap-hold to reveal the content, and it remains "stuck" open until you tap-hold another article.

## View it live
Every project should be deployed somewhere. Be sure to include the link to the deployed project so that the viewer can click around and see what it's all about.
