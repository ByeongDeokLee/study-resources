function solution(nums) {
  var answer = 0;
  var newNums = new Set(nums);
  newNums.forEach((i) => {
    if (nums.length / 2 != answer) {
      answer++;
    }
  });
  return answer;
}
// nums = [3,3,3,2,2,2];
// solution(nums)

//해시관련 문제

function solution(a, b) {
  var answer = "";
  var day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  var date = new Date(`2016, ${a}, ${b}`);
  return answer;
}

// a = 5
// b = 24
// solution(a, b)

//연습문제 1

function solution(s) {
  var answer = "";
  if (s.length % 2 === 0) {
    answer = s.slice(s.length / 2 - 1, s.length / 2 + 1);
  } else {
    answer = s.slice(s.length / 2, s.length / 2 + 1);
  }
  return answer;
}

// s = "abde"
// solution(s)

//연습문제2

function solution(arr, divisor) {
  var answer = [];
  arr.map((v) => {
    if (v % divisor == 0) {
      answer.push(v);
    }
  });

  if (answer.length == 0) answer.push(-1);

  return answer.sort(function (a, b) {
    return a - b;
  });
}

// arr = [5, 9, 7]
// divisor = 10

// solution(arr, divisor)

//연습문제3

function solution(a, b) {
  var answer = 0;
  for (var i = Math.min(a, b); i <= Math.max(a, b); i++) {
    answer += i;
  }
  return answer;
}

// a= 3
// b= 5
// solution(a, b)

//연습문제4

function solution(strings, n) {
  return strings.sort(function (a, b) {
    if (a[n] === b[n]) {
      return a.localeCompare(b);
    } else {
      return a[n].localeCompare(b[n]);
    }
  });
}
// strings = ["sun", "bed", "car"]
// n = 1
// solution(strings, n)

//연습문제 5
function solution(numbers) {
  var answer = "";
  var result = [];
  function dfs(current, remaining) {
    result.push(Number(remaining.join("")));
    // console.log(result)

    for (let i = 0; i < remaining.length; i++) {
      var next = [...remaining];
      console.log(next)[(next[1], next[2])] = [next[2], next[1]];
      // var picked = next.splice(i, 1);
      console.log(next);

      // dfs([...current, ...picked], next);
    }
  }
  dfs([], numbers);
  // console.log("result", result)

  return answer;
}
// numbers = [6, 10, 2]
// solution(numbers)

///
function findCategoryPath(categories, targetId) {
  for (const category of categories) {
    if (category.id === targetId) {
      return category.name;
    }

    if (category.children && category.children.length > 0) {
      const childPath = findCategoryPath(category.children, targetId);

      if (childPath) {
        return `${category.name} > ${childPath}`;
      }
    }
  }

  return "";
}

// 테스트 데이터
const categories = [
  {
    id: 1,
    name: "가전",
    children: [
      { id: 2, name: "주방가전", children: [{ id: 3, name: "냉장고" }] },
    ],
  },
  { id: 4, name: "의류", children: [{ id: 5, name: "상의" }] },
];

// console.log(findCategoryPath(categories, 3)); // 출력: 가전 > 주방가전 > 냉장고

//DFS알고리즘

function solution(s) {
  var Ylist = 0;
  var Plist = 0;

  for (var i = 0; i < s.length; i++) {
    if (s[i].toLowerCase() == "y" || s[i].toLowerCase() == "p") {
      if (s[i].toLowerCase() == "y") {
        Ylist++;
      } else {
        Plist++;
      }
    }
  }
  return ansYlist == Plist ? true : false;
}
// s = "pPoooyY";
// solution(s);

//연습문제

function solution(s) {
  var answer = "";
  var Sspl = s.split("");
  for (var i = 0; i < Sspl.length; i++) {
    Sspl[i] = Sspl[i].charCodeAt();
  }
  Sspl.sort((a, b) => b - a);
  Sspl.forEach((v, i) => {
    answer += String.fromCharCode(v);
  });

  return answer;
}

// s = "Zbcdefg";
// solution(s);

//연습문제

function solution(n) {
  var answer = 0;
  for (var i = 1; i <= n; i++) {
    if (n % i == 1) {
      answer = answer == 0 ? (answer = i) : answer;
    }
  }
  return answer;
}

// n = 10;
// solution(n);

//연습문제

function solution(s) {
  return (s.length === 4 || s.length === 6) && /^[0-9]+$/.test(s);
}
// s = "a234";
// solution(s);

//연습문제

function solution(seoul) {
  var answer = 0;

  seoul.forEach((v, i) => {
    if (v == "Kim") {
      answer = i;
    }
  });
  return "김서방은 " + answer + "에 있다";
}
// seoul = ["Jane", "Kim"];
// solution(seoul);

//연습문제

function solution(n) {
  const arr = new Array(n + 1).fill(true);
  arr[0] = arr[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }

  return arr.filter((v) => v).length;
}

// n = 10;
// solution(n);

//연습문제

function solution(n) {
  var answer = "";

  for (var i = 0; i < n; i++) {
    if (i % 2 === 0) {
      answer += "수";
    } else {
      answer += "박";
    }
  }

  return answer;
}

// n = 10;
// solution(n);

//연습문제ㅐ
function solution(s) {
  var answer = 0;
  return Number(s);
}

s = "1234";
solution(s);

//연습문제
function solution(s, n) {
  var answer = "";

  answer = s
    .split("")
    .map((v) => {
      if (v === " ") return " ";

      let code = v.charCodeAt();

      if (code >= 65 && code <= 90) {
        // 대문자
        return String.fromCharCode(((code - 65 + n) % 26) + 65);
      } else {
        // 소문자
        return String.fromCharCode(((code - 97 + n) % 26) + 97);
      }
    })
    .join("");

  return answer;
}

s = "AB";
n = 1;

solution(s, n);
