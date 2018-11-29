function opengal(images){
  var expandimg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  if(images.src = "ibfanartmini.jpg"){
    expandimg.src = "ibfanart.jpg";
  }
  else if(images.src = "ibfanartmini2.jpg"){
    expandimg.src = "ibfanart2.jpg";
  }
  else if(images.src = "ibfanartmini3.jpg"){
    expandimg.src = "ibfanart3.jpg";
  }
  else if(images.src = "ibfanartmini4.jpg"){
    expandimg.src = "ibfanart4.jpg";
  }
  else if(images.src = "ibfanartmini5.jpg"){
    expandimg.src = "ibfanart5.jpg";
  }
  imgText.innerHTML = images.alt;
  expandimg.parentElement.style.display = "block";
}
