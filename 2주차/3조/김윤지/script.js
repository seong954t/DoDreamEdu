function signup(){
    firebase.auth().createUserWithEmailAndPassword(getemail(), getpassword()).then(
        function(success){
            console.log(success);
            alert("회원가입 성공");
        },function(error){
            console.log(error);
            alert("회원가입 실패");
        }
    )
    console.log('회원가입');
}

function signin(){
    firebase.auth().signInWithEmailAndPassword(getemail(), getpassword()).then(
        function(success){
            console.log(success);
            alert("로그인 성공");
            $("#login-frame").hide;
            $("#db-upload-frame").show();
            uploadDBListener();
        },function(error){
            console.log(error);
            alert("로그인 실패");
        }
    )
}

function uploadDB(){
    firebase.database().ref().set({
        groupChat: $("input-txt").val()
    });
}

function uploadDBListener(){
    firebase.database().ref().on('child_changed',function(data){
        console.log(data.val());
        $('#real-time-val').text(data.val());
    });
}

function signout(){
    firebase.auth().signout().then(
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
        console.log("로그인 버튼 클릭")
        signin();
    }
)

$('#signup-btn').click(
    function(){
        console.log('로그인 버튼 클릭');
        signup();
    }
)

$('#logout-btn').click(
    function(){
        console.log('로그아웃 버튼 클릭');
        signout();
    }
)

function getemail(){
    return $("#email").val();
}

function getpassword(){
    return $("#password").val();
}

function setDBdata(data){
    $("#real-time-val").text(data)
}
