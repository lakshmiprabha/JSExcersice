function validateUserCredentials()
{
var userdetails=[["laks0586","laks"]],exp=/^[a-zA-Z0-9]+$/;
console.log("inside validateUserCredentials");
	if(document.SignInForm.userName.value =="")
		{
			alert("User Name cannot be empty. Please enter a valid user name");
			document.SignInForm.userName.focus() ;
		}
	else if(document.SignInForm.password.value=="")
		{
		alert("Password cannot be empty. Please enter a valid password");
		document.SignInForm.password.focus() ;
		}
	else
	{
	console.log("inside else loop....");
		for(var i=0,x=userdetails.length;i<x;i++)
		{
			console.log("inside for loop");
			console.log("user name"+exp.test(document.SignInForm.userName.value));
			if(!exp.test(document.SignInForm.userName.value))
			{
				console.log("if 1 matched");
				alert("User Name can have only alphabets/ numbers.");
					document.SignInForm.userName.focus() ;
			}
			else if(!exp.test(document.SignInForm.password.value))
			{
			console.log("if 2 matched");
				alert("Password can have only alphabets/ numbers.");
					document.SignInForm.userName.focus() ;
			}
			else if((userdetails[i][0]!=document.SignInForm.userName.value) 
				||(userdetails[i][1]!=document.SignInForm.psassword.value))
			{
				console.log("if3 matched");
				alert("User Name or Password did not match. Please enter valid credentials.");
					document.SignInForm.userName.focus() ;
			}
		}
	}
}