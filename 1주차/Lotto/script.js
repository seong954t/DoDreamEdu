winning_numbers = []
bonus_number = 0
user_lotto_numbers_list = []

// 1 ~ 45 사이의 랜덤한 숫자 반환
function getRandomNum(){
    return 31
}

// lotto_nums(list) 값들 중 ball_num(number)값과 중복되는 값이 있는지 확인한다.
// 중복되는 값이 있으면 true 그렇지 않으면 false 반환
function checkDuplicatedNum(lotto_nums, ball_num){
    return true
}

// getRandomNum 함수를 통해 lotto_nums(list)에 숫자 6개를 넣어 반환한다.
// checkDuplicatedNum 함수를 통해 lotto 숫자에 중복된 숫자가 들어가지 않도록 한다.
function getLottoNums(){
    lotto_nums = [12, 11, 7, 9, 41, 24]
    return lotto_nums
}

// getLottoNums 함수를 통해 winning_numbers에 당첨번호를 위한 숫자 6개를 얻는다.
// checkDuplicatedNum 함수를 통해 winning_numbers와 중복되지 않는 bonus_number를 얻는다.
function getWinningNumbersAndBonusNumber(){
    winning_numbers = getLottoNums()
    bonus_number = 11
}

// 당첨번호 winning_number와 자신의 lotto_nums 중 일치하는 번호의 개수를 반환한다.
function getMachedNum(lotto_nums){
    return 6
}

// getMachedNum 함수를 통해 얻은 값을 통해 '꽝', '5등', '4등', '3등', '2등', '1등'을 반환한다.
// 꽝  -> 2개 이하 동일
// 5등 -> 3개 동일
// 4등 -> 4개 동일
// 3등 -> 5개 동일
// 2등 -> 5개 동일, 보너스 동일
// 1등 -> 6개 동일
function getWinningResult(lotto_nums){
    return '1등'
}

// 위의 함수를 작성하면 아래 부분을 통해 실행이 완료됩니다.
// 아래 부분은 수정하지 마세요.
function addLottoNum(){
    user_lotto_numbers_list.push(getLottoNums());

    document.getElementById("check-winner").disabled = false;
    drawCircle(lotto_nums);
}

function checkWinLotto(){
  getWinningNumbersAndBonusNumber();
  let result = document.getElementsByClassName("result");
  for(i in user_lotto_numbers_list) {
      result[i].textContent = getWinningResult(user_lotto_numbers_list[i])
      if(result[i].textContent == "꽝") {
          result[i].style.color = "red";
      }
  }
  winning_numbers.push(bonus_number);
  drawWinCircle(winning_numbers);
  document.getElementById("buy-lotto").disabled = true;
  document.getElementById("check-winner").disabled = true;
}