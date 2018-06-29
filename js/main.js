  // Variables
  let fileBtn = document.getElementById("file");
  let customText = document.getElementById("browse");
  let uploadForm = document.getElementById("form");

    fileBtn.addEventListener("change", function(){
      if (fileBtn.value){
        customText.placeholder = fileBtn.value.match(/[^\\/]*$/)[0];
      }
    });

// Load file
  let loadFile = function(event){
  let name = document.getElementById("name").value;
  let output = document.getElementById("gallery");
  let description = document.getElementById("description").value;
  let file = document.getElementById("file");
  let customText = document.getElementById("browse");

  // Validate before upload
  if (name == '') {
      alert("Image name required.");
      return;
  } else if (file.value == '') {
      alert("Please select file.");
      return;
    }
  let src = URL.createObjectURL(file.files[0]);

  // Create and display image
  let div = document.createElement('div');
  div.innerHTML = '<img class="myImg" src="'+src+'">'+
                  '<h5 class="myName">'+name+'</h5>'+
                  '<p class="myDesc">'+description+'</p>';
  output.appendChild(div);
  file.value = "";
  customText.placeholder = "No file selected";
  alert("Image added");
};
