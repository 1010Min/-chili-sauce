function showReview() {
    $.ajax({
        type: "GET",
        url: "/review",
        data: {},
        success: function (response) {
            let reviews=response['all_reviews']
            for(let i=0;i<reviews.length;i++){
                let keyword_raw = reviews[i]['keyword']
                let trackname=reviews[i]['track_name']
                console.log("====")
                console.log(trackname)
                for(let j=0;j<keyword_raw.length;j++){
                    let keyword=keyword_raw[j]
                    let temp_html= `<input type='checkbox'
                        name='animal'
                        value=${keyword}
                        onclick='getCheckboxValue()'/> ${keyword}`
                    $('#reviews-box').append(temp_html)
                }
            }
        }
    })
}
$(document).ready(function () {
    showReview();
});

function getCheckboxValue()  {
    // 선택된 목록 가져오기
    const query = 'input[name="animal"]:checked';
    const selectedEls =
        document.querySelectorAll(query);

    // 선택된 목록에서 value 찾기
    let result = '';
    var count = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    selectedEls.forEach((el) => {
        if(el.value==="데이터사이언스" ||el.value==="빅데이터"||el.value==="인공지능"){
            count[0]+=1/3;
        }
        if(el.value==="미디어" ||el.value==="인터페이스"||el.value==="영상처리"){
            count[1]+=1/3;
        }

        if(el.value==="인공지능" ||el.value==="영상정보처리"||el.value==="알고리즘"){
            count[2]+=1/3;
        }
        if(el.value==="클라우드" ||el.value==="웹시스템"||el.value==="네트워크"){
            count[3]+=1/3;
        }
        if(el.value==="개발자" ||el.value==="고급프로그래밍"||el.value==="테크닉"){
            count[4]+=1/3;
        }

        if(el.value==="스마트IoT솔루션" ||el.value==="프로그래밍언어"||el.value==="소프트웨어이론"||el.value==="스마트IoT"){
            count[5]+=1/4;
        }
        if(el.value==="소프트웨어개발" ||el.value==="프로그래밍언어"||el.value==="소프트웨어이론"||el.value==="데이터분석"||el.value==="데이터마이닝"){
            count[6]+=1/5;
        }
        if(el.value==="인공지능" ||el.value==="감성정보"||el.value==="기계학습"||el.value==="컴퓨터비전"){
            count[7]+=1/4;
        }
        if(el.value==="커넥티드" ||el.value==="IoT"||el.value==="ICT"||el.value==="사물인터넷"||el.value==="초연결사회"){
            count[8]+=1/5;
        }
        if(el.value==="인공지능" ||el.value==="자율주행"||el.value==="스마트모빌리티"||el.value==="머신러닝"||el.value==="AI"){
            count[9]+=1/5;
        }
        if(el.value==="스마트센서" ||el.value==="진단"||el.value==="센싱"||el.value==="헬스케어"||el.value==="생체전자"){
            count[10]+=1/5;
        }
        if(el.value==="그린에너지" ||el.value==="친환경신소재"||el.value==="환경공학"||el.value==="태양전지"){
            count[11]+=1/4;
        }

        if(el.value==="글로벌경영" ||el.value==="다국적기업"||el.value==="국제마케팅전략"||el.value==="글로벌스타트업"){
            count[12]+=1/4;
        }
        if(el.value==="마케팅관리" ||el.value==="서비스마케팅"||el.value==="광고판촉"||el.value==="브랜드마케팅"){
            count[13]+=1/4;
        }
        if(el.value==="경영정보" ||el.value==="시스템분석"||el.value==="시뮬레이션"||el.value==="네트워크"){
            count[14]+=1/4;
        }
        if(el.value==="직무분석" ||el.value==="조직설계"||el.value==="조직문화"||el.value==="리더십론"||el.value==="변화관리"){
            count[15]+=1/5;
        }
        if(el.value==="금융기관경영" ||el.value==="파생금융상품"||el.value==="위험관리"||el.value==="헤지포트폴리오"||el.value==="가치평가"){
            count[16]+=1/5;
        }
        if(el.value==="기업회계기준" ||el.value==="재무제표"||el.value==="원가통제"||el.value==="활동성원가"||el.value==="결합원가"){
            count[17]+=1/5;
        }
        if(el.value==="디지털마케팅" ||el.value==="데이터분석론"||el.value==="데이터분석활용"){
            count[18]+=1/3;
        }
        result += el.value + ' ';
    });

    // 출력
    let max1=-1;
    let index=-1;
    document.getElementById('result').innerText = result;
    for(let i=0;i<count.length;i++){
            if(Math.max(count[i])>max1){
                max1=Math.max(count[i])
                index=i
                console.log("???"+index)
            }
            console.log("max "+max1+" "+index)
        }
    document.getElementById('result2').innerText = index;
    // const text=result.split(" ")
    // for(let i=0;i<text.length-1;i++){
    //     console.log(text[i])
    // }
}



