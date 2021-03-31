// Default Calculate
function updateResults() {
  // Input Default
  var capInvested = parseFloat(document.getElementById("invested").value) || 0;
  var purPrice = parseFloat(document.getElementById("buyprice").value) || 0;
  var selPrice = parseFloat(document.getElementById("sellprice").value) || 0;
  // Input Split
  // # 1
  var capInvested_1 = parseFloat(document.getElementById("invested_1").value) || 0;
  var purPrice_1 = parseFloat(document.getElementById("buyprice_1").value) || 0;
  var selPrice_1 = parseFloat(document.getElementById("sellprice_1").value) || 0;
  // # 2
  var capInvested_2 = parseFloat(document.getElementById("invested_2").value) || 0;
  var purPrice_2 = parseFloat(document.getElementById("buyprice_2").value) || 0;
  var selPrice_2 = parseFloat(document.getElementById("sellprice_2").value) || 0;
  // // # 3
  var capInvested_3 = parseFloat(document.getElementById("invested_3").value) || 0;
  var purPrice_3 = parseFloat(document.getElementById("buyprice_3").value) || 0;
  var selPrice_3 = parseFloat(document.getElementById("sellprice_3").value) || 0;


  // Calculate Default
  var difference = (selPrice - purPrice) || 0;
  var quantity = (capInvested / purPrice) || 0;
  var earned = (quantity * difference) || 0;
  var total = (quantity * selPrice) || 0;
  var percent = (((total / capInvested)-1)*100) || 0;
  // Calculate Split
  // # 1
  var difference_1 = (selPrice_1 - purPrice_1) || 0;
  var quantity_1 = (capInvested_1 / purPrice_1) || 0;
  var earned_1 = (quantity_1 * difference_1) || 0;
  var total_1 = (quantity_1 * selPrice_1) || 0;
  var percent_1 = (((total_1 / capInvested_1)-1)*100) || 0;
  // # 2
  var difference_2 = (selPrice_2 - purPrice_2) || 0;
  var quantity_2 = (capInvested_2 / purPrice_2) || 0;
  var earned_2 = (quantity_2 * difference_2) || 0;
  var total_2 = (quantity_2 * selPrice_2) || 0;
  var percent_2 = (((total_2 / capInvested_2)-1)*100) || 0;
  // // # 3
  var difference_3 = (selPrice_3 - purPrice_3) || 0;
  var quantity_3 = (capInvested_3 / purPrice_3) || 0;
  var earned_3 = (quantity_3 * difference_3) || 0;
  var total_3 = (quantity_3 * selPrice_3 || 0);
  var percent_3 = (((total_3 / capInvested_3)-1)*100) || 0;

  // # Tot
  var invested_Tot = (capInvested_1 + capInvested_2 + capInvested_3) || 0;
  var quantity_Tot = (quantity_1 + quantity_2 + quantity_3) || 0;
  var earned_Tot = (earned_1 + earned_2 + earned_3) || 0;
  var total_Tot = (total_1 + total_2 + total_3) || 0;
  var percent_Tot = (percent_1 + percent_2 + percent_3) || 0;

  // Assign Values Default
  document.getElementById("difference").innerHTML = (difference).toFixed(6);
  document.getElementById("quantity").innerHTML = (quantity).toFixed(6);
  document.getElementById("earned").innerHTML = (earned).toFixed(2);
  document.getElementById("total").innerHTML = (total).toFixed(2);
  document.getElementById("percentage").innerHTML = (percent).toFixed(2) + ' %';
  // Assign Values Split
  // # 1
  document.getElementById("difference_1").innerHTML = (difference_1).toFixed(6);
  document.getElementById("quantity_1").innerHTML = (quantity_1).toFixed(6);
  document.getElementById("earned_1").innerHTML = (earned_1).toFixed(2);
  document.getElementById("total_1").innerHTML = (total_1).toFixed(2);
  document.getElementById("percentage_1").innerHTML = (percent_1).toFixed(2) + ' %';
  // # 2
  document.getElementById("difference_2").innerHTML =(difference_2).toFixed(6);
  document.getElementById("quantity_2").innerHTML = (quantity_2).toFixed(6);
  document.getElementById("earned_2").innerHTML = (earned_2).toFixed(2);
  document.getElementById("total_2").innerHTML = (total_2).toFixed(2);
  document.getElementById("percentage_2").innerHTML = (percent_2).toFixed(2) + ' %';
  // // # 3
  document.getElementById("difference_3").innerHTML = (difference_3).toFixed(6);
  document.getElementById("quantity_3").innerHTML = (quantity_3).toFixed(6);
  document.getElementById("earned_3").innerHTML = (earned_3).toFixed(2);
  document.getElementById("total_3").innerHTML = (total_3).toFixed(2);
  document.getElementById("percentage_3").innerHTML =(percent_3).toFixed(2) + ' %';
  // // # Tot
  document.getElementById("invested_Tot").innerHTML = (invested_Tot).toFixed(2);
  document.getElementById("quantity_Tot").innerHTML = (quantity_Tot).toFixed(6);
  document.getElementById("earned_Tot").innerHTML = (earned_Tot).toFixed(2);
  document.getElementById("total_Tot").innerHTML = (total_Tot).toFixed(2);
  document.getElementById("percentage_Tot").innerHTML = (percent_Tot).toFixed(2) + ' %';

}
// Reset Values
function reset0(){
  document.getElementById("invested").value = "";
  document.getElementById("buyprice").value = "";
  document.getElementById("sellprice").value = "";
  document.getElementById("difference").innerHTML = "";
  document.getElementById("quantity").innerHTML = "";
  document.getElementById("earned").innerHTML = "";
  document.getElementById("total").innerHTML = "";
  document.getElementById("percentage").innerHTML = "";
}

function reset1(){
  document.getElementById("invested_1").value = "";
  document.getElementById("invested_2").value = "";
  document.getElementById("invested_3").value = "";

  document.getElementById("buyprice_1").value = "";
  document.getElementById("buyprice_2").value = "";
  document.getElementById("buyprice_3").value = "";

  document.getElementById("sellprice_1").value = "";
  document.getElementById("sellprice_2").value = "";
  document.getElementById("sellprice_3").value = "";

  document.getElementById("difference_1").innerHTML = "";
  document.getElementById("difference_2").innerHTML = "";
  document.getElementById("difference_3").innerHTML = "";
  document.getElementById("invested_Tot").innerHTML = "";

  document.getElementById("quantity_1").innerHTML = "";
  document.getElementById("quantity_2").innerHTML = "";
  document.getElementById("quantity_3").innerHTML = "";
  document.getElementById("quantity_Tot").innerHTML = "";

  document.getElementById("earned_1").innerHTML = "";
  document.getElementById("earned_2").innerHTML = "";
  document.getElementById("earned_3").innerHTML = "";
  document.getElementById("earned_Tot").innerHTML = "";

  document.getElementById("total_1").innerHTML = "";
  document.getElementById("total_2").innerHTML = "";
  document.getElementById("total_3").innerHTML = "";
  document.getElementById("total_Tot").innerHTML = "";

  document.getElementById("percentage_1").innerHTML = "";
  document.getElementById("percentage_2").innerHTML = "";
  document.getElementById("percentage_3").innerHTML = "";
  document.getElementById("percentage_Tot").innerHTML = "";


}
