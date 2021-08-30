# News Site

Small project, with powerful tools. Learning CSS Grid and Flexbox wasn't easy. Took quite a bit of processing to wrap my head around its logic, but it slowly but surely started to make sense.

Assignment was to create a 'news site' where the articles would adapt to the user's screen size (resolution).

## The problem

I started off with creating the basic layout or structure of the website using HTML. Starting from the header, going through the main and onto the footer. Tried to use semantic descriptions, but could probably be improved further. 

It took me a while to grasp how grids wanted to be manipulated. There are a lot of ways to do them, so it took a bit of trial and error along with plenty of searching and reading to figure out how to best approach the situation I was in. On the big screen we'd like to see a bigger main article take up most of the space, with smaller articles beside and below it. While on smaller screens the real-estate needs to be utilized a bit better, limiting the allowed space for the main article to be closer to the smaller ones.

The manu was also a bit of a pickle, as I started off using grids. Bit due to media queries it never really worked my way, it got a bit too complicated. I started to look into Flexbox which is a bit simpler. Give me a row and wrap it if the screen shrinks. Good enough.

The articles themselves was created using the figure and figcaption elements, which I am very thankful to have discovered. I first tried to manipulate different <div>s through z-index and what-not to layer image, headline, paragraph and a link. It was messy, and this solution is more elegant in my opinion.
  
Sadly, I had a rough week (though fun, as my wife turned 30!) - but that also left me with very little time. Effectively no more than 8 hours was spent on this, which made the result short of what I would've liked to have seen. For example the small menu should've been a drop-down considering its relative size on a small screen. I have found a solution to this, but I need a bit more time to implement it. Perhaps in a post-'hand in' commit. The look & feel is a bit rough as well; colours was just picked without any thought, and elements such as the article cards styled a bit nicer. Same with fonts, sizes and styles. The smaller details. I love that stuff, though, so don't fault me for wanting to spend a lot of time on vanity properties. :)

## View it live
https://optimistic-bohr-c8ad3d.netlify.app/
