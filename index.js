
/* get the modals */
var modal1 = document.getElementById('imgModal1');
var modal2 = document.getElementById('imgModal2');
var modal3 = document.getElementById('imgModal3');
var modal4 = document.getElementById('imgModal4');
var modal5 = document.getElementById('imgModal5');
var modal6 = document.getElementById('imgModal6');
var modal7 = document.getElementById('imgModal7');
var modal8 = document.getElementById('imgModal8');

/* get image and insert in modal - use its "alt" text as a caption */
var img1 = document.getElementById('img-first');
var modalImg1 = document.getElementById('img-01');
var captionText = document.getElementById('caption');
img1.onClick = function() {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText.innerHTML = this.alt;
}

/* second */
var img2 = document.getElementById('img-second');
var modalImg2 = document.getElementById('img-02');
var captionText2 = document.getElementById('caption2');
img2.onClick = function() {
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
}
/* third */
var img3 = document.getElementById('img-third');
var modalImg3 = document.getElementById('img-03');
var captionText3 = document.getElementById('caption3');
img3.onClick = function() {
  modal3.style.display = "block";
  modalImg3.src = this.src;
  captionText3.innerHTML = this.alt;
}
/* fourth*/
var img4 = document.getElementById('img-fourth');
var modalImg4 = document.getElementById('img-04');
var captionText4 = document.getElementById('caption4');
img4.onClick = function() {
  modal4.style.display = "block";
  modalImg4.src = this.src;
  captionText4.innerHTML = this.alt;
}
/* fifth */
var img5 = document.getElementById('img-fifth');
var modalImg5 = document.getElementById('img-05');
var captionText5 = document.getElementById('caption5');
img5.onClick = function() {
  modal5.style.display = "block";
  modalImg5.src = this.src;
  captionText5.innerHTML = this.alt;
}
/* sixth */
var img6 = document.getElementById('img-sixth');
var modalImg6 = document.getElementById('img-06');
var captionText6 = document.getElementById('caption6');
img6.onClick = function() {
  modal6.style.display = "block";
  modalImg6.src = this.src;
  captionText6.innerHTML = this.alt;
}
/* seventh */
var img7 = document.getElementById('img-seventh');
var modalImg7 = document.getElementById('img-07');
var captionText7 = document.getElementById('caption7');
img7.onClick = function() {
  modal7.style.display = "block";
  modalImg7.src = this.src;
  captionText7.innerHTML = this.alt;
}
/* eighth*/
var img8 = document.getElementById('img-eighth');
var modalImg8 = document.getElementById('img-08');
var captionText8 = document.getElementById('caption8');
img8.onClick = function() {
  modal8.style.display = "block";
  modalImg8.src = this.src;
  captionText8.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

// second
var span2 = document.getElementsByClassName("close2")[0];

// third
var span3 = document.getElementsByClassName("close3")[0];

// fourth
var span4 = document.getElementsByClassName("close4")[0];

// fifth
var span5 = document.getElementsByClassName("close5")[0];

// sixth
var span6 = document.getElementsByClassName("close6")[0];

// seventh
var span7 = document.getElementsByClassName("close7")[0];

// eighth
var span8 = document.getElementsByClassName("close8")[0];

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

// second
span2.onclick = function() {
  modal2.style.display = "none";
}

// third
span3.onclick = function() {
  modal3.style.display = "none";
}

// fourth
span4.onclick = function() {
  modal4.style.display = "none";
}

// fifth
span5.onclick = function() {
  modal5.style.display = "none";
}

// sixth
span6.onclick = function() {
  modal6.style.display = "none";
}

// seventh
span7.onclick = function() {
  modal7.style.display = "none";
}

// eighth
span8.onclick = function() {
  modal8.style.display = "none";
}
