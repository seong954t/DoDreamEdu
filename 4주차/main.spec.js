// TODO :: Write the testing code
// RED -> GREEN -> REFACTOR 의 RED 단계

// describe : 테스트 꾸러미
describe("로또 함수의", function() {
    describe("getRandomNum() 함수는", function() {
        // it : 함수의 특정 기능을 테스트
        it("1~45 사이의 랜덤한 수를 반환한다.", function() {
            let rand_num = getRandomNum();
            // expect : 기대값이 맞는지 확인
            // parseInt한 값이 toBe 되야 함
            expect(parseInt(rand_num)).toBe(rand_num);
            // toBeGreaterThanOrEqual : 크거나 같음
            expect(rand_num).toBeGreaterThanOrEqual(1);
            // toBeLessThanOrEqual : 작거나 같음
            expect(rand_num).toBeLessThanOrEqual(45);
        });
    });

    describe("checkDuplicatedNum() 함수는", function() {
        it("[1,2,3,4,5,6], 5에 대해 중복 숫자가 있다.", function() {
            expect(checkDuplicatedNum([1,2,3,4,5,6], 5)).toBeTruthy();
        });
        it("[1,2,3,4,5,6], 10에 대해 중복 숫자가 없다.", function() {
            expect(checkDuplicatedNum([1,2,3,4,5,6], 10)).toBeFalsy();
        });
    });
});