
$(function() {
     $.ajax({url: "fdo.html", success: function(result){
            $("#contenido2").html(result); 
        }});
    //----------------------
    
    //----------------------
});

function salasa(){
        $.ajax({url: "salasa.html", success: function(result){
            $("#contenido2").html(result);
        }});
};

function salasb(){
        $.ajax({url: "salasb.html", success: function(result){
            $("#contenido2").html(result);
        }});
};

function salasc(){
        $.ajax({url: "salasc.html", success: function(result){
            $("#contenido2").html(result);
        }});
};

function salasd(){
        $.ajax({url: "salasd.html", success: function(result){
            $("#contenido2").html(result);
        }});
};
