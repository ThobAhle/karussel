// Din cool code here

console.log('hello world');

// array til billeder
let imageArray = ['assets/img/elephant.jpg', 'assets/img/great-white.jpg', 'assets/img/koala.jpg', 'assets/img/smithi.jpg', 'assets/img/tiger.jpg']

let currentImage = 0

console.log(imageArray.length)

// galleri billede fra dom
let myGalleriImageElement = document.getElementById('galleryImage')



// fremad knap fra dom
let myForwardButton = document.getElementById('forward')

myForwardButton.addEventListener('click', (event) => {

    currentImage = currentImage + 1

    if ( currentImage == imageArray.length) {
        currentImage = 0
   }
    changeImage()
})


// bagud knap fra dom
let myBackButton = document.getElementById('back')

myBackButton.addEventListener('click', (event) => {

    currentImage = currentImage - 1


    if ( currentImage == -1 ) {
        currentImage = 4
   }
    changeImage()
})


function changeImage() {
  console.log(imageArray)
    myGalleriImageElement.src = imageArray[currentImage]

}