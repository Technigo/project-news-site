# Project News S

This project is done as a part of Technigo bootcamp. The focus for this project was to create a magazine website with a responsive design and a flexbox layout.

## The problem

My starting point in this project was mobile first and then to add two media queries for tablet and desktop view.
 
I struggled with the concept of nested elements in flexbox and to find a way to both stretch and center the content without having unwanted margins. My solution was to give the body and the header container a width of 100% and for the card-container I used the stretch value for the align-items property.
I used percentage instead of pixels for most of my elements to make sure that they would size-up and be compatible with the different break points in the media quaries. I did have a difficult time finding a way to have the same size on all card images but solved it by setting a height and adding object-fit: cover to the image element.

I used dev-tools a lot to keep the design inline with what I wanted for the different breakpoints in the media queries. I frequently visited stack overflow to get answers to my questions.

If I had more time I would have  
- made the cards have the exact same height regardless of the amount of text in the card.
- structured the code in the html file differently. I would have made a sketch on the basic html structure, at least for the mobile version and plan for a more clean and readable structure. For example: I would have structured every card in a separate div insted of having the whole card as a link.
- worked with the order property to structure the nav.
- Explored css transitions and applied some other effects to the cards.
- Explore css grid to do the same (or even better?) design.


## View it live
https://sleepy-kilby-db6e45.netlify.app/
