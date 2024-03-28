
document.getElementById("myForm").addEventListener("submit",function(event){
	event.preventDefault();
	const name = document.getElementById("name").value;
	const age = document.getElementById("age").value;
	
	if(name === "" || age === ""){
		alert("Please fill out all fields");
		return;
	}
	const promise = new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(parseInt(age)>=18){
				resolve(`Welcome, ${name}. You can vote.`);
			}
			else{
				reject(`Oh sorry ${name}. You aren't old enough.`)
			}
		},4000);
	})
promise.then((message)=> alert(message));
	promise.catch((message)=>alert(message));
	
});







	
