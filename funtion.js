//字符串的数字数组转换为数组
function strarrToArr(arr) {
    var ar = [];
    for (var i = 0; i < arr.length; i++) {
        ar[i] = +(arr[i]);
    }
    return ar;
}

function obj2str(obj, fuhao) {
    var arr = [];
    var fu = fuhao || '&';
    for (var prop in obj) {
        arr.push(prop + "=" + obj[prop]);
    }
    return arr.join(fu);
}

//数组去重  [1,1,1,1,0,0,0,5,5,9,8,8,4]
//数组去重  [1,1,1,1,0,0,0,5,5,9,8,8,4]
var arr = [0, 0, 0, 0, 0, 0, 2, 2, 3, 6, 6, 5];
Array.prototype.equire = function () {
    var temp = {},
        res = [],
        len = this.length;
    for (var i = 0; i < len; i++) {
        var attr = this[i];
        if (!temp[attr]) {
            temp[attr] = " ";
        }
    }
    for (var prop in temp) {
        res.push(+(prop));
    }
    return res;
};

function type(target) {
    var ret = typeof (target);
    var template = {
        "[object Array]": "array",
        "[object Object]": "object",
        "[object String]": "string - object",
        "[object Boolean]": "boolean - object",
        "[object Number]": "number - object"
    };
    if (target === null) {
        return "null";
    }
    if (ret == "object") {
        var str = Object.prototype.toString.call(target);
        return stemplate[str];
    } else {
        return ret;
    }
}

function unique1(arr) {
    var arr = arr;
    var _arr = [];
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        if (_arr.indexOf(arr[i]) == -1) {
            _arr.push(arr[i]);
        }
    }
    return _arr;
}

function unique2(arr) {
    var len = arr.length;
    var _arr = [];
    var obj = {};
    for (var i = 0; i < len; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = '1';
            _arr.push(arr[i]);
        }
    }
    return _arr;
}

function unique3(arr) {
    var arr = arr;
    var len = arr.length;
    arr.sort();
    var _arr = [];
    _arr[0] = arr[0];
    for (var i = 0; i < len; i++) {
        var lastIndex = _arr.length - 1;
        if (_arr[lastIndex] != arr[i]) {
            _arr.push(arr[i]);
        }
    }
    return _arr;
}

function unique4(arr) {
    var len = arr.length;
    var newArr = [];
    for (var i = 0; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
            if (arr[i] === arr[j]) {
                j = ++i;
            }
        }
        newArr.push(arr[i]);
    }
    return newArr;
}

//字符串去重
function strNoRep(target) {
    var temp = {},
        arr = [];
    for (var i = 0; i < target.length; i++) {
        if (!temp[target.charAt(i)]) {
            temp[target.charAt(i)] = " ";
        }
    }
    for (var prop in temp) {
        arr.push(prop);
    }
    return arr.join("");
}

function norepeatF(target) {
    var temp = {},
        arr = [];
    for (var i = 0; i < target.length; i++) {
        if (temp[target.charAt(i)]) {
            var num = +(temp[target.charAt(i)]) + 1;
            temp[target.charAt(i)] = num2Str(num);
        } else {
            temp[target.charAt(i)] = "1";
        }
    }
    for (var prop in temp) {
        if (temp[prop] == 1) {
            arr.push(prop);
        }
    }
    function num2Str(num1) {
        return num1 + "";
    }
    var first = arr.slice(0, 1);
    return first.join("");
}

//子元素逆序
function reElement(ele) {
    var child = ele.children,
        len = child.length;
    for (var i = len - 1; i < len; i--) {
        ele.appendChild(child[i]);
    }
}

//获取滚动条位置
function getScroll() {
    if (window.pageXOffset) {
        return {
            top: window.pageYOffset,
            left: window.pageXOffset
        }
    } else {
        return {
            top: document.body.scrollTop + document.documentElement.scrollTop,
            left: document.body.scrollLeft + document.documentElement.scrollLeft
        }
    }
}

//获取视口大小
function getInner() {
    if (window.innerWidth) {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    } else {
        if (document.compatMode === "BackCompat") {
            return {
                width: document.body.clientWidth,
                height: document.body.clientHeight
            }
        } else {
            return {
                width: document.documentElement.clientWidth,
                heigth: document.documentElement.clientHeight
            }
        }
    }
}

