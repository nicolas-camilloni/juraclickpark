$( document ).ready(function() {

  $('.carousel').carousel({
      interval: 5000
  })

  $('#myList a').on('click', function (e) {
      e.preventDefault()
      $(this).tab('show')
  })

  $("#inscrire").click(function(){
      var login=$("#login").val();
      var email=$("#email").val();
      var status=$("#status").val();
      var tel=$("#tel").val();
      var password=$("#mdp").val();
      var mdpverif =$("#mdpval").val();
      var inscrire =$("#inscrire").val();
      $.ajax({
          url:'inscription.php',
          method:'POST',
          data:{inscrire:inscrire, login:login, status:status, tel:tel, email:email, mdp:password, mdpval:mdpverif},
          success:function(data){
            $("#messageretour").empty();
            $("#messageretour").append(`${data}`);
            if(data == true)
            {
              window.location.replace("connexion-form.php");
            }
          }
      });
  });

  $("#connexion").click(function(){
      var identifiant=$("#identifiant").val();
      var motdepasse=$("#motdepasse").val();
      var connexion =$("#connexion").val();
      $.ajax({
          url:'connexion.php',
          method:'POST',
          data:{connexion:connexion, identifiant:identifiant, motdepasse:motdepasse},
          success:function(data){
            $("#erreur").empty();
            $("#erreur").append(`${data}`);
            if(data == false)
            {
              $("#erreur").append(`Vous etes deja Connecter.`);
            }
            if(data == true)
            {
              window.location.replace("index.php");
            }
          }
      });
  });


  // ACTIVE PAGE HEADER
  var sPath = window.location.pathname;
  var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);

  if(sPage == "index.php") {
    $("#pageIndex").addClass("active alpanaBlue");
    $("#pageContact").removeClass("active alpanaBlue");
    $("#pageEntreprise").removeClass("active alpanaBlue");
    $("#pageEquipe").removeClass("active alpanaBlue");
    $("#pageMoncompte").removeClass("active alpanaBlue");
  }

  else if(sPage  == "contact.php") {
    $("#pageContact").addClass("active alpanaBlue");
    $("#pageIndex").removeClass("active alpanaBlue");
    $("#pageEntreprise").removeClass("active alpanaBlue");
    $("#pageEquipe").removeClass("active alpanaBlue");
    $("#pageMoncompte").removeClass("active alpanaBlue");
  }

  else if(sPage  == "entreprises.php") {
    $("#pageEntreprise").addClass("active alpanaBlue");
    $("#pageContact").removeClass("active alpanaBlue");
    $("#pageIndex").removeClass("active alpanaBlue");
    $("#pageEquipe").removeClass("active alpanaBlue");
    $("#pageMoncompte").removeClass("active alpanaBlue");
  }

  else if(sPage  == "equipe.php") {
    $("#pageEquipe").addClass("active alpanaBlue");
    $("#pageContact").removeClass("active alpanaBlue");
    $("#pageEntreprise").removeClass("active alpanaBlue");
    $("#pageIndex").removeClass("active alpanaBlue");
    $("#pageMoncompte").removeClass("active alpanaBlue");
  }
  
  else if(sPage  == "profil.php") {
    $("#pageMoncompte").addClass("active alpanaBlue");
    $("#pageContact").removeClass("active alpanaBlue");
    $("#pageEntreprise").removeClass("active alpanaBlue");
    $("#pageIndex").removeClass("active alpanaBlue");
  }

})
