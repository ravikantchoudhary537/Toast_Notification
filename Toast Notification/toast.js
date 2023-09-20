let successmsg = `<img src="successlogo.png"> Successfully submited"`;
let invalidmsg = `<img src="invalid.png"> Invalid input. Check again !`;
let errormsg = `<img src="error3.jpg"> Please fix the error !!!!`;
let toastbox = document.getElementById('toastbox');

function showtoast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast-class');
    toastbox.appendChild(toast);
    toast.innerHTML = msg;
    setTimeout(function(){
        toast.remove();
    },4000);

    if(msg.includes("Invalid")){
        toast.classList.add('invalid');
    }

    if(msg.includes("error")){
        toast.classList.add("error");
    }
}