//获取元素相对文档位移
function getOffset(ele) {
    var top = ele.offsetTop;
    var left = ele.offsetLeft;
    var parrent = ele.offsetParent;
    while (parrent != null) {
        top += parrent.offsetTop;
        left += parrent.offsetLeft;
        parrent = parrent.offsetParent;
    }
    return {
        top: top,
        left: left
    }
}

//获取计算后的样式
function getStyle(ele, prop) {
    if (ele.currentStyle) {
        return ele.currentStyle[prop];
    } else {
        return window.getComputedStyle(ele, null)[prop];
    }
}

//事件的绑定
function addEvent(ele, type, fn) {
    if (ele.addEventListener) {
        ele.addEventListener(type, fn, false);
    } else if (ele.attachEvent) {
        ele.attachEvent("on" + type, function () {
            fn.call(ele);
        });
    } else {
        ele['on' + type] = fn;
    }
}

//阻止事件冒泡
function stopBubble(e) {
    var event = e || window.event;
    if (event.stopPropagation) {
        event.stopPropagation();
    } else {
        event.cancleBubble = true;
    }
}

//阻止默认行为
function preDef(e) {
    var event = e || window.event;
    if (event.preventDefault) {
        event.preventDefault();
    } else {
        return event.returnValue = false;
    }
}

//推拽
function drag(ele, flag) {
    ele.onmousedown = function (event) {
        var e = event || window.event,
            disX = e.pageX - parseInt(ele.style.left),
            disY = e.pageY - parseInt(ele.style.top);

        document.onmousemove = function (e) {
            var event = e || window.event;
            var y = event.pageY - disY,
                x = event.pageX - disX;
            if (flag) {
                if (x < 0) {
                    x = 0;
                }
                if (y < 0) {
                    y = 0;
                }
                var wid = getInner().width - ele.offsetWidth,
                    hei = getInner().height - ele.offsetHeight;
                if (x > wid) {
                    x = wid;
                }
                if (y > hei) {
                    y = hei;
                }
            }
            ele.style.top = y + "px";
            ele.style.left = x + "px";
        }
    }
}

//异步加载script            注意这里的tools是另一个界面的对象
function loadScript(url, callback) {
    var script = document.createElement('script');
    script.type = "text/javascript";
    if (script.readyState) {
        script.onreadystatechange = function () {
            if (script.readyState === "complete" && script.readyState === "loaded") {
                tools[callback]();
            }
        };
    } else {
        script.onload = function () {
            tools[callback]();
        };
    }
    script.src = url;
    document.head.appendChild(script);
}

//Cookie
function addCookie(key, value, day, path, domain) {
    var index = window.location.pathname.lastIndexOf("/");
    var currentPath = window.location.pathname.slice(0, index);
    path = path || currentPath;
    // console.log(document.domain);
    domain = domain || document.domain;

    if (!day) {
        document.cookie = key + "=" + value + ";path=" + path + ";domain=" + domain + ";";
    } else {
        var date = new Date();
        date.setDate(date.getDate() + day);
        document.cookie = key + "=" + value + ";expires=" + date.toGMTString() + ";path=" + path + ";domain=" + domain + ";";
    }
}


function getCookie(key) {
    var res = document.cookie.split(";");
    for (var i = 0; i < res.length; i++) {
        var temp = res[i].split("=");
        if (temp[0].trim() === key) {
            return temp[1];
        }
    }
}


function delCookie(key, path) {
    addCookie(key, getCookie(key), -1, path);
}



function obj2str(obj) {
    var res = [];
    obj.t = new Date().getTime();
    for (var key in obj) {
        res.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
    return res.join('&');
}

function ajax(obj) {
    var str = obj2str(obj.data);

    var xmlhttp, timer;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (obj.type.toUpperCase() === "GET") {
        xmlhttp.open(obj.type, obj.url + "?" + str, true);
        xmlhttp.send();
    } else if (obj.type.toUpperCase() === "POST") {
        xmlhttp.open(obj.type, obj.url, true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(str);
    }

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4) {
            clearInterval(timer);
            if (xmlhttp.status === 200) {
                obj.success(xmlhttp);
            } else {
                obj.error(xmlhttp);
            }
        }
    }

    if (obj.timeout) {
        timer = setInterval(function () {
            //中断请求
            xmlhttp.abort();
            clearInterval(timer);
        }, obj.timeout);
    }
}

