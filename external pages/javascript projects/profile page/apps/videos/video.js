var email=sessionStorage.getItem("user");
window.onload=function()
{var user_email=sessionStorage.getItem("user");
var profile_pic=document.getElementById("profile_pic");
var img=localStorage.getItem(user_email+"profile_img");
profile_pic.style.backgroundImage="url("+img+")";
profile_pic.style.backgroundSize="cover";
profile_pic.style.backgroundPosition="center";


 }



var plus_icon=document.getElementById("plus_icon");
plus_icon.onclick=function()
{var upload_bg=document.getElementById("upload_bg");
upload_bg.style.display="block";
plus_icon.style.display="none";
var wrong_icon=document.getElementById("wrong_icon");
wrong_icon.onclick=function()
{upload_bg.style.display="none";
plus_icon.style.display="block";}

}

var web_icon=document.getElementById("browser_upload-icon");
web_icon.onclick=function()
{var browser_upload=document.getElementById("browser_upload");
browser_upload.style.display="block";
web_icon.style.display="none";
var back=document.getElementById("x-mark");
back.onclick=function()
{browser_upload.style.display="none";
web_icon.style.display="block";
}

}


if (sessionStorage.getItem("user")==null) {window.location.replace("../../../index.html");}

var upload=document.getElementById("upload");
upload.onchange=function()
{var reader=new FileReader();
reader.readAsDataURL(upload.files[0]);
reader.onload=function()
{var result=reader.result;
var upld_bg=document.getElementById("upload_bg");
upld_bg.style.display="none";


}

}





// Video Uploading Coding //

var browser_upload_btn=document.getElementById("browser_upload_btn");
browser_upload_btn.onclick=function()
{browser_upload_btn.innerHTML="Uploaded";
	browser_upload_btn.style="background: rgb(129,255,0);background: linear-gradient(90deg, rgba(129,255,0,0.8883928571428571) 0%, rgba(14,255,0,0.9808298319327731) 53%);";
	var video_url_in=document.getElementById("video_url_in");
if (video_url_in.value != "") 
	{var v_obj=JSON.stringify({url:video_url_in.value});
	var vdo=localStorage.setItem(email+"video",v_obj);

setTimeout(function(){document.getElementById("browser_upload").style.display="none";}
,2500);}
location.reload();	
}

//Video Fetching //
function loading_video()
{var i;
for (i = 0; i<localStorage.length; i++) {
var keys=localStorage.key(i);
if(keys.match("video"))
    {var video_data=localStorage.getItem(keys);
var video_obj=JSON.parse(video_data);


var vdo=document.createElement("DIV");
vdo.setAttribute("class","vdo");

var a=document.createElement("A");
a.href="player.html";


var vdo_thumbnail=document.createElement("VIDEO");
vdo_thumbnail.className="vdo_thumbnail";

var source=document.createElement("SOURCE");
source.setAttribute("class","source");
source.setAttribute("src",video_obj.url)


var vdo_title=document.createElement("P");
vdo_title.setAttribute("class","vdo_title");


var s;
for (s = 0; s<keys.length; s++) {
	vdo_title.innerHTML="Video "+s+"";}

var play_icon=document.createElement("I");
play_icon.setAttribute("class","fa-regular fa-circle-play play_icon");
play_icon.setAttribute("url",video_obj.url);


var del_icon=document.createElement("I");

del_icon.setAttribute("class","fa-solid fa-trash del_icon");

vdo.appendChild(a);
vdo.appendChild(vdo_thumbnail);
vdo.appendChild(source);
vdo.appendChild(vdo_title);
vdo.appendChild(play_icon);
vdo.appendChild(del_icon);
vdo_thumbnail.appendChild(source);
a.appendChild(vdo_thumbnail);

var videos_list=document.getElementById("videos_list");
videos_list.appendChild(vdo);


}
}

}
loading_video()

// Video Playing //

function playing()
{var play_btns=document.getElementsByClassName("play_icon");
var i;
for (i=0; i<play_btns.length; i++) {
	play_btns[i].onclick=function()
	{var v_url=this.getAttribute("url");
localtorage.setItem(v_url);

}
	
}

}


alert(all_play);