function copy_data(containerid) {
  var range = document.createRange();
  range.selectNode(containerid); //changed here
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();

}
function tempAlert(msg,duration) {
 var el = document.createElement("div");
 el.setAttribute("class","text-primary text-center card");
 el.setAttribute("style","position:fixed;transform: translateY(-50%);top:50%;left:45%;background-color:white; padding:10px 10px 10px 10px; max-width:200px;z-index: 9999;");
 el.innerHTML = msg;
 setTimeout(function(){
    el.parentNode.removeChild(el);
 },duration);
 document.body.appendChild(el);
}
