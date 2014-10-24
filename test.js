function sample()
{
console.log("function");
var name=document.sampleForm.sampleName.value;
console.log("name"+ name);
	if(name.indexOf('@')!=-1)
	{
	console.log("its there");
	}
}