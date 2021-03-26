// After loading the DOM, execute the processing in function()
$(document).ready(function(){
  // Create a logic that gets the input values of [Japanese score, English score, math score, science score, social score] and gives the total score and average score.
  function score_indicate(){
    // In the variable "subject_points"
    // Substitute the array of [Japanese score, English score, math score, science score, social score].
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    // In the variable "sum"
    // Add [Japanese score, English score, math score, science score, social score] respectively.
    // Hint! Take out the arrays one by one and add them.
    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];
    // Output the variable "sum" (total score) to "total score:" (id = "sum_indicate").
    $("#sum_indicate").text(sum);

    // Dans la variable "average"
    // Calculez la valeur moyenne et substituez-la. (Score total du nombre que vous voulez moyenner (somme) / Nombre total)
    // Astuce ! Utilisez la méthode de la longueur pour trouver le nombre total. (méthode length : Méthode permettant d'obtenir la longueur de la chaîne de caractères, le nombre d'éléments du tableau, etc.)
    var average = sum/5;
    $("#average_indicate").text(average);
  };
  // Obtenez le score moyen et créez la logique pour classer ("A", "B", "C", "D") à partir du score moyen obtenu.
  function get_achievement(){

    // Dans la variable "averageIndicate"
    // Obtenir le score moyen à partir de id = "average_indicate" sur HTML et le substituer.
    let averageIndicate = $("#average_indicate").text();
    console.log(averageIndicate)
    // If "averageIndicate" is 80 or higher, "A" is returned.
    if ( averageIndicate >= 80){
      return "A";
      // If "averageIndicate" is 60 or more, "B" is returned.
    } else if ( averageIndicate >= 60) {
      return "B";
      // If "averageIndicate" is 40 or more, "C" is returned.
    } else if ( averageIndicate >= 40) {
      return "C";
      // If "averageIndicate" is any other score, "D" is returned.
    } else {
      return "D";
    }
  };
  // Obtenez le score de chaque matière et faites la logique pour juger de la réussite ou de l'échec à partir du score obtenu.
  function get_pass_or_failure(){
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    // Substituer le nombre de sujets saisis dans la variable "number".
    let number = subject_points.length;
    // Assignez "pass" à la variable "judge".
    let judge = "Pass";
    // Si le score de chaque sujet saisi est inférieur à 60 points, "Judge" est réaffecté à la variable "judge" et "judge" est retourné.
    // Astuce ! Essayez de rechercher "javascript score pass / fail logic".
    for (i=0; i<number; i++) {
    if (subject_points[i] < 60) {
      judge = "Echec";
    break;
      }
     }
      return judge;
  };
  // Créer la logique du juge final.
  function judgement(){
    // Attribuez la "valeur de retour de get_achievement ()" à la variable "achievement".
    let achievement = get_achievement();
    // Substitute "return value of get_pass_or_failure ()" for variable "pass_or_failure".
    let pass_or_failure = get_pass_or_failure();
    // 「Result」(id="alert-indicate) press the button「Your grade is${achievement}で${pass_or_failure}です」 is the output process.
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">Ton grade est ${achievement} et ${pass_or_failure}</label>`);
  };
  // This process fires "function score_indicate ()" when any of the scores in [Japanese score, English score, math score, science score, social score] is changed.
  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });
  // When you press the "Rank" (id = "evaluation") button, "get_achievement ()" is output.
  $('#btn-evaluation').click(function() {
    $("#evaluation").text(get_achievement());
  });
  // When you press the "judgment" (id = "btn-judge") button, "function et_pass_or_failure ()" is output.
    $('#btn-judge').click(function() {
    $("#judge").text(get_pass_or_failure());
  });
  // When you press the "Final Judgment" (id = "btn-declaration") button, "function judgment ()" is output.
  $('#btn-declaration').click(function() {
  $("#declaration").text(judgement());
  });
});
// The description of js written here is just a template prepared as a hint, so if you want to implement it without following the description written, you can implement it as you like. assignment requirements are met and the quality of the code is determined to be at a certain level.
// In the example, both JavaScript and jQuery are used, but you can use either one.
