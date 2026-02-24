function solution(nums) {
    var answer = 0;
    var newNums = new Set(nums)
    newNums.forEach((i) => {
        if(nums.length / 2 != answer){
            answer++
        }
    })
    return answer;
}
// nums = [3,3,3,2,2,2];
// solution(nums)

//해시관련 문제

function solution(a, b) {
    var answer = '';
    var day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    var date = new Date(`2016, ${a}, ${b}`);
    return answer;
}

// a = 5 
// b = 24
// solution(a, b)

//연습문제 1

function solution(s) {
    var answer = '';
    if(s.length % 2 === 0){
       answer = s.slice(s.length / 2 - 1, s.length / 2 + 1)
    }else{
        answer = s.slice(s.length / 2, s.length / 2 + 1)
    }
    return answer;
}

// s = "abde"
// solution(s)

//연습문제2

function solution(arr, divisor) {
    var answer = [];
    arr.map((v) =>{
        if(v % divisor == 0 ){
            answer.push(v)
        }
    })

    if(answer.length == 0) answer.push(-1);

    return answer.sort(function(a,b){
        return a- b;
    });
}

// arr = [5, 9, 7]
// divisor = 10

// solution(arr, divisor)

//연습문제3

function solution(a, b) {
    var answer = 0;
    for(var i = Math.min(a,b); i <= Math.max(a,b) ; i++){
        answer+= i
    }
    return answer;
}

// a= 3
// b= 5
// solution(a, b)

//연습문제4

function solution(strings, n) {
    return strings.sort(function(a,b){
        if(a[n] === b[n]){
              return a.localeCompare(b)
        }else{
              return a[n].localeCompare(b[n])
        }
      
    });
}
// strings = ["sun", "bed", "car"]
// n = 1
// solution(strings, n)

//연습문제 5
function solution(numbers) {
    var answer = '';
    var result = []
    function dfs(current, remaining) {
        result.push(Number(remaining.join("")));
        // console.log(result)

        for (let i = 0; i < remaining.length; i++) {
            var next = [...remaining];
            console.log(next)

            [next[1], next[2]] = [next[2] , next[1]];
            // var picked = next.splice(i, 1);
            console.log(next)
            

            // dfs([...current, ...picked], next);
        }
    }
    dfs([], numbers);
    // console.log("result", result)

    return answer;
}
numbers = [6, 10, 2]
solution(numbers) 