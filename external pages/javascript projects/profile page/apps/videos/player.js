
var video_view=document.getElementById("video_view");
var email=sessionStorage.getItem("user");
window.onload=function()
{if (sessionStorage.getItem("user")==null) {window.location.replace("../../../index.html");}
else{var source=document.getElementById("source");

var video_view=document.getElementById('video_view');
var play_icon=document.getElementById("play_icon");
var pause_icon=document.getElementById("pause-icon");
play_icon.onclick=function()
{video_view.play();
play_icon.style.display="none";
pause_icon.style.display="block";
pause_icon.onclick=function()
{video_view.pause();
play_icon.style.display="block";
pause_icon.style.display="none";}

}

//Progress Bar//

video_view.ontimeupdate=function()
{var progress_bar=document.getElementById("progress_bar");
var total_d=this.duration;
var current_d=this.currentTime;
var c_min=parseInt(current_d/60);
var c_sec=parseInt(current_d-c_min*60);
var t_min=parseInt(total_d/60);
var t_sec=parseInt(total_d-t_min*60);
var v_time=document.getElementById("time");


v_time.innerHTML=c_min+":"+ c_sec +" / "+t_min+ ":" +t_sec;
progress_bar.style.width=""+current_d*100/total_d+"%";

}

// video loading //



}}

var progress=document.getElementById("progress");
progress.onclick=function(event)
{var percent=event.offsetX/this.offsetWidth;
video_view.currentTime=percent*video_view.duration;


}
var expand=document.getElementById("expand-icon");
expand.onclick=function()
{video_view.requestFullscreen();}


var menu_box=document.getElementById("menu_box");
var menu_icon=document.getElementById("menu-icon");
menu_icon.onclick=function()
{
if (menu_box.style.display=="none") {menu_box.style.display="block";
var speed_meter=document.getElementById("speed_meter");
speed_meter.oninput=function()
{
video_view.playbackRate=this.value;


}}
	else{menu_box.style.display="none";}

}









