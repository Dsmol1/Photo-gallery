// Variables
let commentArea = document.getElementById("commentArea");
let addComment = document.getElementById("addC");
let commentName = document.getElementById("cName");
let commentEmail = document.getElementById("cEmail");
let comment = document.getElementById("cComment");
let avatar = "src='images/avatar.png' class='avatar'";

// Creates comment area
function render(data){
  let div = document.createElement('div');
  div.className = "commentBox fadeIn";
  div.innerHTML = "<div class='gridAv avatar'><img "+data.Image+" class='avatar'></div>"+
                  "<div class='gridNa dynamicFix'><p class='cName'>"+data.cName+"</p></div>"+
                  // "<div class='cEmail'>"+data.cEmail+"</div>"+
                  "<div class='gridCo'><p class='cComment'>"+data.cComment+"</p></div>";

  commentArea.appendChild(div);
};

window.onload = function(){

  let comments = [];

  // Checks for local storage
  if (!localStorage.commentData) {
    localStorage.commentData = [];
  } else {
    comments = JSON.parse(localStorage.commentData);
  }

  // Loops through comment array
  for (let i = 0; i < comments.length; i++) {
    render(comments[i]);
  }

  // Submits comment and displays on html
  addComment.addEventListener("click", function(){
    let addObj = {
      "Image": avatar,
      "cName": commentName.value,
      "cEmail": commentEmail.value,
      "cComment": comment.value,
    };
    // console.log(comments.indexOf());
    if (commentName.value == "" && commentEmail.value == "" && comment.value == "") {
      alert("Please fill out the form. ");
      return;
    } else if (commentName.value == "") {
      alert("Name required");
      return;
    } else if (commentEmail.value == "") {
      alert("Email required");
      return;
    } else if (comment.value == "") {
      alert("Comment required");
      return;
    }

    comments.push(addObj);
    localStorage.commentData = JSON.stringify(comments);
    render(addObj);
    commentName.value = "";
    commentEmail.value = "";
    comment.value = "";
  });
}
