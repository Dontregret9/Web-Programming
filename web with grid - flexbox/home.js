// slideshow-----------------------------------------------------------------------

var cur_img = [0,1,2];

function ShowSlides(start_img) 
{
    // get all picture elements and hide them 
    let slides = document.getElementsByClassName("picture");
    for (let i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    for(let i = 0; i < 3; i++)
    {
        var start = cur_img[i];

        if(start < 0)
        {
            start = slides.length + start;
            cur_img[i] = start;
        }

        if(start > slides.length-1)
        {
            start = start - slides.length;
            cur_img[i] = start;
        }
        console.log("start: " + start)
        slides[start].style.display = "block";
    }
}   

function SlideTo(step)
{
    for(let i=0;i<3;i++)
    {
        cur_img[i] += 1;
    }
    console.log("slideto: " + cur_img)
    ShowSlides(cur_img);
}

// image view----------------------------------------------------------

var img_viewing = "";

function ImageView(id)
{
    document.getElementById(id).style.display = "flex";
    img_viewing = id;
}

function ExitImageView(id)
{
    document.getElementById(id).style.display = "none";
    img_viewing = "";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event)
{       
    let modal = document.getElementsByClassName("modal");
    for(let i =0;i<modal.length;i++)
    {
        if (event.target == modal[i])
        {
            modal[i].style.display = "none";
            break;
        }
    }
}
function ImageViewNext(n)
{    
    let slides = document.getElementsByClassName("picture");

    let index = parseInt(img_viewing[3]);
    index+=n;
    if(index >= 0 || index < slides.length)
    {
        let next_id = "pic"+index+"_modal";
        ExitImageView(img_viewing);
        ImageView(next_id);
    }
}