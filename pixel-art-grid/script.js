let currentColor = "#F6FF";
function render()
{
    const gridEle = document.getElementById("grid");
for(let i=0;i<=10;i++)
{
    let gridRow = document.createElement("div");
    for(let j=0;j<=10;j++)
    {
        let gridItem = document.createElement("div");
        gridItem.classList.add("item")
        gridItem.addEventListener("click",()=>{
            gridItem.style.backgroundColor = currentColor;
        })
        gridRow.appendChild(gridItem)
        gridEle.appendChild(gridRow)
    }
}
let input = document.getElementById('colorIn');
input.addEventListener("change",(e)=>{
    changeColor(e.target.value)
})
}
function changeColor(color)
{
    currentColor = color;
}

render()