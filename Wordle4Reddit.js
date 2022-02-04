javascript:(function(){
  
  var input= document.getElementsByTagName("textarea")[0].value.split("\n")
  var output = input.slice(0,2);
  for( i = 2; i < input.length; i++){
    output.push(input[i].split(" ")[0] + " >!" + input[i].split(" ")[1] + "!<", "")
  }
  document.getElementsByTagName("textarea")[0].value = output.join("\n");

})();
