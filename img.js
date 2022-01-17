let photo = document.querySelector("#photo");
let download = document.querySelector("#download");
let photoInput = document.querySelector("#photo-upload");

photo.addEventListener("click" , function(){
    photoInput.click();
});

photoInput.addEventListener("change" , function(e){
    let fileObject = e.target.files[0];
    console.log(fileObject);

    let imageUrl = URL.createObjectURL(fileObject);
    // console.log(imageUrl);
    let img = document.createElement("img");
    img.src = imageUrl;
    img.classList.add("image-upload");
    appendImage(img);
})

download.addEventListener("click" , function(){
    let canvasUrl = canvas.toDataURL({type:"image/png"});
    console.log(canvasUrl);
    let aTag = document.createElement("a");
    aTag.download = "image.png";
    aTag.href = canvasUrl;
    aTag.click();
})