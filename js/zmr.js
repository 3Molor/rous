var topthree = document.querySelector('#top-three');
var ta = document.querySelector('.t-a')
var star = document.querySelector('.t-a img')
var imgs = document.querySelectorAll('#img-box>li');
var span1 = document.querySelector('.span1');
var span2 = document.querySelector('.span2');
var p1 = document.querySelector('.p1');
var p2 = document.querySelector('.p2');
var tp = document.querySelector('#tp');
var index = 0;
function changeOne(type) {
    // 1、让当前这一张消失
    imgs[index].className = ''
    // 2、根据 type 传递来的参数，来切换 index 的值
    if (type === true) {
        index++
        if (index == 1) {
            span1.innerHTML = index + 1;
            span2.innerHTML = '&nbsp;/&nbsp;&nbsp;' + (index + 2);
            p1.innerHTML = '基础器件技术领先';
            p2.innerHTML = '行业装备深耕应用';
            p1.style.margin = '40px 0 0 150px';
            p2.style.marginLeft = '150px';
            star.style.margin = '40px 0 0 0';
            tp.innerHTML = '';
        } else if (index == 2) {
            span1.innerHTML = 3;
            span2.innerHTML = '&nbsp;/&nbsp;&nbsp;1';
            p1.innerHTML = '全球领先的';
            p2.innerHTML = '智能制造装备';
            tp.innerHTML = '整体解决方案提供商';
            p1.style.margin = '10px 0 0 280px';
            p2.style.marginLeft = '240px';
            tp.style.fontSize = '45px';
            tp.style.margin = '160px 125px 0 0px';
            star.style.margin = '10px 0 0 0';
        } else {
            span1.innerHTML = 1;
            span2.innerHTML = '&nbsp;/&nbsp;&nbsp;2';
            p1.innerHTML = '大国重器';
            p2.innerHTML = '装备力量';
            p1.style.margin = '0 0 0 330px';
            p2.style.marginLeft = '330px';
            tp.innerHTML = '大族精工制造赋能产业升级';
            tp.style.margin = '200px 120px 0 0px';
            tp.style.fontSize = '22px';
            star.style.margin = '0';
        }
    } else if (type === false) {
        index--

        if (index == 1) {
            span1.innerHTML = index + 1;
            span2.innerHTML = '&nbsp;/&nbsp;&nbsp;' + (index + 2);
            p1.innerHTML = '基础器件技术领先';
            p2.innerHTML = '行业装备深耕应用';
            p1.style.margin = '40px 0 0 150px';
            p2.style.marginLeft = '150px';
            star.style.margin = '40px 0 0 0';
            tp.innerHTML = '';
        } else if (index == 2) {
            span1.innerHTML = 3;
            span2.innerHTML = '&nbsp;/&nbsp;&nbsp;1';
            p1.innerHTML = '全球领先的';
            p2.innerHTML = '智能制造装备';
            tp.innerHTML = '整体解决方案提供商';
            p1.style.margin = '10px 0 0 280px';
            p2.style.marginLeft = '240px';
            tp.style.fontSize = '45px';
            tp.style.margin = '160px 125px 0 0px';
            star.style.margin = '10px 0 0 0';
        } else {
            span1.innerHTML = 1;
            span2.innerHTML = '&nbsp;/&nbsp;&nbsp;2';
            p1.innerHTML = '大国重器';
            p2.innerHTML = '装备力量';
            p1.style.margin = '0 0 0 330px';
            p2.style.marginLeft = '330px';
            tp.innerHTML = '大族精工制造赋能产业升级';
            tp.style.margin = '200px 120px 0 0px';
            star.style.margin = '0';
        }
    }

    // 判断一下 index的边界值
    if (index >= imgs.length) {
        index = 0
    }
    if (index < 0) {
        index = imgs.length - 1
    }

    // 3、让改变后的这一张显示出来
    imgs[index].className = 'active'
}

// 给轮播图区域 盒子绑定点击事件
topthree.onclick = function (e) {
    if (e.target.className === 'left') {
        console.log('点击左按钮')
        changeOne(false)
    }
    if (e.target.className === 'right') {
        console.log('点击右按钮')
        changeOne(true)
    }
}

// 给轮播图区域 盒子绑定鼠标移入事件
let left = document.querySelector('.left');
let right = document.querySelector('.right');
left.onmouseenter = function () {
    this.style.backgroundColor = 'white';
    this.style.color = 'blue';
}
left.onmouseleave = function () {
    this.style.backgroundColor = '';
    this.style.color = 'white';
}
right.onmouseenter = function () {
    this.style.backgroundColor = 'white';
    this.style.color = 'blue';
}
right.onmouseleave = function () {
    this.style.backgroundColor = '';
    this.style.color = 'white';
}

// 定时器  每间隔5s 切换图片
setInterval(function () {
    changeOne(true)
}, 5000)

let R_box3 = document.querySelector('#r-box3');
let box3_Div = document.querySelectorAll('#r-box3 .r-box3-div');
let box3_P =  document.querySelectorAll('#r-box3 .box3-p2')
let box3_Img = document.querySelectorAll('#r-box3 img')
R_box3.onmouseover = function(){
    box3_Div[0].onmouseenter = function(){
        box3_P[0].style.color = 'blue';
    }
    box3_Div[0].onmouseleave = function(){
        box3_P[0].style.color = 'black';
    }
    box3_Div[1].onmouseenter = function(){
        box3_P[1].style.color = 'blue';
    }
    box3_Div[1].onmouseleave = function(){
        box3_P[1].style.color = 'black';
    }
    box3_Div[2].onmouseenter = function(){
        box3_P[2].style.color = 'blue';
    }
    box3_Div[2].onmouseleave = function(){
        box3_P[2].style.color = 'black';
    }
    // for(var i =0;i<box3_Div.length;i++){
    //     box3_Div[i].onmouseenter = function(){
    //         for(var j =0;j<box3_P.length;j++){
    //             box3_P[j].style.color = 'blue';
    //         }
    //     }
    // }
}