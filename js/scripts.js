$(document).ready(function(){
  $("button#answer").click(function marks(event){

    event.preventDefault();
    var question1 = parseInt($("input:radio[name = question1]:checked").val());
    var question2 = parseInt($("input:radio[name = question2]:checked").val());
    var question3 = parseInt($("input:radio[name = question3]:checked").val());
    var question4 = parseInt($("input:radio[name = question4]:checked").val());
    var question5 = parseInt($("input:radio[name = question5]:checked").val());
    var question6 = parseInt($("input:radio[name = question6]:checked").val());
    var question7 = parseInt($("input:radio[name = question7]:checked").val());
    var question8 = parseInt($("input:radio[name = question8]:checked").val());

    var total = question1 + question2 + question3 + question4 + question5 + question6 + question7 + question8;
    totalpercentage=(total/80)*100;

    document.getElementById("result").innerHTML = "Your total score is " + totalpercentage + "%";
  });
});
