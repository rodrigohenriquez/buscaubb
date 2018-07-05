
$(function() {
     $.ajax({url: "mapas/fdo.html", success: function(result){
            $("#contenido2").html(result); 
        }});
});

function salasa(){
        $.ajax({url: "fdomay/salas/salasa.html", success: function(result){
            $("#contenido2").html(result);
        }});
};

function salasb(){
        $.ajax({url: "fdomay/salas/salasb.html", success: function(result){
            $("#contenido2").html(result);
        }});
};

function salasc(){
        $.ajax({url: "fdomay/salas/salasc.html", success: function(result){
            $("#contenido2").html(result);
        }});
};

function salasd(){
        $.ajax({url: "fdomay/salas/salasd.html", success: function(result){
            $("#contenido2").html(result);
        }});
};

function labcen(){
        $.ajax({url: "fdomay/salas/labcen.html", success: function(result){
            $("#contenido2").html(result);
        }});
};

function gimta(){
        $.ajax({url: "fdomay/salas/gimta.html", success: function(result){
            $("#contenido2").html(result);
        }});
};

function gim(){
        $.ajax({url: "fdomay/salas/gim.html", success: function(result){
            $("#contenido2").html(result);
        }});
};

//////////////////////////////////////////////////////////////////////////////

function desest(){
        $.ajax({url: "fdomay/edificios/desest.html", success: function(result){
            $("#contenido2").html(result);
        }});
};

function mag(){
        $.ajax({url: "fdomay/edificios/mag.html", success: function(result){
            $("#contenido2").html(result);
        }});
};
function admincen(){
        $.ajax({url: "fdomay/edificios/admincen.html", success: function(result){
            $("#contenido2").html(result);
        }});
};

function deptocs(){
        $.ajax({url: "fdomay/edificios/deptocs.html", success: function(result){
            $("#contenido2").html(result);
        }});
};

function face(){
        $.ajax({url: "fdomay/edificios/face.html", success: function(result){
            $("#contenido2").html(result);
        }});
};

////////////////////////////////////////////////////////////////////////////

function cacino(){
        $.ajax({url: "fdomay/otros/cacino.html", success: function(result){
            $("#contenido2").html(result);
        }});
};
function cafe(){
        $.ajax({url: "fdomay/otros/cafe.html", success: function(result){
            $("#contenido2").html(result);
        }});
};

function bibl(){
        $.ajax({url: "fdomay/otros/bibl.html", success: function(result){
            $("#contenido2").html(result);
        }});
};

function fede(){
        $.ajax({url: "fdomay/otros/fede.html", success: function(result){
            $("#contenido2").html(result);
        }});
};
