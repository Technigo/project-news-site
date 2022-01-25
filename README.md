# News Site

News site with one big story and smaller news articles below. Number and size of articles changes responsively when resized.
Neat little animation on the covid virus logo.

## The problem

If I had more time I would spend it on better responsiveness. At the moment the number of 'news cards' change but not in the exact pattern as in the task brief. I don't have 4 cards from 1024px and up because according to me they got too small. However, I think there might be some way to achieve that without compromising on the size of the cards.

I had many small problems, one of which was that the aforementioned logo only had a hovering animation after the window had been resized. Since I didn't know how to fix that problem, I cheated and added another eventlistener to adjust position when the window was opened, as well as keep the first listener for resizing.

Other that the hovering effect, the most problem I had was with sizing objects and all the elementes inside their container element. The pictures posed the most problems. I solved it by setting max-widths on almost all my objects.

## View it live

https://61eac11c55fd2cfd014806fd--goofy-lovelace-f2e62b.netlify.app/#
