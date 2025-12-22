var student = {
    grade: 1,
    school: "lion"

}

console.log(student);
console.log(typeof(student));

/* 객채(object)는 여러 속성을 가질 수 있다. */

/*  속성의 모음으로 이루어진 데이터
    속성에는 어떤 데이터 타입이라도 할당 가능
    속성의 구분
    속성의 정의 속성명: 속성값
      */

    //객체의 값 호출
var gradeInfo = student.grade;
console.log(gradeInfo);

// 객체의 키 호출
var key = Object.keys(student)[0];
console.log(key);

// 객체의 속성추가
student.class = 3;
console.log(student);


// 비어 있는 객체
var teacher = new Object();
var teacher = {

};