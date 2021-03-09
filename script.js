// references:
//https://medium.com/clarusway/making-a-todo-list-with-html-css-and-javascript-154839b770b6
//https://www.w3schools.com/howto/howto_js_todolist.asp
var myNodelist = document.getElementsByClassName("list");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.className === 'list') {
    ev.target.classList.toggle('checked');
  }
}, false);
