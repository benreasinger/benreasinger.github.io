function toggleImage() {
    const image = document.getElementById("toggle-img");
    if (image.src.includes("Photo1.jpg")) {
        image.src = "../assets/Photo2.png";
    }
     else if(image.src.includes("Photo2.png"))  {
        image.src = "../assets/Photo3.jpg";
    }
     else if(image.src.includes("Photo3.jpg")){
         image.src = "../assets/Photo4.jpg";
     }
     else if(image.src.includes("Photo4.jpg")){
        image.src = "../assets/Photo5.jpg";
     }
     else if(image.src.includes("Photo5.jpg")){
        image.src = "../assets/Photo1.jpg";
     }
}
