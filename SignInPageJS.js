function validateUserCredentials()
{

var userdetails=[["laks0586","lakshmi05"]["prasanna1","prasanna"]],exp=/^[a-zA-Z0-9]+$/,isValidUser=true;
console.log("inside validateUserCredentials");
	if(document.SignInForm.userName.value =="")
		{
			alert("User Name cannot be empty. Please enter a valid user name");
			isValidUser=false;
			document.SignInForm.userName.focus() ;
		}
	else if(document.SignInForm.password.value=="")
		{
		alert("Password cannot be empty. Please enter a valid password");
		isValidUser=false;
		document.SignInForm.password.focus() ;
		}
	else
	{
			if(!exp.test(document.SignInForm.userName.value))
			{
				alert("User Name can have only alphabets/ numbers.");
				isValidUser=false;
					document.SignInForm.userName.focus() ;
			}
			else if(document.SignInForm.userName.value.length >8)
			{
			alert("User Name can have a max of 8 characters only");
			isValidUser=false;
			document.SignInForm.userName.focus();
			}
			else if(!exp.test(document.SignInForm.password.value))
			{
				alert("Password can have only alphabets/ numbers.");
				isValidUser=false;
					document.SignInForm.userName.focus() ;
			}
			if(!exp.test(document.SignInForm.userName.value))
			{
				alert("User Name can have only alphabets/ numbers.");
				isValidUser=false;
					document.SignInForm.userName.focus() ;
			}
			else if(document.SignInForm.password.value.length <6)
			{
			alert("Password should have a min of 6 characters only");
			isValidUser=false;
			document.SignInForm.password.focus();
			}
			else if(!exp.test(document.SignInForm.password.value))
			{
				alert("Password can have only alphabets/ numbers.");
			isValidUser=false;
					document.SignInForm.userName.focus() ;
			}
			
		for(var i=0,x=userdetails.length;i<x;i++)
		{
			if((userdetails[i][0]!=document.SignInForm.userName.value) 
				||(userdetails[i][1]!=document.SignInForm.psassword.value))
			{
				alert("User Name or Password did not match. Please enter valid credentials.");
					isValidUser=false;
					document.SignInForm.userName.focus() ;
					
			}
		}
	}
console.log("isValidUser"+isValidUser);
return isValidUser;
}