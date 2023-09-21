# Frontend Mentor - Easybank landing page solution

This is a solution to the [Easybank landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshots/Screenshot%20(3).png)
![](./screenshots/Screenshot%20(1).png)
![](./screenshots/Screenshot%20(2).png)
![](./screenshots/Screenshot%20(4).png)
![](./screenshots/Screenshot%20(5).png)
![](./screenshots/Screenshot%20(6).png)
![](./screenshots/Screenshot%20(7).png)
![](./screenshots/Screenshot%20(8).png)
![](./screenshots/Screenshot%20(9).png)
![](./screenshots/Screenshot%20(10).png)
![](./screenshots/Screenshot%20(11).png)
![](./screenshots/Screenshot%20(12).png)
![](./screenshots/Screenshot%20(13).png)
![](./screenshots/Screenshot%20(14).png)
![](./screenshots/Screenshot%20(15).png)
![](./screenshots/Screenshot%20(16).png)
![](./screenshots/Screenshot%20(17).png)
![](./screenshots/Screenshot%20(18).png)
![](./screenshots/Screenshot%20(19).png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://aik-202.github.io/aik-easybank-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- Mobile-first workflow
- [jquery](https:jquery.com/) - JS library


### What I learned

I learnt how to create a custom preloader, and build webpages with jQuery.

To see how you can add code snippets, see below:

```jQuery (custom preloader)
$("body").css("overflow-y", "hidden");

setInterval(() => {
    $("#bubble").children().first().css({"background": "linear-gradient(to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%))", "transform": "translateY(-5px)"});
    window.setTimeout( () => {
        $("#bubble").children().first().css({"background": "hsl(233, 8%, 62%)", "transform": "translateY(0)"});
        $("#bubble").children().first().next().css({"background": "linear-gradient(to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%))", "transform": "translateY(-5px)"});
    }, 500)
    window.setTimeout( () => {
        $("#bubble").children().first().next().css({"background": "hsl(233, 8%, 62%)", "transform": "translateY(0)"});
        $("#bubble").children().last().css({"background": "linear-gradient(to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%))", "transform": "translateY(-5px)"});
    }, 1000)
    window.setTimeout( () => {
        $("#bubble").children().last().css({"background": "hsl(233, 8%, 62%)", "transform": "translateY(0)"});
    }, 1500)
}, 2000)


function preloader () {
    $("#preloader").css("display","none");
    $("body").css("overflow-y", "scroll");
}
```


### Continued development

I'd love to continue the mobile-first approach to building webpages, it is faster and pages built with this approach tends to adjust faster to the change in screen size and also loads faster on mobile. 


### Useful resources

- [Example resource 1](https://www.w3schools.com/jquery/jquery_ref_traversing.asp) - This helped me to correctly traverse through HTML elements using jQuery.


## Author

- Github - [@Aik-202](https://github.com/Aik-202/interactive-card-detail-form.git)
- Frontend Mentor - [@Aik-202](https://www.frontendmentor.io/profile/Aik-202)
- Twitter - [@chiomaikogwe](https://www.twitter.com/chiomaikogwe)
