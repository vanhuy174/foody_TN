$(document).ready(function(){
  $('.materialboxed').materialbox();
});

$(document).ready(function(){
  $('.modal').modal();
});

$(document).ready(function(){
  $('.collapsible').collapsible();
});

$(document).ready(function(){
  $('.fixed-action-btn').floatingActionButton();
});

$(document).ready(function(){
  $('.tooltipped').tooltip();
});

$('.dropdown-trigger').dropdown();

//nút phản hồi
document.getElementById("btnphanhoi").onclick = function (){
  if(document.getElementById("content").style.display == 'block'){
    document.getElementById("content").style.display = 'none';
  }else{
    document.getElementById("content").style.display = 'block';
  }
};