/*
*
* 匀速动画
*/
function animate(ele, target, step) {
    clearInterval(ele.timer);

    var dir = ele.offsetLeft < target ? step : -step;

    ele.timer = setInterval(function () {
        ele.style.left = ele.offsetLeft + dir + 'px';

        if (Math.abs(target - ele.offsetLeft) < Math.abs(dir)) {
            clearInterval(ele.timer);
            ele.style.left = target + 'px';
        }
    }, 50);
}

/*
*缓动动画
*/
function buffer(obj, json, fn) {
    //清除定时器
    clearInterval(obj.timer);
    //设置定时器
    var begin = 0, speed = 0, target = 0;

    obj.timer = setInterval(function () {
        var flag = true;

        for (var prop in json) {
            //获取初始值
            if ('opacity' === prop) {
                begin = Math.round(parseFloat(getStyle(obj, prop)) * 100) || 100;
                target = parseInt(parseFloat(json[prop]) * 100);
            } else if ('scrollTop' === prop) {
                begin = Math.ceil(obj.scrollTop);
                target = parseInt(json[prop]);
            } else {
                begin = parseInt(getStyle(obj, prop)) || 0;
                target = parseInt(json[prop]);
            }

            //求出步长
            speed = (target - begin) * 0.2;

            //判断是否向上取整
            speed = (target > begin) ? Math.ceil(speed) : Math.floor(speed);

            //动起来
            if ('opacity' === prop) {
                obj.style.opacity = (begin + speed) / 100;
                obj.style.filter = 'alpha(' + (begin + speed) + ')';
            } else if ('scrollTop' === prop) {
                obj.scrollTop = begin + speed;
            } else if ('zIndex' === prop) {
                obj.style[prop] = json[prop];
            } else {
                obj.style[prop] = begin + speed + 'px';
            }


            if (begin !== target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            //判断有没有回调
            if (fn) {
                fn();
            }
        }
    }, 20);
}

/*弹性动画elastic*/
function elasticMove(ele, target) {
    clearInterval(ele.timer);
    var speed = 40, a, u = 0.9;
    ele.timer = setInterval(function () {
        a = (target - ele.offsetLeft) / 15;
        speed = speed + a;
        speed = speed * u;
        if (Math.abs(speed) < 1 && Math.abs(target - ele.offsetLeft) < 1) {
            clearInterval(ele.timer);
            ele.style.left = target + 'px';
        } else {
            ele.style.left = ele.offsetLeft + speed + 'px';
        }
    });
}

/*
  重力动画
 */
function startMove(ele, speedX, speedY) {
    clearInterval(ele.timer);
    var newLeft, newTop, g = 6;
    ele.timer = setInterval(function () {
        speedY += g;

        newLeft = ele.offsetLeft + speedX;
        newTop = ele.offsetTop + speedY;

        if (newLeft >= document.documentElement.clientWidth - ele.offsetWidth) {
            speedX *= -1;
            speedY *= 0.8;
            speedX *= 0.8;
            newLeft = document.documentElement.clientWidth - ele.offsetWidth;
        }
        if (newLeft <= 0) {
            speedX *= -1;
            newLeft = 0;
            speedY *= 0.8;
            speedX *= 0.8;
        }
        if (newTop >= document.documentElement.clientHeight - ele.offsetHeight) {
            speedY *= -1;
            speedY *= 0.8;
            speedX *= 0.8;
            newTop = document.documentElement.clientHeight - ele.offsetHeight;
        }
        if (newTop <= 0) {
            speedY *= -1;
            newTop = 0;
            speedY *= 0.8;
            speedX *= 0.8;
        }

        if (Math.abs(speedX) < 1) {
            speedX = 0;
        }
        if (Math.abs(speedY) < 1) {
            speedY = 0;
        }
        if (speedX === 0 && speedY === 0 && newTop === document.documentElement.clientHeight - ele.offsetHeight) {
            clearInterval(ele.timer);
        }

        ele.style.left = newLeft + 'px';
        ele.style.top = newTop + 'px';
    }, 30);
}

/*
 *节流
 */
function throttle(fn, delay) {
    var timer = null;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(fn, delay);
    }
}

