function generateMadlib() {
  
  // This is the starting story
  var story = "Welcome to ScriptEd! Our mascot is the PLURAL_NOUN.  We love to VERB! ";

  var inputValue = document.getElementById("plural-noun-1").value;
  story = story.replace("PLURAL_NOUN", inputValue);
  
  inputValue = document.getElementById("verb").value;
  story = story.replace("VERB", inputValue);
  
  // This writes the story when the user clicks the "Generate MadLib" button"
  document.getElementById("result").innerHTML = story;
}
