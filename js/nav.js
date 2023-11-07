let header = document.querySelector('header')    //获取header
let nav_li_a = document.querySelectorAll('nav>ul>li>a')  // 获取nav 下面的 a
let header_right_box_i = document.querySelectorAll('i'); // 获取地球和下拉
// console.log(header_right_box_a);
header.onmouseenter = function () {
    this.style.backgroundColor = 'white'    //移入背景色变白
    document.querySelectorAll('#logo>a>img')[0].style.display = 'none' // logo隐藏
    for (let i = 0; i < nav_li_a.length; i++) {     // 循环遍历 nav 下的 a 使其变成黑色
        nav_li_a[i].style.color = 'black'

    }

    for (let i = 0; i < header_right_box_i.length; i++) {     //循环遍历 语言部分 地球和下拉 使其变成黑色
        header_right_box_i[i].style.color = 'black'
    }
    document.querySelector('.header_right_box>a>span').style.color = 'black'

}
header.onmouseleave = function () {
    this.style.backgroundColor = '' //移出背景色变白
    document.querySelectorAll('#logo>a>img')[0].style.display = 'block' // logo显示
    for (let i = 0; i < nav_li_a.length; i++) {     // 循环遍历 nav 下的 a 使其变成白色
        nav_li_a[i].style.color = 'white'
    }

    for (let i = 0; i < header_right_box_i.length; i++) {     //循环遍历 语言部分 地球和下拉 使其变成白色
        header_right_box_i[i].style.color = 'white'
    }
    document.querySelector('.header_right_box>a>span').style.color = 'white'
}

/* 鼠标移入 股票代码002008 改变颜色 */
let logo_box_a = document.querySelector('.logo_box>a');  // 获取 股票代码002008
logo_box_a.onmouseenter = function () {
    this.style.color = '#004896'
}
logo_box_a.onmouseleave = function () {
    this.style.color = '#999'
}


/* 鼠标移入 nav>ul>li 时显示隐藏内容 */
let nav_ul_li = document.querySelectorAll('nav>ul>li');
for (let i = 0; i < nav_ul_li.length; i++) {
    nav_ul_li[i].onmouseenter = function () {
        nav_li_a[i].style.color = '#004896'; // 字体颜色啊改变
    }
    nav_ul_li[i].onmouseleave = function () {
        nav_li_a[i].style.color = 'black';
    }
}

/* nav 隐藏部分 鼠标移入 背景图跟随 字体变白色 */
function fn(num1, num2) {
    $(num2).mouseenter(function () {
        $(this).css('color', 'white')
    })
    $(num2).mouseleave(function () {
        $(this).css('color', 'black')
    })

    $(num1).mouseenter(function () {
        $('.s').removeClass('s')
        let i = $(this).index() + 1
        let str = 0
        for (let j = i - 1; j > 0; j--) {
            let num = $(num1 + `:nth-child(${j})`).width()
            str += num;
        }
        $('.on').stop().animate({
            width: $(this).width(),
            left: str
        }, 200)
    })
    $(num1).mouseleave(function () {
        $('.on').stop().animate({
            left: 0
        }, 200)
        document.querySelector('.s1').className += ' s'
        document.querySelector('.s2').className += ' s'
        document.querySelector('.s3').className += ' s'
    })
}
let a = ".nav_center2>ul>li"
let b = ".nav_center2>ul>li a"
fn(a, b)
let c = ".nav_center1>ul>li"
let d = ".nav_center1>ul>li a"
fn(c, d)
let cc = ".nav_center3>ul>li"
let dd = ".nav_center3>ul>li a"
fn(cc, dd)


