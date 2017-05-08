window.onload = function(){
    var obBtn = document.getElementById("below-btn");
    var oDiv = document.getElementById("wrap");
    var oDiv1 = document.getElementById("change-back-1");
    var oDiv2 = document.getElementById("change-back-2");
    var oDiv3 = document.getElementById("change-back-3");
    var oDiv4 = document.getElementById("change-back-4");
    var oDiv5 = document.getElementById("change-back-5");
    var real_width = null, real_height = null;
    var oUl = document.getElementById("screen-change");
    var oA = oUl.getElementsByTagName("a");
    var oZan = document.getElementsByClassName("txt_zan");
    var oDdiv = document.getElementById("screen-control");
    var odA = oDdiv.getElementsByTagName("a");
    var oUl2 = document.getElementById("cb2-ul");
    var oLi = oUl2.getElementsByTagName("li");
    var nowZindex = 1;
    var nowZ = 0;
    var now = 0;
    var k = 0;
    real_height = oDiv1.offsetHeight;
    oDiv3.style.display = "block";
    oDiv4.style.display = "block";
    oDiv5.style.display = "block";
    oDiv2.style.top = 1*(real_height) + "px";
    oDiv3.style.top = 2*(real_height) + "px";
    oDiv4.style.top = 3*(real_height) + "px";
    oDiv5.style.top = 4*(real_height) + "px";
    //第一屏按钮
    obBtn.onclick = function(){
        setmover(oDiv,{top:-(real_height)});
        for(var i = 0;i < oA.length; i++){
            oA[i].className = ""
        }
        oA[1].className = "current";
    };
    //总切屏按钮
    for(var i = 0;i < oA.length; i++){
        oA[i].index = i;
        oA[i].onmouseover =function(){
            now = this.index;
            tab();
        }
    }
    function tab(){
        for(var i = 0;i < oA.length; i++){
            oA[i].className = ""
        }
        oA[now].className = "current";
        setmover(oDiv,{top:-(real_height)*now});
    }
    //鼠标中键控制  //现成的
    var scrollFunc = function(e){
        var n =0;
        var direct = 0;
        var currentH = parseInt(getStyle(oDiv,'top'));
        if(Math.abs(currentH) >= 0 && Math.abs(currentH)< real_height){
            currentH = 0;
        }else if(Math.abs(currentH) >= real_height && Math.abs(currentH)< 2*real_height){
            currentH = -(real_height);
        }else if(Math.abs(currentH) >= 2*real_height && Math.abs(currentH) < 3*real_height){
            currentH = -2*real_height;
        }else if(Math.abs(currentH) >= 3*real_height && Math.abs(currentH) < 4*real_height){
            currentH = -3*real_height;
        }else if(Math.abs(currentH) >= 4*real_height && Math.abs(currentH) < 5*real_height){
            currentH = -4*real_height;
        }
        e = e || window.event;
        if(e.wheelDelta){
            if(e.wheelDelta > 0){
                if(currentH >= 0){
                    return;
                } else {
                    setmover(oDiv, {top: currentH + real_height});
                }
            }
            if(e.wheelDelta < 0){
                if(currentH <= -4*(real_height)){
                    return;
                } else {
                    setmover(oDiv,{top:currentH - real_height});
                }
            }else if(e.detail){
                if(e.detail > 0){
                    if(currentH >= 0){
                        return;
                    } else {
                        setmover(oDiv, {top: currentH + real_height});
                    }
                }
                if(e.detail < 0){
                    if(currentH <= -4*(real_height) ){
                        return;
                    } else {
                        setmover(oDiv,{top:currentH - real_height});
                    }
                }
            }
        }
    };
    if(document.addEventListener){
        document.addEventListener("DOMMouseScroll",scrollFunc,false);
    }
    window.onmousewheel = document.onmousewheel = scrollFunc;
    //限制滚轮移动
    var scrollFune = function(e){
        e = e || window.event;
        if(e.wheelDelta && event.ctrlKey){
            event.returnValue = false;
        }else if(e.detail){
            event.returnValue = false;
        }
    };
    if(document.addEventListener){
        document.addEventListener("DOMMouseScroll",scrollFune,false);
    }
    window.onmousewheel = document.onmousewheel =scrollFune;

    //第二屏切屏效果
    oLi[0].style.display ="block";
    //oLi[0].style.opacity =1;
    for(var i = 0; i < odA.length ; i++){
        odA[i].index = i;
        odA[i].onmouseover = function(){
            nowZ = this.index;
            change();
        }
    }
    function change(){
        for(var i = 0; i < oLi.length ;i++){
            oLi[i].style.display = "none";
        }
        oLi[nowZ].style.display = "block";
        oLi[nowZ].style.zIndex = nowZindex ++;
        //setmover(oLi[nowZ],{opacity:100});
    }
    //点赞
    for(var i = 0;i < oZan.length;i++){
        oZan[i].onclick = function(){
            //(this.parentNode.innerHTML).replace(/[^0-9]/g,""));
            var remainNum = parseInt((this.parentNode.innerHTML).replace(/\D/g,""))+ 1;
            //this.parentNode.innerHTML = remainNum +"人赞过";
            $(this).parent().html("<a class='txt_zand' href='javascript:;'></a>"+remainNum +"人赞过");
        };
    }
    //意见反馈
    var oSugg = document.getElementById("suggestion");
    var oFeed = document.getElementById("feedback");
    var oFeedscr = document.getElementById("feedback_screen");
    var oClose = document.getElementById("fst_a");
    var oTextarea = document.getElementById("fsc_t");
    var oSubmit = document.getElementById("fsb_a");
    var oFeedsuc = document.getElementById("feedback_success");
    oSugg.onclick = function(){
        oFeed.style.display =" block";
        oFeedscr.style.display = "block";
        oTextarea.onclick = title_len;
        oTextarea.onkeyup = title_len;
        function title_len(){
            var value =oTextarea.value.length;
            if(value !== 0){
                oSubmit.style.background = "#0f97ff";
                //$("#fsb_a").css("background-color","#0f97ff");
            }else{
                oSubmit.style.background = "#666";
                //$("#fsb_a").css("background-color","#666");
            }
        }
        oSubmit.onclick = function(){
            oFeedscr.style.display = "none";
            oFeedsuc.style.display = "block";
            oTextarea.value ="";
            setTimeout(function(){
                oFeedsuc.style.display = "none";
                oFeed.style.display =" none";
            },1000)
        }
    };
    if(oTextarea.innerHTML !== ""){
        alert(1);
        //oSubmit.style.background = "#0f97ff";
    }
    oClose.onclick = function() {
        oFeed.style.display = " none";
    };
    function getStyle(obj,name){
        if(obj.currentStyle){
            return obj.currentStyle[name];
        }else{
            return getComputedStyle(obj,false)[name];
        }
    }
    function setmover(obj,json,fnEnd){
        clearInterval(obj.timer);
        obj.timer = setInterval(function(){
            var bStop = true;
            for(var attr in json){
                var cur = 0;
                if(attr == 'opacity'){
                    cur = Math.round(parseFloat(getStyle(obj,attr))*100);
                }else{
                    cur = parseInt(getStyle(obj,attr));
                }
                var speed = (json[attr] - cur) / 20;
                if(speed > 0){
                    speed = Math.ceil(speed)
                }else{
                    speed = Math.floor(speed)
                }
                if(cur != json[attr]){
                    bStop = false;
                }
                if(attr == "opacity"){
                    obj.style.filter = "alpha(opacity:" + (cur + speed) + ")";
                    obj.style.opacity = (cur + speed)/100;
                }else{
                    obj.style[attr] = cur + speed + "px";
                }
            }
            if(bStop){
                clearInterval(obj.timer);
                if(fnEnd)fnEnd();
            }
        },10)
    }
};
