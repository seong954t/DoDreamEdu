function signup() {
  firebase.auth().createUserWithEmailAndPassword(getEmail(), getPassword())
    .then(
      function(success) {
        console.log(success);
        alert("회원가입 성공");
      }, function(error) {
        console.log(error);
        alert("회원가입 실패");
      }
    );
  console.log("회원가입");
}

$("#signup-btn").click(
  function() {
    signup();
  }
);

function login() {
  firebase.auth().signInWithEmailAndPassword(getEmail(), getPassword())
  .then(
    function(success) {
      console.log(success);
      alert("로그인 성공");
      $("#login-frame").hide();
      $("#db-upload-frame").show();
    }, function(error) {
      console.log(error);
      alert("로그인 실패");
    }
  );

  console.log("로그인 함수 실행 끝");
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

function getEmail() {
  return $("#email").val();
}

function getPassword() {
  return $("#password").val();
}

function setDBdata(data) {
  $("#real-time-val").text(data);
}
