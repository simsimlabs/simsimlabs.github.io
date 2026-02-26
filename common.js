// common.js (모든 페이지에서 공통으로 불러올 스크립트)

document.addEventListener("DOMContentLoaded", function() {
    // 애드센스 지연 로딩
    function downloadJSAtOnload() {
        var element = document.createElement("script");
        element.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2261846676525942";
        element.async = true;
        element.crossOrigin = "anonymous";
        document.body.appendChild(element);
        
        element.onload = function() {
            var ads = document.querySelectorAll('.adsbygoogle');
            ads.forEach(function(ad) {
                if (ad.innerHTML.replace(/\s/g, "").length === 0) {
                    (window.adsbygoogle = window.adsbygoogle || []).push({});
                }
            });
        };
    }

    // 스크롤 등 사용자 반응이 있을 때만 광고 호출
    var isAdLoaded = false;
    function loadAdOnce() {
        if(!isAdLoaded) {
            downloadJSAtOnload();
            isAdLoaded = true;
        }
    }

    window.addEventListener("scroll", loadAdOnce, {once:true});
    window.addEventListener("mousemove", loadAdOnce, {once:true});
    window.addEventListener("touchstart", loadAdOnce, {once:true});
});

// 카테고리 필터
function filter(c){
    document.querySelectorAll('.cat-btn').forEach(b=>b.classList.remove('active'));
    event.target.classList.add('active');
    document.querySelectorAll('.card').forEach(d=>{
        d.style.display = (c==='all' || d.classList.contains('category-'+c)) ? 'flex' : 'none';
    });
}

// 트위터 공유
function shareTwitter() {
    var sendText = encodeURIComponent(document.title);
    var sendUrl = encodeURIComponent(window.location.href);
    window.open("https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl);
}

// 링크 복사
function copyLink() { 
    navigator.clipboard.writeText(window.location.href).then(()=>alert("주소가 복사되었습니다!")); 
}
