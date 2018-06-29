  // Get modal
  let modal = document.getElementById("myModal");
  let i;

  // Get image
  let img = document.getElementsByClassName("myImg");
  let myName = document.getElementsByClassName("myName");
  let myDesc = document.getElementsByClassName("myDesc");
  let modalImg = document.getElementById("showImg");
  let modalName = document.getElementById("imgName");
  let modalDesc = document.getElementById("imgDesc");
  let next = document.getElementById("next");
  let prev = document.getElementById("prev");

   // Loop through images
   for(i=0; i < img.length; i++){
      img[i].onclick = function(){
        currentImg = this.id;
        modal.style.display = "block";
        modalImg.src = this.src;
        modalName.innerHTML = this.parentElement.getElementsByClassName("myName")[0].innerHTML;
        modalDesc.innerHTML = this.parentElement.getElementsByClassName("myDesc")[0].innerHTML;
    };
      // Next image
      next.addEventListener("click", function(){
        modal.style.display = "block";
        if (currentImg >= img.length-1) {
          currentImg = 0;
          modalImg.src = img[currentImg].src;
          modalName.innerHTML = myName[currentImg].innerHTML;
          modalDesc.innerHTML = myDesc[currentImg].innerHTML;
        }
        currentImg++;
          modalImg.src = img[currentImg].src;
          modalName.innerHTML = myName[currentImg].innerHTML;
          modalDesc.innerHTML = myDesc[currentImg].innerHTML;
      });

      // Prev Image
      prev.addEventListener("click", function(){
        modal.style.display = "block";
        if (currentImg == 0) {
          currentImg = img.length-1;
          modalImg.src = img[currentImg].src;
          modalName.innerHTML = myName[currentImg].innerHTML;
          modalDesc.innerHTML = myDesc[currentImg].innerHTML;
        }
        modalImg.src = img[currentImg].src;
        modalName.innerHTML = myName[currentImg].innerHTML;
        modalDesc.innerHTML = myDesc[currentImg].innerHTML;
        currentImg--;
      });
      }


  // Get close button
  let span = document.getElementsByClassName("close")[0];

  // Click X to close modal
  span.onclick = function() {
     modal.style.display = "none";
  }

  // Click outside of modal to close it
  window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
  }
