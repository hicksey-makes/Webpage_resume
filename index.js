/* Get the Modal, modal img and caption text */
var modal1 = document.getElementById('imgModal1');
var modalImg1 = document.getElementById('img-01');
var captionText = document.getElementById('caption');

var modal2 = document.getElementById('imgModal2');
var modalImgUb = document.getElementById('img-ub');
var captionText2 = document.getElementById('caption2');

var img1 = document.getElementById('img-ninth');
img1.onclick = function() {
  modal2.style.display = "block";
  modalImgUb.src = this.src;
  captionText2.innerHTML = this.alt;
}

/* get first certificate image and insert in modal - use its "alt" text as a caption */
var img1 = document.getElementById('img-first');
img1.onclick = function() {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText.innerHTML = this.alt;
}

/* second certificate image */
var img1 = document.getElementById('img-second');
img1.onclick = function() {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText.innerHTML = this.alt;
}

/* third certificate image */
var img1 = document.getElementById('img-third');
img1.onclick = function() {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText.innerHTML = this.alt;
}

/* fourth certificate image */
var img1 = document.getElementById('img-fourth');
img1.onclick = function() {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText.innerHTML = this.alt;
}

/* fifth certificate image */
var img1 = document.getElementById('img-fifth');
img1.onclick = function() {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText.innerHTML = this.alt;
}

/* sixth certificate image */
var img1 = document.getElementById('img-sixth');
img1.onclick = function() {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText.innerHTML = this.alt;
}

/* seventh certificate image */
var img1 = document.getElementById('img-seventh');
img1.onclick = function() {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText.innerHTML = this.alt;
}

/* eighth certificate image */
var img1 = document.getElementById('img-eighth');
img1.onclick = function() {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText.innerHTML = this.alt;
}


/* Get the <span> element that closes the modal */
var span1 = document.getElementsByClassName("exit")[0];
var span2 = document.getElementsByClassName("exit2")[0];


/* close the modal onclick of the <span> x */
span1.onclick = function() {
  modal1.style.display = "none";
}

span2.onclick = function() {
  modal2.style.display = "none";
}
