//1.首先在嵌套页面获取父级ifram元素
let iframeDom = parent.parent.document.getElementById("iframe")
//2.获取嵌套页面高度
let box = document.getElementById("box")
//3.把页面高度复制给父级ifram
iframeDom.height = box.scrollHeight
//如果想让它随时变换高度，加个定时器
