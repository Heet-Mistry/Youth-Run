//slideshow
const mainPhoto = document.querySelector(".image-holder");
const slides = [
    {
        image: '/youthrun/img1.JPG'
    },
    {
        image: '/youthrun/img2.jpg'
    },
    {
        image: '/youthrun/img3.jpg'
    },
    {
        image: '/youthrun/img4.jpg'
    },
    {
        image: '/youthrun/img5.jpg'
    }
];

let i = 1;
function show()
{
    var path = document.location.pathname;
    var directory = path.substring(path.indexOf('/'), path.lastIndexOf('/'));
    const str = directory+slides[i].image
    mainPhoto.style.background = `url(${str})`;
    mainPhoto.style.backgroundSize = "cover";
    mainPhoto.style.backgroundRepeat = "no-repeat";
    mainPhoto.style.borderRadius = '1rem';
    mainPhoto.style.transition = 'ease-in 0.5s';
    i = (i+1)%slides.length
}
show();
setInterval(show, 4000);