function $(id) {
    return typeof id === 'string' ? document.getElementById(id) : null;
}


/*
 获取数组最大值和对应索引
*/
function getArrMax(_arr) {
    var _index = 0;
    var result = _arr[0];
    for (var i = 0; i < _arr.length; i++) {
        if (_arr[i] > result) {
            result = _arr[i];
            _index = i;
        }
    }
    return {
        value: result,
        index: _index
    }
}

/*判断元素是否存在指定className*/
function hasClass(ele, _className) {
    return !!ele.className.match(new RegExp('(\\s|^)' + _className + '(\\s|$)'));
}


/*
   冒泡排序
 */
function bubbleSort(_arr) {
    var arr = _arr;
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
            if (arr[i] > arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
//快速排序
function  quickArr(arr){
    var left = [] ,right = [];
    if(arr.length <= 1){
        return arr;
    }
    var pIndex = Math.floor(arr.length / 2);
    var p = arr.splice(pIndex,1)[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] <= p){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return quickArr(left).concat([p],quickArr(right));
}

function bubleSort(arr){
    var len = arr.length;
    for(var i = 0; i < len; i++){
        for(var j = i+1; j < len; j++){
            if(arr[i] > arr[j]){
                var temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}

window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        }
})();

window.cancelAnimationFrame = (function () {
    return window.cancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        function (id) {
            window.clearTimeout(id);
        }
})();

//真数组转换为伪数组
var arr = [1,3,5,7,9];
var obj = {};
[].push.apply(obj,arr);
// console.log(obj);


//伪数组转换为真数组
var obj = {'0':1,'1':3,length:2};
var arr1 = [].slice.call(obj);
console.log(arr1);

//辨别数组还是对象
({}).toString.call([]);  "[object Array]"
({}).toString.call({});  "[object Object]"
Object.prototype.toString.call([]);   //效果都是一样的
Object.prototype.toString.call({});



//链表   相关内容
/**
 class Node{
    constructor(value){
        this.key = value;
        this.next = null;
    }
}
 let HeadNode = new Node(1)

 function insertNode(startNode,node,num = Infinity){
    if(num <1){
        return
    }
    while(startNode.next && --num >0){
        startNode = startNode.next;
    }
    let nextNode = startNode.next;
    startNode.next = node;
    node.next = nextNode;
}
 insertNode(HeadNode,new Node(2))
 insertNode(HeadNode,new Node(3))
 insertNode(HeadNode,new Node(4))
 insertNode(HeadNode,new Node(5))

 var node = new Node(6);
 insertNode(HeadNode,node)

 node.next = HeadNode.next.next    //形成环路


 console.log(HeadNode)


 //判断是否有环路   定义一指针为一    一个为二
 function findRing(node){
    let point1 = node.next
    let point2 = point1 && point1.next

    while(point1 && point2){
        if(point1 == point2){
            return true;
        }
        point1 = point1.next;
        point2 = point2.next;
        point2 = point2 && point2.next
    }
    return false;
}

 */

//  call && apply 模拟
Function.prototype.newCall = function () {
    var ctx = arguments[0] || window;
    ctx.fn = this;
    var args = [];
    for (var i = 1; i < arguments.length; i++) {
        args.push('arguments[' + i + ']');
    }
    var result = eval('ctx.fn(' + args.join(',') + ')');
    delete ctx.fn;
    return result;
}
// show.newCall(obj, 1, 2, 3)      写一个show方法

Function.prototype.newApplay = function (ctx, arr) {
    var ctx = ctx || window;
    ctx.fn = this;
    if (!arr) {
        var result = ctx.fn();
    } else {
        // var args = [];
        // for (var i = 0; i < arr.length; i++) {
        //     args.push('arguments[' + (i+1) + ']');
        // }
        var result = eval('ctx.fn(' + arr.join(',') + ')');
    }
    delete ctx.fn;
    return result;
}
