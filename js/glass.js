window.onload=function(){

	//获取各个元素对象
	let content = document.getElementsByClassName('content')[0];
	let div1 = document.getElementById('div1');
	let box = document.getElementsByClassName('box')[0];
	let div2 = document.getElementById('div2');
	let img = div2.getElementsByTagName('img')[0];

	//鼠标移入移出执行事件
	div1.onmouseover=function(){
		box.style.display = "block"
		div2.style.display = "block"
	}
	div1.onmouseout=function(){
		box.style.display = "none"
		div2.style.display = "none"
	}
	div1.onmousemove=function(){

		//获取各元素的宽高
		let contentLeft = content.offsetLeft;
		let contentTop = content.offsetTop;
		let div1Width = div1.offsetWidth;
		let div1Height = div1.offsetHeight;
		let boxWidth = box.offsetWidth;
		let boxHeight = box.offsetHeight;

		let left = event.clientX;
		let top = event.clientY;

		//设置放大镜移动的值
		let boxleft = left-contentLeft-boxWidth/2;
		let boxtop = top-contentTop-boxHeight/2;

		//限制放大镜不超出范围
		if(boxleft<0){
			boxleft = 0;
		}
		else if(boxleft>(div1Width-boxWidth)){
			boxleft = div1Width-boxWidth;
		}

		if(boxtop<0){
			boxtop=0;
		}
		else if(boxtop>(div1Height-boxHeight)){
			boxtop=div1Height-boxHeight
		}
		box.style.left = boxleft + 'px';
		box.style.top = boxtop + 'px';

		//放大效果区域
		let prentX = boxleft ;
		let prentY = boxtop ;
		img.style.left = -prentX*div2.offsetWidth/boxWidth + 'px';
		img.style.top = -prentY*div2.offsetHeight/boxHeight + 'px';
		
	}
}

/*需要注意的是：
	1.放大部分的大小/大图片大小=放大镜大小/小图片大小
	2.放大镜移动的的距离=移动到的位置-小图片到浏览器边缘的位置-放大镜宽度/2
*/