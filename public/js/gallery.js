// Build the JS required to enable the user to click on a thumbnail image and view the full-sized version inside the <figure> element above.
//get the html elements: displayImg, thumb-bar and displayImageTitle.
let displayImg = document.getElementById("displayImg")
let thumbBar = document.getElementById("thumb-bar")
let displayImgTitle = document.getElementById("displayImgTitle")
//get the image-name's middle string.
let imgName = ["pink","purple","red","white","yellow"]
// Use a JS object apply for each gallery item, to display the images in thumb-bar by iterating each images.
class EachGalleryItem {
    //instance variable including small images' width, height and image name
    width
    height
    imageName
    // instantiate a constructor
    constructor(width,height,imageName) {
        this.width=width
        this.height=height
        this.imageName=imageName
    }
    //function to append small all images
    appendImg() {
        //initialize the value i to iterate the loops.
        let i = 0;
        while (i<imgName.length) {
            //create new img element
            let image = document.createElement('img')
            //create each images' name
            image.setAttribute('src','images/flowers-' + this.imageName[i]+'-small.jpg')
            //set the images height and width.
            image.width = this.width
            image.height = this.height
            //append the images into the thumbar div
            thumbBar.appendChild(image)
            i++;
        }
    }
    //create a function to clear all the image borders.
    clearFeaturesFun () {
        //retrieve all images using the thumbnail.
        let thumbImages = document.querySelectorAll('img')
        let i = 0
        while (i < thumbImages.length) {
            thumbImages[i].style.border = "0"
            i++
        }
        //greyscale all the images
        let j = 1
        while (j< thumbImages.length) {
            thumbImages[j].style.filter = "grayscale(100%)"
            j++
        }
    }
}
//create an object and invoke the functions.
let myImageGallery = new EachGalleryItem(240,160,imgName)
myImageGallery.appendImg()
myImageGallery.clearFeaturesFun()

//add an event listener when clicking any images.
thumbBar.addEventListener("click",(e)=>{
    //if target image clicked we get the target imag id and show the larger images.
    if (!!e.target && e.target.nodeName === 'IMG') {
        //clear all image borders.
        myImageGallery.clearFeaturesFun()
        //grey syle all images.
        // myImageGallery.greyAllImgs()
        //remove the target element's grey-style.
        e.target.style.filter = 'none'
        let imgSrc = e.target.getAttribute('src')
        //make the select img remove grey style.
        //outline the target picture.
        e.target.style.border = '4px solid red'
        //get the large image pics name.
        imgSrc = imgSrc.replace("small","large")
        //invoke the display image function.
        showImgFun(imgSrc)
    }
})
//create a function to display high-resolution images by using the image name, add the displayed image width, height, and borders.
function showImgFun (value) {
    displayImg.setAttribute('src',value)
    displayImg.width="1200"
    displayImg.height="800"
    displayImg.style.border = "3px dashed blue"
    let imgTitle = displayImg.getAttribute('src')
    // Capture some interesting information/captions about each image, and output the text to html by obtaining the substring from the img title.
    imgTitle = imgTitle.replace("images/","").replace("-large.jpg","")
    //display the image title in html
    displayImgTitle.textContent = imgTitle
}