
$(function() {
     $.ajax({url: "mapas/andres.html", success: function(result){
            $("#contenido3").html(result); 
        }});
});

function psico(){
        $.ajax({url: "andres/salas/psico.html", success: function(result){
            $("#contenido3").html(result);
        }});
};

function labs(){
        $.ajax({url: "andres/salas/labs.html", success: function(result){
            $("#contenido3").html(result);
        }});
};

function salase(){
        $.ajax({url: "andres/salas/E.html", success: function(result){
            $("#contenido3").html(result);
        }});
};

function museo(){
        $.ajax({url: "andres/edificios/museo.html", success: function(result){
            $("#contenido3").html(result);
        }});
};

function cacino(){
        $.ajax({url: "andres/edificios/cacino.html", success: function(result){
            $("#contenido3").html(result);
        }});
};

function casa(){
        $.ajax({url: "andres/edificios/casa.html", success: function(result){
            $("#contenido3").html(result);
        }});
};

function estadio(){
        $.ajax({url: "andres/canchas/estadio.html", success: function(result){
            $("#contenido3").html(result);
        }});
};

function rugby(){
        $.ajax({url: "andres/canchas/rugby.html", success: function(result){
            $("#contenido3").html(result);
        }});
};

function baby(){
        $.ajax({url: "andres/canchas/baby.html", success: function(result){
            $("#contenido3").html(result);
        }});
};

function tenis(){
        $.ajax({url: "andres/canchas/tenis.html", success: function(result){
            $("#contenido3").html(result);
        }});
};

function camarines(){
        $.ajax({url: "andres/otros/camarines.html", success: function(result){
            $("#contenido3").html(result);
        }});
};

function otro(){
        $.ajax({url: "andres/otros/otro.html", success: function(result){
            $("#contenido3").html(result);
        }});
};
