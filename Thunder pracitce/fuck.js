/**
 * Created by Administrator on 2017/5/2.
 */
function f1(){
    var n=999;
    function f2(){
        alert(n);
    }
    return f2;
}
var result=f1();
result(); // 999