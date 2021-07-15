var lightTheme = true;
var r = document.querySelector(':root');

function switchTheme() {
    var rs = getComputedStyle(r);
    console.log("The value of --bgcolor before theme change is: " + rs.getPropertyValue('--bgcolor'));
    lightTheme = !lightTheme;
    // Get the styles (properties and values) for the root
  
    console.log("Theme : "+lightTheme);
// Set the value of variable --blue to another value (in this case "lightblue")
if(lightTheme){
    r.style.setProperty('--bgcolor', '#ffffff');
    r.style.setProperty('--textcolor', '#000000');
    r.style.setProperty('--containerbgcolor', '#ffffff');
}else {
    r.style.setProperty('--bgcolor', '#444444');
    r.style.setProperty('--textcolor', '#bebebe');
    r.style.setProperty('--containerbgcolor', '#878683');


}

    console.log("The value of --bgcolor after theme change is: " + rs.getPropertyValue('--bgcolor'));
}