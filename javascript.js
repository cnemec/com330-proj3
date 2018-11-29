function opengal(images){
  var expandimg = document.getElementById("expandedImg");
    expandimg.src = images.src;
    console.log(images.src);
  if(images.src == "ibfanartmini.jpg"){
    expandimg.src = "ibfanart.jpg";
  }
  else if(images.src == "ibfanartmini2.jpg"){
    expandimg.src = "ibfanart2.jpg";
  }
  else if(images.src == "ibfanartmini3.jpg"){
    expandimg.src = "ibfanart3.jpg";
  }
  else if(images.src == "ibfanartmini4.jpg"){
    expandimg.src = "ibfanart4.jpg";
  }
  else if(images.src == "ibfanartmini5.jpg"){
    expandimg.src = "ibfanart5.jpg";
  }
  expandedImg.style.display = "block";
  document.getElementById("galleryset").style.display = "block";

}
