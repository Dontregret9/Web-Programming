// img_index is an array, it contains index of pitures to show. 
// example: [1,2,3]
function ShowSlides(img_index) 
{
    // get all picture elements and hide them 
    var slides = document.getElementsByClassName("picture");
    for (let i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    //browse in img_index and show those pictures 
    for(let i = 0; i < img_index.length; i++)
    {
        // index in [0,length-1]
        img_index[i] = img_index[i] % (slides.length);

        slides[img_index[i]].style.display = "block";
    }

    // for each index: index = index +1 to suffer to the next picture. 
    for(let i = 0; i < img_index.length; i++)
    {
        img_index[i] = (img_index[i] + 1) % (slides.length);
    }
    
    // slideshow auto suffer each 2s
    setTimeout(ShowSlides(img_index),2000);
}
