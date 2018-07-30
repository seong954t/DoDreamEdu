function signup(){
  firebase.auth().createUserWithEmailAndPassword(getEmail(),getPassword()).then(
    function(success){
      console.log(success);
      alert("회원가입 성공");
    }, function(error){
      console.log(error);
      alert("회원가입 실패");
    }
  )
}

function signin(){
  console.log("로그인");
  firebase.auth().signInWithEmailAndPassword(getEmail(),getPassword()).then(
    function(success){
      console.log(success);
      alert("로그인 성공");
      $("#login-frame").hide();
      $("#db-upload-frame").show();
    }, function(error){
      console.log(error);
      alert("로그인 실패");
    }
  )
  console.log("로그인 함수 실행 끝");
}

function uploadDB(){
  firebase.database().ref().set({
    groupChat: $("#input-txt").val()
  });
}

function uploadDBList(){
    firebase.database().ref().on('child_changed',function(data){
      console.log(data.val());
      $("#real-time-val").text(data.val());
    });
}

function signout(){
  console.log("로그아웃");
  $("#login-frame").show();
  $("#db-upload-frame").hide();
}
$("#login-bt").click(
  function(){
    console.log("로그인 버튼 클릭");
    signin();
  }
)
$("#logout-bt").click(
  function(){
    console.log("로그아웃 버튼 클릭");
    signout();
  }
)
$("#send-bt").click(
  function(){
    console.log("전송 버튼 클릭");
    uploadDBList();
  }
)

$("#signup-bt").click(
  function(){
    console.log("회원가입 버튼 클릭");
    signup();
  }
)
function getEmail(){
  return $("#email").val();
}

function getPassword(){
  return $("#password").val();
}
