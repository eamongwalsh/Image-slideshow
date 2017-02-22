var myPix = new Array("images/img1.jpg","images/img2.jpg","images/img3.jpg","images/img4.jpg","images/img4.jpg","images/ferrari.jpg")
var thisPic = 0

console.log(myPix);

function doPrevious() {
    if (document.images && thisPic > 0) {
        thisPic--
        document.myPicture.src=myPix[thisPic]
    }
}

function doNext() {
    if (document.images && thisPic < 5) {
        thisPic++
        document.myPicture.src=myPix[thisPic]
    }
}