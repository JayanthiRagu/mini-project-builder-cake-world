/*Fill your code */
var total=0;
document.getElementById("cakechoco").style.display="none";
document.getElementById("cakestraw").style.display="none";
document.getElementById("cakescotch").style.display="none";
document.getElementById("cakevanilla").style.display="none";
document.getElementById("cakered").style.display="none";
document.getElementById("candle").style.display="none";

document.getElementById("chocolate").addEventListener("click", chocolate);
document.getElementById("strawberry").addEventListener("click", strawberry);
document.getElementById("butterscotch").addEventListener("click", butterscotch);
document.getElementById("vanilla").addEventListener("click", vanilla);
document.getElementById("redvelvet").addEventListener("click", redvelvet);
document.getElementById("buy").addEventListener("click", total1);

function chocolate() {
    total +=300;
    document.getElementById("cakechoco").style.display="block";
  document.getElementById("1").innerHTML = "Chocolate----------300";
}
function strawberry() {
    total +=100;
    document.getElementById("cakestraw").style.display="block";
    document.getElementById("2").innerHTML = "Strawberry---------100";
  }
  function butterscotch() {
    total +=200;
    document.getElementById("cakescotch").style.display="block";
    document.getElementById("3").innerHTML = "Butterscotch-------200";
  }
  function vanilla() {
    total +=250;
    document.getElementById("cakevanilla").style.display="block";
    document.getElementById("4").innerHTML = "Vanilla-------------250";
  }
  function redvelvet() {
    total +=350;
    document.getElementById("cakered").style.display="block";
    document.getElementById("5").innerHTML = "RedVelvet---------350";
  }
  function total1() {
    document.getElementById("candle").style.display="block";
    document.getElementById("total").innerHTML = "Total--------- " +total;
  }