//회원가입 
function signup(){
    firebase.auth().createUserWithEmailAndPassword(getEmail(), getPassword()).
    then(
        function(success){
            console.log(success);
            alert("회원가입 성공");
        },function(error){
            console.log(error);
            alert("회원가입 실패");
        }
    )
    console.log("회원가입");
}

//로그인 성공 실패 여부
function signin(){
    console.log("로그인");
    alert("로그인 signin()");
    firebase.auth().signInWithEmailAndPassword(getEmail(), getPassword()).then(
        function(success){
            console.log(success);
            alert("로그인 성공");
            $("#login-frame").hide();
            $("#db-upload-frame").show();
            uploadDBListenner();
        },function(error){
            console.log(error);
            alert("로그인 실패");
        }
    )
    console.log("로그인 함수 실행 끝");

}

//로그아웃
function signout(){
    firebase.auth().signout().then(

       function(){
           $("#login-frame").show();
           $("#db-upload-frame").hide();
       } 
    )
}

// $("#login-frame").click(
//     function(){
//         console.log("로그인버튼 클릭");
//         //alert("login-frame");
//         signin();
//     }
// )

$("#signup-btn").click(
    function(){
        signup();
    }
)

function uploadDB(){
    firebase.database().ref().set({
        groupChat:$("#input-txt").val()

    });
}

function uploadDBListenner(){
    firebase.database().ref().on('child_changed' , function(data){
        console.log(data.val());
        $("#real-time-val").text(data.val());
    });
}

$("#send-btn").click(
    function(){
        uploadDB();
    }
)

$("#login-btn").click(
    function(){
        console.log("로그인버튼 클릭");
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
        console.log("로그아웃버튼 클릭");
        signout();
    }
)



function getEmail(){
    return $("#emali").val();

}
function getPassword(){
    return $("#password").val();

}

function setDBdata(data){
    $("#real-time-val").text(data);
}