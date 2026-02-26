// en/common.js - Global settings for English version

document.addEventListener("DOMContentLoaded", function() {
    // 1. Insert Common Header
    const headerBox = document.getElementById("header-placeholder");
    if(headerBox) {
        headerBox.innerHTML = `
            <header>
                <a href="index.html" class="logo">🧪 SimSim Labs</a>
                <a href="https://simsimlabs.com/simsim-games/en/" class="game-lab-btn" style="font-size:0.8rem; margin-left:10px; text-decoration:none; color:#6c5ce7; font-weight:bold;"> 🎮 Game Labs</a>
                <div class="lang-switch">
                    <a href="../index.html" class="lang-btn">🇰🇷 KO</a>
                    <a href="index.html" class="lang-btn active">🇺🇸 EN</a>
                </div>
            </header>
        `;
    }

    // 2. Insert Common Footer
    const footerBox = document.getElementById("footer-placeholder");
    if(footerBox) {
        footerBox.innerHTML = `
            <footer>
                <p>© 2024 SimSim Labs</p>
                <div class="footer-links">
                    <a href="privacy.html">Privacy Policy</a> | <a href="mailto:contact@example.com">Contact Us</a>
                </div>
                <div style="margin-top: 15px; font-size: 0.85rem; color: #999;">
                    <span>More Projects : </span>
                    <a href="https://simsimlabs.com/daily-tools/" target="_blank" style="color: #6c5ce7; font-weight: bold; text-decoration: none;">
                        🛠️ Daily Tools
                    </a>
                </div>
            </footer>
        `;
    }

    // 3. AdSense Lazy Loading
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

// Common Functions
function filter(c){
    document.querySelectorAll('.cat-btn').forEach(b=>b.classList.remove('active'));
    event.target.classList.add('active');
    document.querySelectorAll('.card').forEach(d=>{
        d.style.display = (c==='all' || d.classList.contains('category-'+c)) ? 'flex' : 'none';
    });
}

function shareTwitter() {
    var sendText = encodeURIComponent(document.title);
    var sendUrl = encodeURIComponent(window.location.href);
    window.open("https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl);
}

function copyLink() { 
    navigator.clipboard.writeText(window.location.href).then(()=>alert("Link Copied!")); 
}
