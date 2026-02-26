// common.js - 사이트 전체 공통 기능 제어

document.addEventListener("DOMContentLoaded", function() {
    // 1. 공통 헤더 삽입
    const headerBox = document.getElementById("header-placeholder");
    if(headerBox) { 
        headerBox.innerHTML = `
            <header>
                <a href="index.html" class="logo">🧪 심심풀이 연구소</a>
                <a href="https://simsimlabs.com/simsim-games/" class="game-lab-btn" style="font-size:0.8rem; margin-left:10px; text-decoration:none; color:#6c5ce7; font-weight:bold;"> 🎮 게임 랩</a>
                <div class="lang-switch">
                    <a href="index.html" class="lang-btn active">🇰🇷 KO</a>
                    <a href="en/index.html" class="lang-btn">🇺🇸 EN</a>
                </div>
            </header>
        `;
    }

    // 2. 공통 푸터 삽입
    const footerBox = document.getElementById("footer-placeholder");
    if(footerBox) {
        footerBox.innerHTML = `
            <footer>
                <p>© 2024 심심풀이 연구소</p>
                <div class="footer-links">
                    <a href="privacy.html">개인정보처리방침</a> | <a href="https://forms.gle/1arMG4Y5RodkcpEY7" target="_blank">문의하기</a>
                </div>
                <div style="margin-top: 15px; font-size: 0.85rem; color: #999;">
                    <span>함께 운영하는 곳 : </span>
                    <a href="https://simsimlabs.com/daily-tools/" target="_blank" style="color: #6c5ce7; font-weight: bold; text-decoration: none;">
                        🛠️ 데일리 툴즈 (유용한 웹 도구)
                    </a>
                </div>
            </footer>
        `;
    }

    // 3. 애드센스 지연 로딩 (속도 최적화의 핵심)
    function loadAdSense() {
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

    // 사용자가 스크롤, 터치, 마우스 이동을 할 때만 광고 로드
    const userInteractionEvents = ["scroll", "mousemove", "touchstart"];
    userInteractionEvents.forEach(function(event) {
        window.addEventListener(event, function loadAdOnce() {
            loadAdSense();
            userInteractionEvents.forEach(e => window.removeEventListener(e, loadAdOnce));
        }, { once: true });
    });
});

// 4. 공통 함수 (어느 페이지에서나 쓸 수 있음)
function shareTwitter() {
    var sendText = encodeURIComponent(document.title);
    var sendUrl = encodeURIComponent(window.location.href);
    window.open("https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl);
}

function copyLink() { 
    navigator.clipboard.writeText(window.location.href).then(()=>alert("주소가 복사되었습니다!")); 
}

function filter(c){
    document.querySelectorAll('.cat-btn').forEach(b=>b.classList.remove('active'));
    event.target.classList.add('active');
    document.querySelectorAll('.card').forEach(d=>{
        d.style.display = (c==='all' || d.classList.contains('category-'+c)) ? 'flex' : 'none';
    });
}
