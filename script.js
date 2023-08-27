let celsiusinput=document.querySelector('.cell1 > input');
let fahrenheitinput=document.querySelector('.fah1 > input');
let btn=document.querySelector('button');

function roundnum(number){
    return Math.round(number*100)/100;
}
celsiusinput.addEventListener("input",function(){
    let ctemp=parseInt(celsiusinput.value);
    let ftemp=(ctemp*(9/5))+32;
    fahrenheitinput.value=roundnum(ftemp);
})

btn.addEventListener('click',function(){
    celsiusinput.value=null;
    fahrenheitinput.value=null;
})