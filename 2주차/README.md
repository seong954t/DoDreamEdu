# JQUERY

## class, id 접근하기
    
    $(".클래스 이름")
    $("#아이디 이름")

## input 값 가져오기 or 넣기

    $("#아이디 이름").val()
    ex) $("#email-input").val()

    $("#아이디 이름").val("입력할 내용")
    ex) $("#email-input").val("myname@github.com")


## text 내용 가져오기 or 넣기

    $("#아이디 이름").text()
    ex) $("#title").text()

    $("#아이디 이름").text("입력할 내용")
    ex) $("#title").text("타이틀 입니다.")

## 클릭 이벤트 설정하기

    $("#아이디 이름").click( 함수 )
    ex) $("#btn").click(
            function(){
                alert("클릭 이벤트")
            }
        );

## class 이름 추가 or 제거하기

    $("#아이디 이름").addClass("클래스 이름")
    ex) $("#login-btn").addClass("enable-login")

    $("#아이디 이름").removeClass("클래스 이름")
    ex) $("#login-btn").removeClass("disable-login")

## DOM 보이기 or 숨기기

    $("아이디 이름").show()
    ex) $("#login-err").show()

    $("아이디 이름").hide()
    ex) $("#login-err").hide()

## 키보드 이벤트 설정하기

    $("#아이디 이름").keyup( 함수 )
    ex) $("#email-input").keyup(
            function(event){
                console.log(event.keyCode)
            }
        );

    $("#아이디 이름").keypress( 함수 )
    ex) $("#email-input").keypress(
            function(event){
                console.log(event.keyCode)
            }
        );

# FIREBASE

## 로그인 상태 변화 감지

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            로그인 상태 or 변경될 경우 실행된다.
        }
        else{
            로그인 상태가 아닌 경우 or 로그아웃할 경우 실행된다.
        }
    });

## 회원가입

    firebase.auth().createUserWithEmailAndPassword(사용자 이메일, 사용자 비밀번호)
    .then(
        function(user){
            기존 회원가입이 없는 최초 회원가입일 경우 진행된다.
        },
        function(error){
            if(error.code == "auth/email-already-in-use"){
                이미 해당 회원이 있는 경우 진행된다.
            }else if(error.code == "auth/invalid-email"){
                사용불가능한 이메일일 경우 진행된다.
            }else if(error.code == "auth/weak-password"){
                사용불가능한 비밀번호일 경우 진행된다.
            }else{
                이 외의 경우 추가적으로 있음
            }
        }
    )

## 로그인

    firebase.auth().signInWithEmailAndPassword(사용자 이메일, 사용자 비밀번호)
    .then(
        function(user) {
            로그인이 성공한 경우 진행된다.
        },
        function(error){
            if(error.code == "auth/user-not-found"){
                등록된 회원이 없을 경우 진행된다.
            }
            else if(error.code == "auth/invalid-email"){
                사용불가능한 이메일일 경우 진행된다.
            }
            else if(error.code == "auth/wrong-password"){
                비밀번호가 올바르지 않은 경우 진행된다.
            }else{
                이 외의 경우 추가적으로 있음
            }
        }
    );

## 로그인 정보 가져오기

    사용자 UID
    firebase.auth().getUid()
    firebase.auth().currentUser.uid

    사용자 EMAIL
    firebase.auth().currentUser.email

## 데이터 베이스 추가하기

    firebase.database().ref(데이터 베이스 경로).set( 추가할 데이터 );

    firebase.database().ref(데이터 베이스 경로).update( 업데이트할 데이터 );

    데이터 베이스 경로 - String
    "user/email/name"
    과 같은 "/" 로 구분한 경로

    추가 및 업데이트할 데이터 - Object
    {
        key1 : value1,
        key2 : value2,
        key3 : value3
    }
    와 같은 형식의 데이터

## 데이터 베이스 이벤트 받아오기

    firebase.database().ref(데이터 베이스 경로).on(이벤트 이름, 함수)

    이벤트 이름
    child_added	    항목 목록을 검색하거나 항목 목록에 대한 추가를 수신 대기합니다.
                        이 이벤트는 기존 하위 항목마다 한 번씩 발생한 후 지정된 경로에 하위 항목이 새로 추가될 때마다 다시 발생합니다.
                        리스너에는 새 하위 항목의 데이터를 포함하는 스냅샷이 전달됩니다.
    child_changed	    목록의 항목에 대한 변경을 수신 대기합니다.
                        이 이벤트는 하위 노드가 수정될 때마다 발생합니다.
                        여기에는 하위 노드의 하위에 대한 수정이 포함됩니다.
                        이벤트 리스너에 전달되는 스냅샷에는 하위 항목의 업데이트된 데이터가 포함됩니다.
    child_removed	    목록의 항목 삭제를 수신 대기합니다.
                        이 이벤트는 바로 아래 하위 항목이 삭제될 때 발생합니다.
                        콜백 블록에 전달되는 스냅샷에는 삭제된 하위 항목의 데이터가 포함됩니다.
    child_moved	    순서 있는 목록의 항목 순서 변경을 수신 대기합니다.
                        현재의 정렬 기준에 따라 항목 순서 변경의 원인이 된 child_moved 이벤트가 child_changed 이벤트를 항상 뒤따릅니다.

    데이터 정렬
    orderByChild()	    지정된 하위 키 또는 중첩된 하위 경로의 값에 따라 결과를 정렬합니다.
    orderByKey()	    하위 키에 따라 결과를 정렬합니다.
    orderByValue()	    하위 값에 따라 결과를 정렬합니다.


    데이터 필터링
    limitToFirst()	    정렬된 결과 목록에서 맨 처음부터 반환할 최대 항목 개수를 설정합니다.
    limitToLast()	    정렬된 결과 목록에서 맨 끝부터 반환할 최대 항목 개수를 설정합니다.
    startAt()	    선택한 정렬 기준 메소드에 따라 지정된 키 또는 값보다 크거나 같은 항목을 반환합니다.
    endAt()             선택한 정렬 기준 메소드에 따라 지정된 키 또는 값보다 작거나 같은 항목을 반환합니다.
    equalTo()           선택한 정렬 기준 메소드에 따라 지정된 키 또는 값과 동일한 항목을 반환합니다.

    ex) firebase.database().ref('UsersConnection/').orderByChild("connection").equalTo(true)
        .once(
            'value', 
            function(snapshot){
                snapshot.forEach(function(childSnapshot) {
                    var childKey = childSnapshot.key;
                    var childData = childSnapshot.val();
                });
            },
            function(error){
                
            }
        )

    ex) firebase.database().ref('UsersConnection/')
        .on(
            'child_added', 
            function(snapshot){
                console.log(snapshot.key, snapshot.val())
            },
            function(error){
                console.log(error);
            }
        )
