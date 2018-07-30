function signup(){
    firebase.auth().createUserWithEmailAndPassword(getEmail(), getPassword())
        .then(
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
    firebase.auth().signInWithEmailAndPassword(getEmail(), getPassword())
        .then(
            function(success){
                alert("로그인 성공")
                $("#login-frame").hide();
                $("#db-upload-frame").show();
                uploadDBListenner();
            }, function(error){
                console.log(error);
                alert("로그인 실패");
            }
        )
}

function uploadDB(){
    firebase.database().ref().set({
        groupChat: $("#input-txt").val()
      });
}

function uploadDBListenner(){
    firebase.database().ref().on('child_changed', function(data) {
        console.log(data.val());
        $("#real-time-val").text(data.val());
      });
}

function signout(){
    firebase.auth().signOut()
        .then(
            function(){
                $("#login-frame").show();
                $("#db-upload-frame").hide();
            }
        )
}

$("#send-btn").click(
    function(){
        uploadDB();
    }
)

$("#login-btn").click(
    function(){
        console.log("로그인 버튼 클릭");
        signin();
    }
)

$("#signup-btn").click(
    function(){
        signup();
    }
)

$("#logout-btn").click(
    function(){
        signout();
    }
)

function getEmail(){
    return $("#email").val();
}

function getPassword(){
    return $("#password").val();
}

function setDBdata(data){
    $("#real-time-val").text(data)
}