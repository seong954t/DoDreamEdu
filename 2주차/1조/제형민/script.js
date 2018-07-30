function signup(){
    firebase.auth().createUserWithEmailAndPassword(getEmail(), getpassword())
    .then(
        function(success){
            console.log(success);
            alert("회원가입 성공");

        },function(error){
            console.log(error);
            alert("회원가입 실패");
        }  
        
    )
}

function signin(){
    firebase.auth().signInWithEmailAndPassword(getEmail(), getpassword())
    .then(
        function(success){
            console.log(success);
            alert("로그인 성공");
            $("#login-frame").hide();
            $("#db-upload-frame").show();
            uploadDBLestenner();
        },function(error){
            console.log(error);
            alert("로그인 실패");
        }  
        
    )
    console.log("로그인 함수 실행 끝");
}

function signout(){
    $("#db-upload-frame").hide(); 
    $("#login-frame").show(); 
    console.log("로그아웃");
}



function uploadDB(){
    firebase.database().ref().set({
        groupChat: $("#input-txt").val()
    });
}

function uploadDBLestenner(){
    firebase.database().ref().on('child_changed', function(data){
        console.log(data.val());
        $("#real-time-val").text(data.val());
    });
}

$("#send-btn").click(
    function(){
        uploadDB();
    }
);

$("#signup-btn").click(
    function () {
        console.log("회원가입 버튼 클릭");
        signup();
    }
);

$("#login-btn").click(
    function () {
        console.log("로그인 버튼 클릭");
        signin();
    }
);

$("#logout-btn").click(
    function() {
        /*console.log("로그아웃 버튼 클릭");*/
        signout();
    }
);

function getEmail(){
   return $("#email").val()
}

function getpassword(){
    return $("#password").val();
}

function setDBdata(data){
    $("#real-time-val").text(data)
}