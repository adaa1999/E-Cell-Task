function loadDoc(){
    var xmlhttp = new XMLHttpRequest();
var url = "https://jsonplaceholder.typicode.com/posts";

xmlhttp.onreadystatechange=function() {
  if (this.readyState == 4 && this.status == 200) {
    myFunction(this.responseText);
  }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction (response) {
  var arr = JSON.parse(response);
  var i;
  var out = "<table>";
  

  for(i = 0; i < 20; i++) {
    out += "<tr><td>" + "User Id:" +
    arr[i].userId +
    "<br>" + "Id:" +
    arr[i].id +
    "<br>" + "Title:" +
    arr[i].title +
    "<br>" + "Body:" +
    arr[i].body +
    "</td></tr>";
  }
  out += "</table>";
  document.getElementById("id01").innerHTML = out;
}
}