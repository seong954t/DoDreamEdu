function signup(){
    firebase.auth().createUserWithEmailAndPassword(getEmail(),getPassword())
    .then(
        function(success){
            console.log(success);
            alert('회원가입성공');
            
        },function(error){
            console.log(error);
            alert('회원가입 실패');
        }
    )
}
function signin(){
    console.log('로그인');
    firebase.auth().signInWithEmailAndPassword(getEmail(), getPassword())
    .then(
        function(success){
            console.log(success);
            alert('로그인 성공');
            $("#login-frame").hide();
            $("#db-upload-frame").show();
            uploadDBListenner()
        },function(error){
            console.log(error);
            alert('로그인 실패');
        }
    )
    console.log('로그인 함수 실행 끝');
}
function uploadDB(){
    firebase.database().ref().set({
        groupchat : $("#input-txt").val()
      });
}
function uploadDBListenner(){
    firebase.database().ref().on('child_changed',function(data){
        console.log(data.val());
        $('#real-time-val').text(data.val());
    });
}
function signout(){
    $("#db-upload-frame").hide();
    $("#login-frame").show();
}
$("#login-btn").click(function(){
    signin();
})
$("#logout-btn").click(function(){
    signout();
})
$("#signup-btn").click(function(){
    signup();
});
$("#send-btn").click(function(){
    uploadDB();
});
function getEmail(){
    return $("#email").val();
}
function getPassword(){
    return $("#password").val();
}
function setDBdata(data){
    $("real-time-val").text(data);
}