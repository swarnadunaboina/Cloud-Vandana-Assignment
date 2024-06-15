function press(expr) 
{
 if(expr=="AC") {
  document.f1.result.value=" ";
 }
  else{
   var lastLetter=document.f1.result.value.slice(-1);
   if(!(lastLetter==expr && [".","/","+","-","*"].includes(expr)))
  document.f1.result.value=document.f1.result.value+expr;

}
}
function calcu()
{
   document.f1.result.value=eval(document.f1.result.value);
}
