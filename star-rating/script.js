let rating = 0;
function star(num){
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
    for(let i=0;i<num;i++)
    {
        const filledStar = document.createElement("i")
        if(i < rating)
        {
            filledStar.classList.add('bi');
            filledStar.classList.add('bi-star-fill');
            //console.log(i);
        }
        else
        {
            filledStar.classList.add('bi');
            filledStar.classList.add('bi-star');
            //console.log(i);
        }

        filledStar.addEventListener("click",()=>{
            //console.log(i)
            setRating(i)
            star(5)
        })

        document.getElementById("main").appendChild(filledStar);
        if(rating)
        {
            switch(rating)
            {
                case 1 : document.getElementById("sub").innerHTML="Poor"; break;
                case 2 : document.getElementById("sub").innerHTML="Not Satisfactory";break;
                case 3 : document.getElementById("sub").innerHTML="Fair";break;
                case 4 : document.getElementById("sub").innerHTML="Good";break;
                case 5 : document.getElementById("sub").innerHTML="Excellent";break;
            }
        }
    }
}

function setRating(num)
{
    rating = num+1;
}
star(5);