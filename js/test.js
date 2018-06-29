// // Variables
// let fileBtn = document.getElementById("file");
// let customText = document.getElementById("browse");
// let uploadForm = document.getElementById("form");
//
//   fileBtn.addEventListener("change", function(){
//     if (fileBtn.value){
//       customText.placeholder = fileBtn.value.match(/[^\\/]*$/)[0];
//     }
//   });
//
// // Load file
// let loadFile = function(event){
// let file = document.getElementById("file");
// let customText = document.getElementById("browse");
// let imageName = document.getElementById("name");
//
//   let src = URL.createObjectURL(file.files[0]);
//
// // Creates photo
// function render(data){
//   let div = document.createElement('div');
//   div.innerHTML = "<img src='"+data.iImg+"' class='myImg' id="+data.Id+">"+
//   "<h5 class='myName'>"+data.iName+"</h5>"+
//   "<p class='myDesc'>"+data.iDesc+"</p>",
//   galleryArea.appendChild(div);
// };
//
// let addImage = document.getElementById("push");
// let galleryArea = document.getElementById("gallery");
// let imageDesc = document.getElementById("description");
//
// let images = [];
//
// // Loops through image array
// for (let i = 0; i < images.length; i++) {
//   render(images[i]);
// }
//
// // Submits image and displays on html
// addImage.addEventListener("click", function(){
//   let addObj = {
//     "Id" : images.length,
//     "iImg" : src,
//     "iName": imageName.value,
//     "iDesc": imageDesc.value,
//   };
//   images.push(addObj);
//   render(addObj);
//   src = "";
//   file.value = "";
//   imageName.value = "";
//   imageDesc.value = "";
//   customText.placeholder = "No file selected";
// });
// }
