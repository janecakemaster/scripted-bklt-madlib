function generateMadlib() {
  
  // This is the starting story
  var story = 'Welcome to ScriptEd! Our mascot is the PLURAL_NOUN. We love to VERB!';

  var inputValue = $('#plural-noun-1').val();
  story = story.replace("PLURAL_NOUN", inputValue);
  
  inputValue = $('#verb').val();
  story = story.replace("VERB", inputValue);
  
  // This writes the story when the user clicks the "Generate MadLib" button"
  $('#result').text(story);
}

$(document).ready(function() {
	$('.btn').click(function() {
		generateMadLib();	
	})
});
