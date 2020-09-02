NASA Photography

https://onerivas.github.io/NASA-app/

Technologies used

NASA Photography was created using HTML, CSS, JavaScript, jQuery, and AJAX.

Approach Taken

The APOD api only takes requests for a specific date. So I'm using a for loop that creates a different request for each day of the month. The for loop has the api request with variables to set the year, and month, the date is just the i variable from the loop. With the data received I have a conditional statement that will use jquery to only create new divs for photos and not for videos. Data for the url of the photo and a title text are added to the new divs and then they are appended to a main gallery div. Everything else is coded into the html. The previous and next buttons have functions to adjust the month digit to either add 1 or subtract 1. They also both empty out the gallery so it's only that month's photos. The photo divs themselves each have an event listener and are used to open the modal when clicked. The function that opens the modal also takes the url from the div that is clicked, stores it in a variable, and then sets that variable as the modal's new background. The modal only has a closed button that goes back to the gallery. I have an animation that runs on the initial load to fade in everything on the page. This only works on the initial load and not when you're going through the months. The style is very simple. I wanted the images to be the main focus so I made the buttons all symbols instead of words and removed any border around them.

Unsolved Problems

The biggest issue I have right now is that the year doesn't change. So you can only go back a few months and then the app breaks. Another issue is that the gallery can be empty on initial load if it's the first of the month and what they post is a video which is what is happening today(Sep. 1st). The gallery looks best towards the end of the month when all the posts are up. Something that probably won't work long term is how I'm requesting the data. The app sends out 31 requests every time it loads a page. The api itself has a request limit of 1000 in an hour which I exceeded a few times. Luckily, it only blocks you for an hour. I emailed NASA about that limit but have yet to hear back from them. I'm hoping to learn of a more efficient way to send those requests.
