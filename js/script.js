// alert('Hello Javascript')
// script.js
// 슬라이드 제작
// 섹션2의 right-box를 클릭하면 1씩 증가
// 섹션1의 슬라이드 박스(.slide-wrap 너비 4800px)를 
// 오른쪽에서 왼쪽으로 -1200px씩 부드럽게(트랜지션) 이동한다.

// 1. 다음 슬라이드 버튼을 클릭하면 
//    다음으로 이동하는 함수(nextSlideFn())를 호출한다.
var cnt = 0;
var $slideWrap = document.querySelector('.slide-wrap');
// 다음 슬라이드 함수
function nextSlideFn(){
    cnt++;
    cnt > 3 ? cnt=3 : cnt;
    $slideWrap.style = 'left:' + (-1200*cnt) + 'px';
}

// 2. 이전 슬라이드 버튼을 클릭하면
//    이전으로 이동하는 함수(prevSlideFn())를 호출한다.
// 이전 슬라이드 함수
function prevSlideFn(){
    cnt--;
    cnt < 0 ? cnt=0 : cnt; 
    $slideWrap.style = 'left:' + (-1200*cnt) + 'px';
}

