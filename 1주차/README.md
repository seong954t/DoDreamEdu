# 1주차 교육 목표
    
    1. git repository에 자신이 수정한 내용을 업데이트할 수 있다.
        - git add/commit/push
    2. branch를 사용하여 병렬개발을 할 수 있다.
        - git branch
    3. 각 branch에 대해 pull request를 요청할 수 있다.

    4. pull request에 대해 merge할 수 있다.
        - 이 때 conflict에 대해 resolve할 수 있다.
    5. 최신화 된 main repository를 fork한 repository에 동기화 할 수 있다.
        - git fetch/merge
    
# git 명령어

    $ git init
    해당 폴더에 git을 활성화 시킨다.

##

    $ git remote add [remote 이름] [remote 주소]
    ex) git remote add origin https://github.com/seong954t/DoDreamEdu.git
    github주소를 연동할 수 있게 해준다.
    
##

    $ git add [. / * / 파일이름]
    ex) git add README.md
    저장소에 올릴 수정된 파일을 알려준다.

##

    $ git commit -m "변경사항에 대한 커밋 내용"
    ex) git commit -m "modify readme.md file"
    add한 내용에 대해 코멘트를 작성한다.

##

    $ git push [remote 이름] [branch 이름]
    ex) git push origin master
    add와 commit 후 변경 내용에 대해 github 저장소에 업로드한다.

##

    $ git branch [branch 이름]
    ex) git branch addName
    필요한 기능을 다른 branch와 별도로 작업하기 위해 새로운 branch를 생성한다.

##

    $ git branch
    현재 branch의 목록을 확인할 수 있다.

##

    $ git branch -D [branch 이름]
    ex) git branch -D addName
    해당 branch를 삭제한다.

##

    $ git checkout [branch 이름]
    ex) git checkout addName
    현재 branch에서 자신이 작업하고자하는 branch로 이동한다.

##

    $ git fetch [remote 이름]
    ex) git fetch origin
    해당 remote에 있는 내용을 로컬로 가져온다.

##

    $ git merge [remote 이름]/[branch 이름]
    ex) git merge origin/master
    fetch된 내역들을 해당 remote의 branch로 병합을 한다.

##

    $ git pull [remote 이름] [branch 이름]
    ex) git pull origin master
    github의 변경사항을 현재 로컬에 동기화한다. fetch+merge와 동일한 일을 수행한다.

        