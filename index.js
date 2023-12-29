/* Grab nav elements, and add class active "onclick" */
var navigation = document.getElementById("myNav");
var navLinks = navigation.getElementsByClassName("nav-link");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

/* Get the Modal, modal img and caption text */
var modal1 = document.getElementById('imgModal1');
var modalImg1 = document.getElementById('img-01');
var captionText = document.getElementById('caption');

var modal2 = document.getElementById('imgModal2');
var modalImgUb = document.getElementById('img-ub');
var captionText2 = document.getElementById('caption2');

var modal3 = document.getElementById('imgModal3');
var modalImgCFbefore = document.getElementById('img-clickf-b');
var captionText3 = document.getElementById('caption3');

var modal4 = document.getElementById('imgModal4');
var modalImgCFafter = document.getElementById('img-clickf-a');
var captionText4 = document.getElementById('caption4');

var modal5 = document.getElementById('imgModal5');
var modalImgjavaS = document.getElementById('img-javas');
var captionText5 = document.getElementById('caption5');

/* get first certificate image and insert in modal - use its "title" text as a caption
var img1 = document.getElementById('img-first');
img1.onclick = function() {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText.innerHTML = this.title;
  navigation.style.zIndex = 2;
}

/* second certificate image
var img1 = document.getElementById('img-second');
img1.onclick = function() {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText.innerHTML = this.title;
  navigation.style.zIndex = 2;
}

/* third certificate image
var img1 = document.getElementById('img-third');
img1.onclick = function() {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText.innerHTML = this.title;
  navigation.style.zIndex = 2;
}

/* fourth certificate image
var img1 = document.getElementById('img-fourth');
img1.onclick = function() {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText.innerHTML = this.title;
  navigation.style.zIndex = 2;
}

/* fifth certificate image
var img1 = document.getElementById('img-fifth');
img1.onclick = function() {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText.innerHTML = this.title;
  navigation.style.zIndex = 2;
}

/* sixth certificate image
var img1 = document.getElementById('img-sixth');
img1.onclick = function() {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText.innerHTML = this.title;
  navigation.style.zIndex = 2;
}

/* seventh certificate image
var img1 = document.getElementById('img-seventh');
img1.onclick = function() {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText.innerHTML = this.title;
  navigation.style.zIndex = 2;
}

/* eighth certificate image
var img1 = document.getElementById('img-eighth');
img1.onclick = function() {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText.innerHTML = this.title;
  navigation.style.zIndex = 2;
}

/* ninth(uber) certificate image */
var img1 = document.getElementById('img-ninth');
img1.onclick = function() {
  modal2.style.display = "block";
  modalImgUb.src = this.src;
  captionText2.innerHTML = this.alt;
  navigation.style.zIndex = 2;
}

/* tenth certificate image
var img1 = document.getElementById('img-tenth');
img1.onclick = function() {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText.innerHTML = this.title;
  navigation.style.zIndex = 2;
}

/* eleventh certificate image
var img1 = document.getElementById('img-eleventh');
img1.onclick = function() {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText.innerHTML = this.title;
  navigation.style.zIndex = 2;
}

/* twelth certificate image
var img1 = document.getElementById('img-twelth');
img1.onclick = function() {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText.innerHTML = this.title;
  navigation.style.zIndex = 2;
}

/* thirteenth certificate image
var img1 = document.getElementById('img-thirteenth');
img1.onclick = function() {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText.innerHTML = this.title;
  navigation.style.zIndex = 2;
}
*/
/* clickfunnels before image*/
var img1 = document.getElementById('img-fourteenth');
img1.onclick = function() {
  modal3.style.display = "block";
  modalImgCFbefore.src = this.src;
  // captionText3.innerHTML = this.alt;
  navigation.style.zIndex = 2;
}

/* clickfunnels after image*/
var img1 = document.getElementById('img-fifteenth');
img1.onclick = function() {
  modal4.style.display = "block";
  modalImgCFafter.src = this.src;
  // captionText4.innerHTML = this.alt;
  navigation.style.zIndex = 2;
}

/* JavaScript Online image */
var img1 = document.getElementById('img-javascript');
img1.onclick = function() {
  modal5.style.display = "block";
  modalImgjavaS.src = this.src;
  captionText5.innerHTML = this.title;
  navigation.style.zIndex = 2;
}

/* React Tutorial App image */
var img1 = document.getElementById('img-react');
img1.onclick = function() {
  modal5.style.display = "block";
  modalImgjavaS.src = this.src;
  captionText5.innerHTML = this.title;
  navigation.style.zIndex = 2;
}
/* Get the <span> element that closes the modal */
var span1 = document.getElementsByClassName("exit")[0];
var span2 = document.getElementsByClassName("exit2")[0];
var span3 = document.getElementsByClassName("exit3")[0];
var span4 = document.getElementsByClassName("exit4")[0];
var span5 = document.getElementsByClassName("exit5")[0];

/* close the modal onclick of the <span> x */
span1.onclick = function() {
  modal1.style.display = "none";
  navigation.style.zIndex = 3;
}

span2.onclick = function() {
  modal2.style.display = "none";
  navigation.style.zIndex = 3;
}

span3.onclick = function() {
  modal3.style.display = "none";
  navigation.style.zIndex = 3;
}

span4.onclick = function() {
  modal4.style.display = "none";
  navigation.style.zIndex = 3;
}

span5.onclick = function() {
  modal5.style.display = "none";
  navigation.style.zIndex = 3;
}

var offset = 0;

$('.navbar li a').click(function(event) {
    event.preventDefault();
    $($(this).attr('href'))[0].scrollIntoView();
    scrollBy(0, -offset);
});

function handleDownloadClick() {
  var divContents = $("#html-page").html();
  console.log(divContents.indexOf(`<div id="footStuff">`));
  var contentToPrint = divContents.substring(2220, 25044);
  console.log(contentToPrint);
  var printWindow = window.open('', '', 'height=400,width=800');
  printWindow.document.write('<html><head><title>Sam-H-Resume</title>');
  printWindow.document.write('</head><body >');
  printWindow.document.write(contentToPrint);
  printWindow.document.write('</body></html>');
  printWindow.document.close();
  printWindow.print();
}

  let modes = document.querySelectorAll(".modal1");
  console.log(modes);

  let nav = document.querySelector("#myNav");
  [...modes].forEach(mode => {
    console.log(mode.style);
    if (mode.style.display === "block") {
      console.log("success");
    }
  })
