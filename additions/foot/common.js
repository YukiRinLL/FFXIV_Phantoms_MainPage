// 回到顶部功能
function initBackToTop() {
//    // 动态创建回到顶部按钮
//    const backToTopHTML = `<div id="box" class="box"><div class="box-in"></div></div>`;
    // 动态创建回到顶部按钮，使用图片代替原来的箭头
    const backToTopHTML = `<div id="box" class="box"><img src="../assets/images/back-to-top.png" alt="Back to Top" style="width: 100%; height: 100%; object-fit: contain;"></div>`;
    document.body.insertAdjacentHTML('beforeend', backToTopHTML);
    
    const box = document.getElementById('box');
    let timer = null;
    
    box.onclick = function() {
        cancelAnimationFrame(timer);
        timer = requestAnimationFrame(function fn() {
            const oTop = document.body.scrollTop || document.documentElement.scrollTop;
            if (oTop > 0) {
                document.body.scrollTop = document.documentElement.scrollTop = oTop - 50;
                timer = requestAnimationFrame(fn);
            } else {
                cancelAnimationFrame(timer);
            }
        });
    };
}

// 标题修改功能
function initTitleChange() {
    document.title = '(ノ￣▽￣) Phantoms !';
    
    window.onload = function() {
        const OriginTitile = document.title;
        let titleTime;
        
        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                document.title = '( * ￣▽￣)／肿么不看了呢？';
                clearTimeout(titleTime);
            } else {
                document.title = '(～￣▽￣)～咦！又开始看了！';
                titleTime = setTimeout(function() {
                    document.title = OriginTitile;
                }, 2000);
            }
        });
    };
}

// 点击效果功能
function initClickEffect() {
    // 确保jQuery已加载
    if (typeof jQuery === 'undefined') {
        console.warn('jQuery is not loaded, click effect will not work.');
        return;
    }
    
    jQuery(document).ready(function($) {
        let a_idx = 0;
        const words = ["Astral", "Umbral", "Arcanum", "Polyglot", "Transcendent", "Material", "Original", "Xenogeneic", "Etheral", "Sin", "Missionary", "Requiem", "Clement", "Cristal", "Zodiac"];
        
        $("body").click(function(e) {
            const $i = $("<span></span>").text(words[a_idx]);
            a_idx = (a_idx + 1) % words.length;
            
            const x = e.pageX;
            const y = e.pageY;
            
            $i.css({
                "z-index": 999999999999999999,
                "top": y - 20,
                "left": x,
                "position": "absolute",
                "font-weight": "bold",
                "color": `rgb(${~~(255*Math.random())}, ${~~(255*Math.random())}, ${~~(255*Math.random())})`
            });
            
            $("body").append($i);
            
            $i.animate({
                "top": y - 180,
                "opacity": 0
            }, 1500, function() {
                $i.remove();
            });
        });
    });
}

// 初始化所有功能
document.addEventListener('DOMContentLoaded', function() {
    initBackToTop();
    initTitleChange();
    initClickEffect();
});