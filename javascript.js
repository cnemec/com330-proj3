function opengal(images){
  var expandimg = document.getElementById("expandedImg");
  if(images.src == "ibfanartmini.jpg"){
    expandimg.src = "ibfanartmini.jpg";
  }
  else if(images.src == "ibfanartmini2.jpg"){
    expandimg.src = "ibfanartmini2.jpg";
  }
  else if(images.src == "ibfanartmini3.jpg"){
    expandimg.src = "ibfanartmini3.jpg";
  }
  else if(images.src == "ibfanartmini4.jpg"){
    expandimg.src = "ibfanartmini4.jpg";
  }
  else if(images.src == "ibfanartmini5.jpg"){
    expandimg.src = "ibfanartmini5.jpg";
  }
  expandedImg.style.display = "block";
  document.getElementById("galleryset").style.display = "block";

}
