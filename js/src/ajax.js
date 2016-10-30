$( document ).ready(function() {

  function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
  vars[key] = value;
  });
  return vars;
  }

  if( getUrlVars()["send"]=="true"){

  console.log("si");
  $('#modalsuccess').modal('show'); 
}
else{
  console.log("no")
}





});
