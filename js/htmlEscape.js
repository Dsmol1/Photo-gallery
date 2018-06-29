// Escape html chars
  function escapeHtmlComment() {
    let escapeName = document.getElementById("cName").value;
    let escapeEmail = document.getElementById("cEmail").value;
    let escapeComment = document.getElementById("cComment").value;
    commentName.value = (escapeName.replace(/[^a-zA-Z0-9-. ]/g, ""));
    commentEmail.value = (escapeEmail.replace(/[^a-zA-Z0-9-. ]/g, ""));
    comment.value = (escapeComment.replace(/[^a-zA-Z0-9-. ]/g, ""));
  }
