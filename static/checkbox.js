function getCheckboxValue()  {
    // 선택된 목록 가져오기
    const query = 'input[name="animal"]:checked';
    const selectedEls =
        document.querySelectorAll(query);

    // 선택된 목록에서 value 찾기
    let result = '';
    selectedEls.forEach((el) => {
        result += el.value + ' ';
    });

    // 출력
    console.log(result)
    document.getElementById('result').innerText = result;
}

$(document).ready(function () {
    showReview();
});
function showReview() {
    $.ajax({
        type: "GET",
        url: "/review",
        data: {},
        success: function (response) {
            let reviews=response['all_reviews']
            for(let i=0;i<reviews.length;i++){
                let keyword_raw = reviews[i]['keyword']
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