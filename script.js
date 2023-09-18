const imageContainer = document.querySelector('.image-container');
const image = document.querySelector('#image');
const logoPic = document.getElementById('LogoPic');
const myPics = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
let picNumber = 1;

function changePic() {
    pic.src = MyPicSrc;
    picNumber = (picNumber + 1) % myPics.length;
    const MyPicSrc = myPics[picNumber];
}
imageContainer.addEventListener('click', changePic);
