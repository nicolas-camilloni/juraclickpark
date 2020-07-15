$( document ).ready(function() {

    // GESTION BREADCRUMB ( Accueil / Mon compte / Value )

    $("#list-infos-list").click(function() {
        $("#modifBreadcrumb").html("Mes informations");
        $(".profileError").remove();
    })

    $("#list-docs-list").click(function() {
        $("#modifBreadcrumb").html("Mes documents");
        $(".profileError").remove();
    })

    $("#list-password-list").click(function() {
        $("#modifBreadcrumb").html("Changement de mot de passe");
        $(".profileError").remove();
    })

    // PASSWORD FORM

    $("#apasswordProfil").focus(function() {
        $("#apasswordProfilLabel").removeClass("formProfilLabel labelGrey");
        $("#apasswordProfilLabel").addClass("formProfilLabelFocus transitionLabel");
    })

    $("#apasswordProfil").blur(function() {
        if ( $("#apasswordProfil").val() == "" ) {
            $("#apasswordProfil").addClass("formProfil");
            $("#apasswordProfilLabel").addClass("formProfilLabel");
            $("#apasswordProfilLabel").removeClass("formProfilLabelFocus");
            $("#apasswordProfilLabel").addClass("formProfilLabel transitionLabel");
        }
        else {
            $("#apasswordProfilLabel").addClass("labelGrey");
        }
    })

    $("#passwordProfil").focus(function() {
        $("#passwordProfilLabel").removeClass("formProfilLabel labelGrey");
        $("#passwordProfilLabel").addClass("formProfilLabelFocus transitionLabel");
    })

    $("#passwordProfil").blur(function() {
        if ( $("#passwordProfil").val() == "" ) {
            $("#passwordProfil").addClass("formProfil");
            $("#passwordProfilLabel").addClass("formProfilLabel");
            $("#passwordProfilLabel").removeClass("formProfilLabelFocus");
            $("#passwordProfilLabel").addClass("formProfilLabel transitionLabel");
        }
        else {
            $("#passwordProfilLabel").addClass("labelGrey");
        }
    })

    $("#cpasswordProfil").focus(function() {
        $("#cpasswordProfilLabel").removeClass("formProfilLabel labelGrey");
        $("#cpasswordProfilLabel").addClass("formProfilLabelFocus transitionLabel");
    })

    $("#cpasswordProfil").blur(function() {
        if ( $("#cpasswordProfil").val() == "" ) {
            $("#cpasswordProfil").addClass("formProfil");
            $("#cpasswordProfilLabel").addClass("formProfilLabel");
            $("#cpasswordProfilLabel").removeClass("formProfilLabelFocus");
            $("#cpasswordProfilLabel").addClass("formProfilLabel transitionLabel");
        }
        else {
            $("#cpasswordProfilLabel").addClass("labelGrey");
        }
    })

    // END OF PASSWORD FORM

    // PROFIL FORM


    if ( $("#pseudoProfil").val() != "" ) {
        // $("#pseudoProfil").removeClass("formProfil");
        $("#pseudoProfilLabel").addClass("formProfilLabelFocus");
        $("#pseudoProfilLabel").addClass("formProfilLabel labelGrey");
        $("#pseudoProfilLabel").removeClass("formProfilLabel transitionLabel");
    }
    else {
        $("#pseudoProfilLabel").addClass("labelGrey");
    }

    if ( $("#emailProfil").val() != "" ) {
        // $("#emailProfil").removeClass("formProfil");
        $("#emailProfilLabel").addClass("formProfilLabelFocus");
        $("#emailProfilLabel").addClass("formProfilLabel labelGrey");
        $("#emailProfilLabel").removeClass("formProfilLabel transitionLabel");
    }
    else {
        $("#emailProfilLabel").addClass("labelGrey");
    }

    if ( $("#telProfil").val() != "" ) {
        // $("#telProfil").removeClass("formProfil");
        $("#telProfilLabel").addClass("formProfilLabelFocus");
        $("#telProfilLabel").addClass("formProfilLabel labelGrey");
        $("#telProfilLabel").removeClass("formProfilLabel transitionLabel");
    }
    else {
        $("#telProfilLabel").addClass("labelGrey");
    }

    $("#pseudoProfil").focus(function() {
        $("#pseudoProfilLabel").removeClass("formProfilLabel labelGrey");
        $("#pseudoProfilLabel").addClass("formProfilLabelFocus transitionLabel");
    })

    $("#pseudoProfil").blur(function() {
        if ( $("#pseudoProfil").val() == "" ) {
            $("#pseudoProfil").addClass("formProfil");
            $("#pseudoProfilLabel").addClass("formProfilLabel");
            $("#pseudoProfilLabel").removeClass("formProfilLabelFocus");
            $("#pseudoProfilLabel").addClass("formProfilLabel transitionLabel");
        }
        else {
            $("#pseudoProfilLabel").addClass("labelGrey");
        }
    })

    $("#statusProfil").focus(function() {
        $("#statusProfilLabel").removeClass("formProfilLabel labelGrey");
        $("#statusProfilLabel").addClass("formProfilLabelFocus transitionLabel");
    })

    $("#statusProfil").blur(function() {
        if ( $("#statusProfil").val() == "" ) {
            $("#statusProfil").addClass("formProfil");
            $("#statusProfilLabel").addClass("formProfilLabel");
            $("#statusProfilLabel").removeClass("formProfilLabelFocus");
            $("#statusProfilLabel").addClass("formProfilLabel transitionLabel");
        }
        else {
            $("#statusProfilLabel").addClass("labelGrey");
        }
    })

    $("#emailProfil").focus(function() {
        $("#emailProfilLabel").removeClass("formProfilLabel labelGrey");
        $("#emailProfilLabel").addClass("formProfilLabelFocus transitionLabel");
    })

    $("#emailProfil").blur(function() {
        if ( $("#emailProfil").val() == "" ) {
            $("#emailProfil").addClass("formProfil");
            $("#emailProfilLabel").addClass("formProfilLabel");
            $("#emailProfilLabel").removeClass("formProfilLabelFocus");
            $("#emailProfilLabel").addClass("formProfilLabel transitionLabel");
        }
        else {
            $("#emailProfilLabel").addClass("labelGrey");
        }
    })

    $("#telProfil").focus(function() {
        $("#telProfilLabel").removeClass("formProfilLabel labelGrey");
        $("#telProfilLabel").addClass("formProfilLabelFocus transitionLabel");
    })

    $("#telProfil").blur(function() {
        if ( $("#telProfil").val() == "" ) {
            $("#telProfil").addClass("formProfil");
            $("#telProfilLabel").addClass("formProfilLabel");
            $("#telProfilLabel").removeClass("formProfilLabelFocus");
            $("#telProfilLabel").addClass("formProfilLabel transitionLabel");
        }
        else {
            $("#telProfilLabel").addClass("labelGrey");
        }
    })

    $(".send-button").hover(function() {
        $(".send-button").addClass("transitionLabel");
    })

    // END OF PROFILE FORM

    // MES DOCUMENTS

    $("#list-docs-list").click(function() {
        $.ajax({
            url: 'includes/handlers/getMyFiles.php', // La ressource ciblée
            type: 'POST', // Le type de la requête HTTP
            data: { getmyfiles: "ok" },
            success: function(data){
                var result = jQuery.parseJSON(data);
                if ( result.length === 0 ) {
                    $("tbody").empty();
                    $("tbody").append("<tr><td colspan='4' class='text-center'>Aucun document disponible</td></tr>");
                }
                else {
                    var i = 1;
                    $("tbody").empty();
                    
                    $.each(result, function() {
                        
                        var path = this["lien"].substr(13);
                        $("tbody").append("<tr id='ligne"+i+"'><td>"+this["titre"]+"</td><td>"+this["type"]+"</td><td>"+this["modif"]+"</td><td class='btnDl text-center' id='dlDemande"+i+"'><a href='telecharger.php?name="+path+"'><span class='material-icons'>get_app</span></a></tr>");
                        i += 1;
                        // var id2 = this[0];
                    })
                }
            }
        })
    })

    // UPDATE PROFIL

    $("#submitProfil").click(function() {
        $.ajax({
            url: 'includes/handlers/updateProfile.php', // La ressource ciblée
            type: 'POST', // Le type de la requête HTTP
            data: { go: "ok", login: $("#pseudoProfil").val(), status: $("#statusProfil").val(), adresse: $("#emailProfil").val(), tel: $("#telProfil").val() },
            success: function(data){
                var result = $.parseHTML( data );
                console.log(result);
                $(".profileError").remove();
                $("#formUpdateProfile").append(result);
            }
        })
    })

    $("#submitPassword").click(function() {
        $.ajax({
            url: 'includes/handlers/updatePassword.php', // La ressource ciblée
            type: 'POST', // Le type de la requête HTTP
            data: { go: "ok", apassword: $("#apasswordProfil").val(), password: $("#passwordProfil").val(), cpassword: $("#cpasswordProfil").val() },
            success: function(data){
                var result = $.parseHTML( data );
                console.log(result);
                $("#apasswordProfil").val("");
                $("#passwordProfil").val("");
                $("#cpasswordProfil").val("");
                $(".profileError").remove();
                $("#formUpdatePassword").append(result);
            }
        })
    })

})