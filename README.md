# News Site

**Mission:** 
- *Create a newspaper-like website using flexbox and CSS Grid*
- *Make the website responsive*
  - *Mobile: 1 column*
  - *Tablet: 2 columns*
  - *Desktop: 3 columns*
- *Contains: Header, Main News, Grid of Articles and Footer*

***

## Workflow

### Design 1
I began by designing the layout using pen and paper. Sketching out the various block components so I had a clear picture of how to structure the site.

### Design 2
I continued with the design by using Figma: https://www.figma.com/file/F3qoP6npaUbCo0zVhQyldI/news-project

### Making the skeleton
I then continued with making the base skeleton of the website using my figma design as guide. Once that was done I moved on to design and plan the content of each block component. 

### Filling the page with content
After looking around the web for a bit and finding the style I wanted (including choosing fonts), I began adding content and style for each component of the layout. I went from top to bottom of the page, making sure that everything I added looked good in all screen sizes. 

### Re-Design
During the previous step I came upon a roadblock where I had gone in over my head trying to make a mosiac-like display of articles instead of just aligning them in simple columns and rows. Because of time constraints and feeling a bit overwhelmed I decided to redesign the main news section and just display the articles in columns. 

### Making the random getImage()
I knew I wanted to make sure that no matter what images where displayed on the page they always looked good and form-fitted. Because in a real-life situation the developer rarely chooses the images and needs to make a dynamic website for any image input.
<br>
<br>
To simulate this scenario I found an API called https://source.unsplash.com/
<br>
I then made a function that ran on each *pageload* to get random images and set them for each **.article-image** element.

```js
const getImages = () => {
    let imageElements = document.getElementsByClassName("article-image");
    for (let i = 0; i < imageElements.length; i++) {
        const el = imageElements[i];
        el.style.backgroundImage = `url(https://source.unsplash.com/collection/3150958/?${i})`;
    }
};
```
Once I had the image in place as a css attribute **backgroundImage**, I was able to make sure they all looked good and fitted using these stylings:
```css
.article-image {
  background-size: cover;
  background-position: center;
  height: 100%;
  display: block;
}
```

> 💡 Try and reload the page to get new images!

<br>

### Tidying up!
The final step was tidy up the code with some comments and removing any duplicate declartions. Also I decided to divide up my css files into seperate files making it easier and more clear to edit the webpage if needed. 

***

## Reflections
All in all this project went 90% according to my plans. I did expect I would need some re-design but not on the scale I had to do in regards to switching from mosiac-like displays to simple columns and rows.
<br>
<br>
If I were to continue on this project / start over I would:
- Work on implementing the mosiac-like deisgn I had from the start. 
- Make the article implementation a bit more dynamic. (as of the now only the pictures can be changed with no issues)
- Add some more hover effects and other style implements.

<br>

***

## View it live
http://rivlingnews.netlify.app

