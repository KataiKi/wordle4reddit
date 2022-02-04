javascript:(function(){
  
  var input;
  var elem;
  
  if(elem = document.querySelector('textarea')) input = elem.value.split("\n"); // Old Reddit
  else if (elem = document.querySelector('span[data-text="true"]')) input = elem.innerHTML.split("\n"); // New Reddit
  
  var output = input.slice(0,2);
  for( i = 2; i < input.length; i++){
    output.push(input[i].split(" ")[0] + " >!" + input[i].split(" ")[1] + "!<", "")
  }
  
  if(elem.tagName == "TEXTAREA") elem.value = output.join("\n"); // Old Reddit
  else if(elem.tagName == "SPAN") elem.innerHTML = output.join("\n"); // New Reddit

})();
