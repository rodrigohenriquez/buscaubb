$(function() {
     $.ajax({url: "home.html", success: function(result){
            $("#contenido").html(result); 
        }});
     
    $("#home").click(function(){
        $.ajax({url: "home.html", success: function(result){
            $("#contenido").html(result);
        }});
    });
    //----------------------
    $("#mapafd").click(function(){
        $.ajax({url: "mapafd.html", success: function(result){
            $("#contenido").html(result);
        }});
    });
        //----------------------
        //llamadaa nueva
    $("#mapaab").click(function(){
        $.ajax({url: "mapaab.html", success: function(result){
            $("#contenido").html(result);
        }});
    });
    //----------------------
    $("#mapacast").click(function(){
        $.ajax({url: "mapacast.html", success: function(result){
            $("#contenido").html(result);
        }});
    });
    //----------------------
    //----------------------
    $("#salasa").click(function(){
        $.ajax({url: "salasa.html", success: function(result){
            $("#contenido").html(result);
        }});
    });
    //----------------------
    $("#salasb").click(function(){
        $.ajax({url: "salasb.html", success: function(result){
            $("#contenido").html(result);
        }});
    });
    //----------------------
    $("#salasc").click(function(){
        $.ajax({url: "salasc.html", success: function(result){
            $("#contenido").html(result);
        }});
    });
    //----------------------
    $("#salasd").click(function(){
        $.ajax({url: "salasd.html", success: function(result){
            $("#contenido").html(result);
        }});
    });

});

function cargarAdmin(){
   
     $.ajax({url: "listadoContactos.php", success: function(result){
            $("#contenido").html(result);
        }});  
}