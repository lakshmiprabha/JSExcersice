var userDetailsArray=new Array();

function UserDetails(name,age,phone,email,address)
{
this.name=name;
this.age=age;
this.phone=phone;
this.email=email;
this.address=address;
}
var formObj= document.ProfilePageForm;
function checkUserName()
{
var validUserRegx=/[a-zA-Z]$/,
	isValidUserName=true;
//console.log(" inside checkUserName");
	if((formObj.userName.value==""))
	{
		isValidUserName=false; 
	}
	else
	{
		/* console.log("UserName is not empty");
		console.log("User name" +formObj.userName.value);
		console.log("condition"+validUserRegx.test(formObj.userName.value)); */
			if(validUserRegx.test(formObj.userName.value))
			{
			//console.log("UserName has only alphabets");
				if(formObj.userName.value.length >= 50)
				{
				alert("Max characters allowed for name is only 50. Please retype your name");
				formObj.userName.value="";
				formObj.userName.focus();
				isValidUserName=false; 
				}
			}
			else
			{
			alert("Please enter a valid name");
			formObj.userName.value="";
			formObj.userName.focus();
			isValidUserName=false;
			}
	}
//console.log("isValidUserName"+isValidUserName);
return isValidUserName;
}
function checkAge()
{
//console.log("inside check age");
var validAgeRegx=/[0-9]$/,
	isAgeValid=true;
//console.log("age" +formObj.age.value);
	if(formObj.age.value=="")
	{
	isAgeValid=false;
	}
	else
	{
	//console.log("condition1 true");
		if(validAgeRegx.test(formObj.age.value))
		{
			if((formObj.age.value<=0) ||(formObj.age.value>=100))
				{
				alert("Age cannot be "+formObj.age.value+". Please enter a valid age.");
				formObj.age.value="";
				formObj.age.focus();
				isAgeValid=false
				}
		}
		else
		{
		alert("Age can have only numbers.");
		formObj.age.value="";
		formObj.age.focus();
		isAgeValid=false;
		}
	}
return isAgeValid;
}
function checkPhoneNumber()
{
var validPhoneRegX=/[0-9]$/
	isPhoneNoValid=true;
	if(formObj.phone.value=="")
	{
	isPhoneNoValid=false;
	}
	else
	{
		if(validPhoneRegX.test(formObj.phone.value))
		{
			if((!formObj.phone.value.length > 10))
			{
			alert("Phone numbers should have 10 digits. Please enter a valid phone number");
			formObj.phone.value=""
			formObj.phone.focus();
			isPhoneNoValid=false;
			}
		}
		else
		{
		alert("Phone number can have only numerals");
		formObj.phone.value=""
		formObj.phone.focus();
		isPhoneNoValid=false;
		}
	}
return isPhoneNoValid;
}

function saveUserDetails()
{

//console.log("inside saveUserDetails");
	var name=formObj.userName.value,
		age=formObj.age.value,
		phone=formObj.phone.value,
		email=formObj.email.value,
		address=formObj.address.value;
if(checkUserName && checkAge && checkPhoneNumber )
{
//console.log("condtion passs!!!!");
	var obj = new UserDetails(name,age,phone,email,address);
	console.log("name"+obj["name"]);
	userDetailsArray.push(obj);
	for(var i=0;i<userDetailsArray.length;i++)
	{
	console.log("name in array"+userDetailsArray[i]["name"]);
	}
}
}