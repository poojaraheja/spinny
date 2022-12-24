function brandDropdown() {
  document.getElementById("brand").style.display = "block";
  document.getElementById("rto").style.display = "none";
  document.getElementById("year").style.display = "none";
}
function bmwBrand() {
  document.getElementById("brand").style.display = "none";
  document.getElementById("brandname").innerHTML = "BMW";
}
function balenoBrand() {
  document.getElementById("brand").style.display = "none";
  document.getElementById("brandname").innerHTML = "BALENO";
}
function rto() {
  if (document.getElementById("brandname").innerHTML != "") {
    document.getElementById("rto").style.display = "block";
    document.getElementById("brand").style.display = "none";
    document.getElementById("year").style.display = "none";
  }
}
function delhiRto() {
  document.getElementById("rto").style.display = "none";
  document.getElementById("rtolocation").innerHTML = "Delhi";
}
function agraRto() {
  document.getElementById("rto").style.display = "none";
  document.getElementById("rtolocation").innerHTML = "Agra";
}
function year() {
  if (document.getElementById("rtolocation").innerHTML != "") {
    document.getElementById("year").style.display = "block";
    document.getElementById("brand").style.display = "none";
    document.getElementById("rto").style.display = "none";
  }
}
function yearEleven() {
  document.getElementById("year").style.display = "none";
  document.getElementById("yearName").innerHTML = "2011";
}
function yearSeven() {
  document.getElementById("year").style.display = "none";
  document.getElementById("yearName").innerHTML = "2007";
}
