Bookmarklet that will convert your Wordle Results into Reddit Formatted text.

# Installation

Drag and drop the following link into your Bookmark Bar

[Wordle4Reddit](javascript:(function(){
  
  var input= document.getElementsByTagName("textarea")[0].value.split("\n")
  var output = input.slice(0,2);
  for( i = 2; i < input.length; i++){
    output.push(input[i].split(" ")[0] + " >!" + input[i].split(" ")[1] + "!<", "")
  }
  document.getElementsByTagName("textarea")[0].value = output.join("\n");

})();)

# Usage

1. Copy and Paste your Wordle Results into the Reddit textbox.  
2. Add your Guesses to the right side of each line. 
3. Click the Bookmark.  The text should be replaced with properly formatted text.
