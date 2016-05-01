function f0()
{
alert("才怪咧科科")
}

function f1()
{
document.getElementById("danger").innerHTML="脚本区！不危险！请进！"
}

function f2()
{
element=document.getElementById("spq")
if(element.src.match("http://ww4.sinaimg.cn/mw690/9e8a9c71jw1f3dxyfre3vj207f08cjsj.jpg"))
  {
  element.src="http://ww4.sinaimg.cn/mw690/9e8a9c71jw1f3dxye5oy7j207f08caai.jpg"
  }
else if(element.src.match("http://ww4.sinaimg.cn/mw690/9e8a9c71jw1f3dxye5oy7j207f08caai.jpg"))
  {
  element.src="http://ww2.sinaimg.cn/mw690/9e8a9c71jw1f3dxyg2ssyj207f08cdh9.jpg"
  }
else if(element.src.match("http://ww2.sinaimg.cn/mw690/9e8a9c71jw1f3dxyg2ssyj207f08cdh9.jpg"))
  {
  element.src="http://ww2.sinaimg.cn/mw690/9e8a9c71jw1f3dxyevn5mj207f08cgm5.jpg"
  }
else
  {
  element.src="http://ww4.sinaimg.cn/mw690/9e8a9c71jw1f3dxyfre3vj207f08cjsj.jpg"
  }
}

function f3()
{
element=document.getElementById("h0")
if(element.style.color.match("white"))
  {
  element.style.color="orange"
  }
else
  {
  element.style.color="white"
  }
}

function f5(a,b)
{
alert("yoooooo! "+a+" "+b+"!")
}

function f6()
{
document.getElementById("f6f7").style.visibility="hidden"
}

function f7()
{
document.getElementById("f6f7").style.visibility="visible"
}

function f8()
{
var child=document.getElementById("d0")
child.parentNode.removeChild(child)
}

function f9()
{
var x=document.getElementById("b0").innerHTML.length
if(document.getElementById("d0"))
  {
  x=x-19
  }
alert('"傻缺小狗倩。傻缺小狗倩……"一句中共有'+x+"个字符")
}

function f10()
{
var x=Math.round(Math.random()*100)
alert("你在"+Date()+"摇出的幸运数字是"+x)
}

function f11()
{
var x=confirm("做出选择吧！")
if (x==true)
  {
  alert("吔屎嘞！你竟然确定！")
  }
else
  {
  alert("吔屎嘞！你竟然取消！")
  }
}

function f12()
{
var x=prompt("敢问阁下尊姓大名？","梁非凡")
if(x!=null && x!="")
  {
  alert("吔屎嘞！"+x+"!")
  }
}
