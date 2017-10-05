function checkSubmitType()
{
    if(document.getElementById('ID').value == "" && document.getElementById('selectcol').value == "red") {
        window.location="marketplace_red.html"; 
    }
    if(document.getElementById('ID').value == "" && document.getElementById('selectcol').value == "blue") {
		alert("blue");
         window.location = "marketplace_blue.html";
    }
}
