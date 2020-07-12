let code=document.getElementById('code');
let run = document.getElementById('run');
let clear = document.getElementById('clear');
let result = document.getElementById('result');
let visibile = document.getElementById('hidden');

run.onclick = function(){
    //alert('run');
    if (code==undefined){
        result.innerHTML ="You didn't write anything !!"
    }
    else{
        visibile.style.visibility = "visible";
        result.innerHTML=code.value;
        localStorage.setItem("result", code.value);
    }
};

clear.onclick = function () {
    //alert('clear');
    result.innerText = "";
    code.value="";
    visibile.style.visibility="hidden";
};

onload = function(){
    code.value = localStorage.getItem("result");
}