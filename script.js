document.write("hello javascript"+1);
alert('thank you');
if(5==="5");
alert("5");

var mobiles=["Samsung","Iphone"];
for(var i=0;i<mobiles.length;++i)
{
	alert(mobiles[i]);
	document.write(mobiles[i]);
}
function funcstart()
{
	var paragraph=document.getElementById("para").style.backgroundColor="red";
}
function funcover()
{
	document.getElementById("para").style.backgroundColor="white";
}
function change()
{
	var para = document.getElementsByClassName("notpara");
	para[0].innerHTML="shourya";
	para[1].innerHTML="ishan";
	
}