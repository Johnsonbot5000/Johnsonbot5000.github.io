let myImage = document.querySelector('img');
myImage.onclick = function () 
{
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/gmaids-logo.png') 
    {
        myImage.setAttribute('src','images/gmaids-logo2.png');
    }
        else 
        {
            myImage.setAttribute('src', 'images/gmaids-logo.png');
        }
    
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt ('What is your name?');
    if (!myName) 
    {
        setUserName();
    }
    else 
    {
    localStorage.setItem ('name', myName);
    myHeading.textContent = 'Book a cleaning, ' + myName;
    }
}
if (!localStorage.getItem('name')) {
    setUserName ();
}
else 
{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Book a cleaning, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}
