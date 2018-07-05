$(function() {
     $.ajax({url: "mapas/castilla.html", success: function(result){
            $("#contenido4").html(result); 
        }});
});

function aulasfaeh(){
        $.ajax({url: "cast/salas/aulasfaeh.html", success: function(result){
            $("#contenido4").html(result);
        }});
};

function estudio(){
        $.ajax({url: "cast/salas/estudio.html", success: function(result){
            $("#contenido4").html(result);
        }});
};

function gimta(){
        $.ajax({url: "cast/salas/gimta.html", success: function(result){
            $("#contenido4").html(result);
        }});
};

function servest(){
        $.ajax({url: "cast/edificios/servest.html", success: function(result){
            $("#contenido4").html(result);
        }});
};

function faeh(){
        $.ajax({url: "cast/edificios/faeh.html", success: function(result){
            $("#contenido4").html(result);
        }});
};

function sociales(){
        $.ajax({url: "cast/edificios/sociales.html", success: function(result){
            $("#contenido4").html(result);
        }});
};

function cacino(){
        $.ajax({url: "cast/otros/cacino.html", success: function(result){
            $("#contenido4").html(result);
        }});
};

function biblio(){
        $.ajax({url: "cast/otros/biblio.html", success: function(result){
            $("#contenido4").html(result);
        }});
};