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
        $.ajax({url: "mapas/mapafd.html", success: function(result){
            $("#contenido").html(result);
        }});
    });
        //----------------------
        //llamadaa nueva
    $("#mapaab").click(function(){
        $.ajax({url: "mapas/mapaab.html", success: function(result){
            $("#contenido").html(result);
        }});
    });
    //----------------------
    $("#mapacast").click(function(){
        $.ajax({url: "mapas/mapacast.html", success: function(result){
            $("#contenido").html(result);
        }});
    });

});
