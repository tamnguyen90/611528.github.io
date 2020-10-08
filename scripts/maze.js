var win = false;
$(document).ready(function () {
  $(".boundary").mouseover(loseEffect);
  $("#end").mouseover(end);
  $("#maze").mouseleave(loseEffect);
  $("#start").click(start);
});
function loseEffect() {
  if (!win) {
    $(".boundary").addClass("youlose");
    $("#status").html("You lose!");
  }
}
function start() {
  $(".boundary").removeClass("youlose");
  $("#status").html("Playing...");
  win = false;
}
function end() {
  $("#status").html("You win!");
  win = true;
}
