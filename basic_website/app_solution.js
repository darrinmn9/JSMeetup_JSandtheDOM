function addElement(){

  var myDiv = document.getElementById('entry1');
  var lastP = document.getElementsByTagName('p')[1];


  //create an Element node
  var newP = document.createElement("p");
  newP.innerHTML = "Recently added!";

  //create a Text node
  // var newContent = document.createTextNode("Recently added!");


  //add the text node to the newly created div.
  // newP.appendChild(newContent);

  // add the newly created element and its content into the DOM
  myDiv.insertBefore(newP, lastP);




  var myAlert = function(){
    alert("i've been clicked");
    lastP.removeEventListener('click', myAlert);
  };

  lastP.addEventListener('click', myAlert);

}


/*  The load event fires at the end of the document loading process. At this point,
    all of the objects in the document are in the DOM, and all the images, scripts,
    links and sub-frames have finished loading.
*/
window.onload = addElement;



$(function(){

  var lastP = $("p")[1];
  lastP.before("<p>Recently added!</p>");

  lastP.click(function(){
    alert("i've been clicked");
    $(this).unbind('click');
  });
});
