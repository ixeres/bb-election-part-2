$(document).ready(function() {

  // Imagination! <- I get this reference! ... That's sad.

var rootURL = 'https://bb-election-api.herokuapp.com/'

  $.ajax({
  url: rootURL,
  method: 'GET',
  dataType: 'json'
}).done(function (responseData) {
  var candidates = responseData.candidates;
  // This simplifies the syntax for printing the results, using just 'candidates' to represent the response data.
  for (var i = 0; i < candidates.length; i++) {
    // for loop that iterates through multiple candidates. Let's break it down because I don't think I have anywhere in my notes for reference.
    //
    // Defines the starting variable 'i' at 0, then checks that variable against the total number of candidates, making sure it iterates once for each candidate of the total number of candidates ('.length'). Then increments the value 'i' by one. Repeat. I HOPE YOU UNDERSTAND THIS, FUTURE DEVIN.
    $('#list').append(listCandidates(candidates[i]));
    // Adds the complicated function list item assemblage from 'listCandidates' to the #list id in index.html.

    // UGHHH. REMEMBER WHERE YOUR TAGS ARE, DEVIN. JEEZ.
  };
});
    // Okay, let's try to sort out the display of the results and the voting in a less... Ugly... Fashion.

    function listCandidates(candidate) {
      var listItem = $('<li></li>');
      // Creates the li tags for listing candidates
      var voteForm = $('<form method="POST"</form>');
      // Inserts the form and POST method into each candidate instance.
      var button = $('<button id="votebutton"><input type="submit", value="VOTE!"></button>');
      // Inserts the button into the form
      var hidden = $('<input type="hidden", name="name">');
      //Inserts the hidden input type to associate each candidate's list item with their actual identity.

    // NOW, LET'S PUT IT ALL TOGETHER. Oh jeez.
    listItem.html(
    candidate.name + ' : ' + candidate.votes);
    //This should end up wrapped in the li tags. Now to add all the new stuff.
    voteForm.attr('action', rootURL + 'vote');
    // Instantiates the /vote page on submit action
    hidden.val(candidate.name);
    // VAL! Takes the place of value="" in HTML, associates list item with individual candidate name.
    voteForm.append(hidden).append(button);
    // Adds the hidden form and button and attaches them to each list item. Makes the form happen in each instance, essentially. I hope.
    return listItem.append(voteForm);
  };
    // Makes sure all the above jargon is packaged up nice and together before returning the final product. ... Right?
    function makeVote() {
      $('#votebutton').on('submit', function(e){
        e.preventDefault();
        // Halts the default action of the 'submit' button defined with class 'votingform'. Makes things asynchronous. IMPORTANT.
        //Now do the AJAX.
        $.ajax({
          url: $(this).attr('action'),
          method: $(this).attr('method'),
          dataType: 'json',
          data: $(this).serialize()
        }).done(function(data){

          //PUT THE LOG STUFF HERE. SUCCESS/FAIL/ALWAYS.
        })
      });
    };

});
