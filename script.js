const imageContainer = document.querySelector('.image-container');
const image = document.querySelector('#image');
const logoPic = document.getElementById('LogoPic');
const myPics = ['lenape.jpg', 'dallas.jpg', 'elsegundo.jpg', 'naperville.jpg', 'mountainview.jpg'];
let picNumber = 1;

function changeImage() {
    pic.src = MyPicSrc;
    picNumber = (picNumber + 1) % myPics.length;
    const newImageSrc = myPics[picNumber];


}

