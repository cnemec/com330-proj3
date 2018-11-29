function opengal(images){
  var expandimg = document.getElementById("expandedImg");
    expandimg.src = images.src;
    var fme = images.src.slice(-16);
  if(fme == "ibfanartmini.jpg"){
    expandimg.src = "ibfanart.jpg";
  }
  var fme = images.src.slice(-17);
  if(fme == "ibfanart2mini.jpg"){
    expandimg.src = "ibfanart2.jpg";
  }
  else if(fme == "ibfanar3tmini.jpg"){
    expandimg.src = "ibfanart3.jpg";
  }
  else if(fme == "ibfanart4mini.jpg"){
    expandimg.src = "ibfanart4.jpg";
  }
  else if(fme == "ibfanart5mini.jpg"){
    console.log("here");
    expandimg.src = "ibfanart5.jpg";
  }
  expandedImg.style.display = "block";
  document.getElementById("galleryset").style.display = "block";

}
