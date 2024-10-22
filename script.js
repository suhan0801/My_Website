document.addEventListener("DOMContentLoaded", function () {
    // 監控 .card 和 .large-card 兩種元素
    const cards = document.querySelectorAll('.card, .large-card');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // 當元素進入視窗時，添加 'show' 類
            } else {
                entry.target.classList.remove('show'); // 當元素離開視窗時，移除 'show' 類
            }
        });
    });

    cards.forEach(card => {
        observer.observe(card); // 監控每一個 .card 和 .large-card
    });
    // 打字效果
    const text = "歡迎來到我的個人網頁!"; // 要顯示的文字
    const textElement = document.getElementById("text");
    let index = 0;

    function type() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index); // 添加當前字符
            index++;
            setTimeout(type, 100); // 每個字母間的間隔時間（毫秒）
        } else {
            textElement.style.borderRight = 'none'; // 打字完成後隱藏光標
        }
    }

    type(); // 開始打字效果
});
document.addEventListener("DOMContentLoaded", function () {
    const articles = document.querySelectorAll('.article');
    
    articles.forEach(article => {
        const contentHeight = article.scrollHeight; // 取得內容的實際高度
        article.style.height = `${contentHeight + 50}px`; // 根據內容高度自動調整卡片高度
    });
});
