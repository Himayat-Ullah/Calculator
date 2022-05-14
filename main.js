function dis(val)
{
    document.getElementById("inputField").value+=val;
}

function solve()
{
    let x = document.getElementById("inputField").value
    let y = eval(x)
    document.getElementById("inputField").value = y
}
function clr()
{
    document.getElementById("inputField").value = ""
}

function a()
{
    let x = document.getElementById("inputField").value
    let y = x.slice(0,-1)
    document.getElementById("inputField").value = y
}

