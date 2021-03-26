//PROFIT
function clearContent0(){
  document.getElementById("INVESTED").value='';
  document.getElementById("BUYPRICE").value='';
  document.getElementById("SELLPRICE").value='';
  document.getElementById("DIFFERENCE").value='';
  document.getElementById("QUANTITY").value='';
  document.getElementById("PERC").value='';
  document.getElementById("EARNED").value='';
  document.getElementById("TOTAL").value='';
}
function e(element) {
  return document.getElementById(element);
}
function f(element) {
  return parseFloat(e(element).value);
}
function updateResult() {
  //Crypto profit
  e("DIFFERENCE").value =  (f("SELLPRICE") - f("BUYPRICE")).toFixed(2);
  e("QUANTITY").value = (f("INVESTED") / (f("BUYPRICE"))).toFixed(8);
  e("EARNED").value = (f("QUANTITY") * f("DIFFERENCE")).toFixed(2);
  e("TOTAL").value = (f("QUANTITY") * f("SELLPRICE")).toFixed(2);
  e("PERC").value = ((f("TOTAL") / f("INVESTED") -1)*100).toFixed(2);
}
