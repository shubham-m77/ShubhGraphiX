window.onload=function()
{if (sessionStorage.getItem("user") == null) {window.location.replace("../index.html");}

else{

//Logout Coding//
var logout=document.getElementById("logout");
logout.onclick=function()
{sessionStorage.clear();
document.getElementById("page_cover").style.display="none";
document.getElementById("logout-icon").style.display="none";
document.getElementById("loading").style.display="block";
location.replace("..//index.html");
}

//PROFILE NAME CODING//
	var profile_pic=document.getElementById("profile_pic");
var profile_upload=document.getElementById("profile_upload");
var user_email=sessionStorage.getItem("user");
var json_email=localStorage.getItem(user_email);
var name=document.getElementById("profile_name");
var obj_data=JSON.parse(json_email);
var firstname=obj_data.firstname;
var lastname=obj_data.lastname;
var user=obj_data.username;
var username =atob(user);
var first=atob(firstname);
var last=atob(lastname);
main_profile_name=document.getElementById("main_profile_name");
main_profile_name.innerHTML=first+last;
main_profile_username=document.getElementById("main_profile_username");
main_profile_username.innerHTML="@"+username;
var container=document.getElementById("container");
var page_cover=document.getElementById("page_cover");


//PROFILE PIC CODING//

var pic_url=localStorage.getItem(user_email+"profile_img");
var main_pic=document.getElementById("main_profile_pic");
 main_pic.style.backgroundImage="url("+pic_url+")";
main_pic.style.backgroundSize="cover";
main_pic.style.backgroundPosition="center"
//end//

if(localStorage.getItem(user_email+"profile_img")!=null)
{var container=document.getElementById("container");
container.style.display="none";}


name.innerHTML=first + " "+last;
profile_upload.onchange=function()
{user_icon.style.display="none";
	var reader= new FileReader();
reader.readAsDataURL(profile_upload.files[0]);
reader.onload=function()
  {var result=reader.result;
  var user_icon=document.getElementById("user_icon");
  profile_pic.style.backgroundImage="url("+result+")";
  profile_pic.style.backgroundSize="cover";
  profile_pic.style.backgroundPosition="center";
  var next_btn=document.getElementById("next_btn");
next_btn.style.display="block";

next_btn.onclick=function()
{localStorage.setItem(user_email+"profile_img",result);
var page_cover=document.getElementById("page_cover");
page_cover.style.display="none";
var profile_header=document.getElementById("profile_header");
window.location=location.href;



 } }}




}











}





