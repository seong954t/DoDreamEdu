function signup() {
  console.log("회원가입");
}

function login() {
  console.log("로그인");
  $("#login-frame").hide();
  $("#db-upload-frame").show();
}

function logout() {
  console.log("로그아웃");
  $("#db-upload-frame").hide();
  $("#login-frame").show();
}


$("#login-btn").click(
  function() {
    login();
  }
);

$("#logout-btn").click(
  function() {
    logout();
  }
);
