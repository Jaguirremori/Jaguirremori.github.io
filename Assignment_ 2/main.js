const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
const images = ["images/pic1.png", "images/pic2.jfif", "images/pic3.jpg", "images/pic4.jpg", "images/pic5.jpg"];

images.forEach(image => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', image);
    newImage.onclick = () =>{
        displayedImage.setAttribute('src', image);
    }
    thumbBar.appendChild(newImage);
})


/* Wiring up the Darken/Lighten button */
