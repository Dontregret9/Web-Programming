// slideshow-----------------------------------------------------------------------

var cur_img = [0,1,2];

function ShowSlides(start_img) 
{
    // get all picture elements and hide them 
    let slides = document.querySelectorAll("#pictures>a");
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
/*
--------------------------------------------------------------------------------------
Check form
*/
function Check_name()
{
    let input = document.getElementById("rc_guess_name");
    let name = input.value;

    if(name.length < 2 || name.length > 30)
    {
        input.style.borderColor = "rgb(243, 104, 39)";
        document.getElementById("rc_alert_name").style.display = "block";
        return false;
    }
    else
    {
        input.style.borderColor = " rgb(179, 199, 241)";
        document.getElementById("rc_alert_name").style.display = "none";
        return true;
    }
}

function Check_email()
{
    let input = document.getElementById("rc_guess_email");
    let email = input.value;

    let regrex_check = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,}){1,3}$/;
    if(!(regrex_check.test(email)))
    {
        input.style.borderColor = "rgb(243, 104, 39)";
        document.getElementById("rc_alert_email").style.display = "block";
        return false;
        return 
    }
    else
    {
        input.style.borderColor = " rgb(179, 199, 241)";
        document.getElementById("rc_alert_email").style.display = "none";
        return true;
    }
}

function Check_content()
{
    let input = document.getElementById("rc_guess_ideas");
    let content = input.value;

    if(content.length < 2)
    {
        input.style.borderColor = "rgb(243, 104, 39)";
        document.getElementById("rc_alert_content_img").style.display = "block";
        document.getElementById("rc_alert_content_text").style.display = "block"
        return false;
    }
    else
    {
        input.style.borderColor = " rgb(179, 199, 241)";
        document.getElementById("rc_alert_content_img").style.display = "none";
        document.getElementById("rc_alert_content_text").style.display = "none"
        return true;
    }
}

function Validate_form()
{
    if(!Check_name())
    {
        alert("Your name is invalid");
        return false;
    }
    if(!Check_email)
    {
        alert("Your email is invalid");
        return false;
    }
    if(!Check_content())
    {
        alert("Your content is too short")
        return false;
    }
    return true;
}