/*JS style*/
var login_page=document.getElementById("login_page");
var signup_page=document.getElementById("signup_page");
var signup_msg=document.getElementById("sign_up");
var login_msg=document.getElementById("log_in");
signup_msg.onclick=function()
{
login_page.style.display="none";
signup_page.style.display="block";
}

login_msg.onclick=function()
{

signup_page.style.display="none";
login_page.style.display="block";}

/*JS style*/



/*Login SignUp Form*/
/*Starting Signup Coding*/

var signup_form=document.getElementById("signup_form");

signup_form.onsubmit=function()
{var first_name=btoa(document.getElementById("first_name").value);
var last_name=btoa(document.getElementById("last_name").value);
var email=btoa(document.getElementById("email").value);
var username=btoa(document.getElementById("username").value);
var password=btoa(document.getElementById("password").value);

var user_data_object={firstname:first_name,lastname:last_name,email:email,username:username,password:password};
var user_data=JSON.stringify(user_data_object);

if (first_name!="" && last_name!="" && email!="" && username!="" && password!="") {localStorage.setItem(email,user_data);
var signup_btn=document.getElementById("signup_btn");
var check=document.getElementById("check_logo");
check.style.display="block";
signup_btn.value="Signed-Up Succesfull !!";
signup_btn.style="background: rgb(129,255,0);background: linear-gradient(90deg, rgba(129,255,0,0.8883928571428571) 0%, rgba(14,255,0,0.9808298319327731) 53%);";
signup_btn.style.fontSize="15px";
signup_btn.style.color="black";

setTimeout(reload,3000);
function reload(){signup_btn.style="background: linear-gradient(90deg, rgba(0,0,255,0.896796218487395) 0%, rgba(0,176,255,0.8743872549019608) 85%);";
signup_btn.value="Sign-Up";

check.style.display="none";
signup_form.reset();
signup_page.style.display="none";
login_page.style.display="block";


}

return false;}
}	

/*email validation*/
function warning()
{var email=document.getElementById("email");
var signup_btn=document.getElementById("signup_btn");

	var warn=document.getElementById("email_warn");
if(localStorage.getItem(btoa(email.value))!= null)
	{warn.style.display="block";
email.style.borderColor="red";
signup_btn.disabled=true;
signup_btn.style.backgroundColor="#ccc";
email.onclick=function()
{warn.style.display="none";
email.style.borderColor="#ccc";
signup_btn.disabled=false;
signup_btn.style.backgroundColor="background: linear-gradient(90deg, rgba(0,0,255,0.896796218487395) 0%, rgba(0,176,255,0.8743872549019608) 85%);";

}
warning()
}
return false;
}
/*Email Validation*/
/*End Signup COding*/

/*Start Login Coding*/
var wrong_email=document.getElementById("wrong_email");
var wrong_pass=document.getElementById("wrong_pass");
var login_btn=document.getElementById("login_btn");
var login_form=document.getElementById("login_form");
login_form.onsubmit=function()
{var email=document.getElementById("login_email");
var password=document.getElementById("login_password");
if (localStorage.getItem(btoa(email.value))==null ) 
{
wrong_email.style.display="block";
email.style.borderColor="red";

return false;
}
else
	{var data=localStorage.getItem(btoa(email.value));
var obj_data=JSON.parse(data);
var real_email=obj_data.email;
var real_pass=obj_data.password;

if (btoa(email.value)==real_email) {
if (btoa(password.value)==real_pass) {login_btn.value="Login Success";
login_btn.style="background: rgb(129,255,0);background: linear-gradient(90deg, rgba(129,255,0,0.8883928571428571) 0%, rgba(14,255,0,0.9808298319327731) 53%);";
sessionStorage.setItem("user", btoa(email.value));
window.location.replace("profile page/profile.html");}
else{wrong_pass.style.display="block";
password.style.borderColor="red";
password.onclick=function() {
	wrong_pass.style.display="none";
password.style.borderColor="#ccc";
}


return false;}
}

else{

wrong_email.style.display="block"
email.style.borderColor="red";
wrong_pass.style.display="block"
password.style.borderColor="red";

}
return false;}
}


/*End Login Coding*/


