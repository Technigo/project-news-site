# News Site

Replace this readme with your own information about your project. 
Start by briefly describing the assignment in a sentence or two. Keep it short and to the point.

A news site about animals for my second project for Technigo Bootcamp 2022. 
It is responsive to diffrent screens. I think I managed to make it responsive to firefox as well, but unfortunately not to safari. 

## The problem

Describe how you approached to problem, and what tools and techniques you used to solve it. How did you plan? What technologies did you use? If you had more time, what would be next?

The issue I had the most problem with was that everything looked fine in chrome where I was working, but when I opened it up in safari or firefow the text on the cards where streching on the whole page and not just the specifik card. After a while I was able to fix it in firefow with  @-moz-document url-prefix() and changed the width on the text. I tried fixing in with positions, paddings, width, flexbox, grid, but nothing worked the way I wanted it to. After hours and hours on trying to fix in in other ways I desided to just keep the text on the card very short so it could'nt strech out on the whole page. So I commented the  @-moz-document url-prefix() out becuse it wasn't needed anymore, but I'll keep it in the code in case I want to use it later on. 

The problems that still stands are that my nav bar in mobile landscape dosn't work on my actuall phone. The card text on my phone is also not aligned, but it looks perfect on the computure, even in mobile format. I could fix it with margin-left but then it looks wierd on the computure so I'm letting it be for now. I have also asked help for this in StackOverflow but nothing has helped yet. 

## View it live
Every project should be deployed somewhere. Be sure to include the link to the deployed project so that the viewer can click around and see what it's all about.
https://project-news-site-linneafrisk.netlify.app/
