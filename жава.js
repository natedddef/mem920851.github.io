$('#hello').height(40).width(400);
$('#but').height(40).width(40);
$('#but').click(function(){
let divf=document.getElementById("div");
    $('#but').hide(1000);   
  divf.style.display="block";
  $('#btrc').click(function(){
    let but=document.getElementById('but');
    $('#but').show(1000);   
    divf.style.display="none";
  });
});

function reg(){
    window.location="file:///D:/%D1%81%D0%B0%D0%B1%D0%B0%D2%9B/%D0%9D%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%BF%D0%B0%D0%BF%D0%BA%D0%B0/lava2.html";
}
function entr(){
    window.location="file:///D:/%D1%81%D0%B0%D0%B1%D0%B0%D2%9B/%D0%9D%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%BF%D0%B0%D0%BF%D0%BA%D0%B0/%D0%B6%D0%B0%D0%B2%D0%B0.html";  
}
$('div>button').eq(1).text("кіру").height(50).width(188);
$('#cet').css({width:"400px",float:"left"});
$('#cet').css("margin-right","2mm");
$('#tarix:visible').css("text-align","center");
$( function() {
  $( "#draggable" ).draggable();
} );


