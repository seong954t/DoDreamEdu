



function getEmail(){
    return $("#email").val();
}

function getPassword(){
    return $("#password").val();
}

/* 회원가입 function */
function signup(){
    firebase.auth().createUserWithEmailAndPassword (getEmail(),getPassword())
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

$("#signup-btn").click(function(){
    signup();
})

/* 로그인 function */
function login(){
    console.log("로그인");
    firebase.auth().signInWithEmailAndPassword(getEmail(),getPassword())
    .then(
        function(success){
            console.log(success);
            $("#login-frame").hide();
            $("#chat-frame").show();
            uploadDBListenner();
            alert("로그인 성공");
        }, function(error){
            console.log(error);
            alert("로그인 실패");
        }
    )
    console.log("로그인 함수 실행 끝");
}

$("#login-btn").click(function(){
    console.log("로그인 버튼클릭");
    login();
})


/* 로그아웃 function */
function signOut(){
    firebase.auth().signOut()
        .then(
            function(){
                $("#login-frame").show();
                $("#chat-frame").hide();
            }
        )
}

$("#logout-btn").click(function(){
    console.log("로그아웃 버튼클릭");
    signOut();
})


/* chat function */
$("#send-btn").click(function(){
    uploadDB();
})

function uploadDB(){
    firebase.database().ref().set({
        groupChat : $("#input-txt").val()
       });      
}

function uploadDBListenner(){
    firebase.database().ref().on('child_changed', function(data) {
        console.log(data.val());
        $("#real-time-val").text(data.val());
    });
}

function setDBdata(data){
    $("#real-time-val").text(data);
}
