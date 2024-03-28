//your JS code here. If required.
document.getElementById('myForm').addEventListener('submit',function(event){
	event.preventDefault();
	const name = document.getElementById("name").value;
	const age = document.getElementById("age").value;
	
	if(name === "" || age === ""){
		alert("please fill the form");
		return;
	}
	const promise = new Promise((resolve,reject)=>{
		setTimeOut(()=>{
			if(parseInt(age)>=18){
				resolve(`Welcome, ${name}. You can vote.`);
			}
			else{
				reject(`Oh sorry ${name}. You aren't old enough.`)
			}
		},4000);
	})
// promise.then((message)=> alert(message));
// 	promise.catch((message)=>alert(message));
	 promise.then((message) => {
        alert(message);
    }).catch((message) => {
        alert(message);
    });








	
}