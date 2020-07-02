
!function(){
	const header=$('header');
	header.load('./common.html');
	const footer=$('footer');
	footer.load('./footer.html');

// 根据本地存储，显示用户信息
if (localStorage.getItem('username')) {
	$('.xingming').html(localStorage.getItem('username'));
	$('.xingming').show();
	$('.messagebox').hide();
}else{
	$('.xingming').hide();
	$('.backout').hide();
	$('.messagebox').show();
}

$('.backout').on('click', function() {
	$('.messagebox').show();
	$('.xingming').hide();
	$('.backout').hide();
	localStorage.removeItem('username');
});

}();


// 第一个大轮播图淡入淡出效果
!function(){
	class biglunbo{
		constructor(){
			this.smallbanner=$('.banner');
			this.picul=$('.banner ul');
			this.picli=this.picul.children();
			this.btnli=$('.banner ol li');
			this.leftarrow=$('.spanleft');
			this.rightarrow=$('.spanright');
			this.index=0;
			this.timer=null;
		}
		init(){
			let _this=this;
			this.btnli.on('mouseover',function(){
				_this.index = $(this).index(); 
				_this.tabswitch();
			});

			this.rightarrow.on('click', function() {
				_this.rightevent()
			});

			this.leftarrow.on('click', function() {
				_this.leftevent()
			});

			// 自动轮播
			this.timer = setInterval(function() {
				_this.rightarrow.click();
				//  _this.index++;
                // if (_this.index > _this.btnli.length - 1) {
                //     _this.index = 0;
                // }
                // _this.tabswitch();
			}, 2000);

			 //鼠标移入移出停止开启对应的自动轮播
			 this.smallbanner.hover(function() {
				clearInterval(_this.timer);
			}, function() {
				_this.timer = setInterval(function() {
					_this.index++;
					if (_this.index > _this.btnli.length - 1) {
						_this.index = 0;
					}
					_this.tabswitch();
				}, 2000);
			});
		}

		tabswitch(){
			this.btnli.eq(this.index).addClass('active').siblings('ol li').removeClass('active');
			this.picli.eq(this.index).animate({
				opacity: 1
			}).siblings('ul li').animate({
				opacity: 0
			});
		}
		//右箭头事件
		rightevent(){
            this.index++;
            if (this.index > this.btnli.length - 1) {
                this.index = 0;
            }
            this.tabswitch();
		}
		//左箭头事件
		leftevent(){
            this.index--;
            if (this.index < 0) {
                this.index = this.btnli.length - 1;
            }
            this.tabswitch();
        }
	}
	new biglunbo().init();
}()


// 第二个小轮播图淡入淡出效果
!function(){
	class smalllunbo{
		constructor(){
			this.smallbanner=$('.smallbanner');
			this.picul=$('.smallbanner ul');
			this.picli=this.picul.children();
			this.btnli=$('.smallbanner ol li');
			this.index=0;
			this.timer=null;
		}
		init(){
			let _this=this;
			this.btnli.on('mouseover',function(){
				_this.index = $(this).index(); 
				_this.tabswitch();
			});

			// 自动轮播
			this.timer = setInterval(function() {
				 _this.index++;
                if (_this.index > _this.btnli.length - 1) {
                    _this.index = 0;
                }
                _this.tabswitch();
			}, 2000);

			 //鼠标移入移出停止开启对应的自动轮播
			 this.smallbanner.hover(function() {
				clearInterval(_this.timer);
			}, function() {
				_this.timer = setInterval(function() {
					// _this.rightarrow.click();
					_this.index++;
					if (_this.index > _this.btnli.length - 1) {
						_this.index = 0;
					}
					_this.tabswitch();
				}, 2000);
			});
		}

		tabswitch(){
			this.btnli.eq(this.index).addClass('active').siblings('ol li').removeClass('active');
			this.picli.eq(this.index).animate({
				opacity: 1
			}).siblings('ul li').animate({
				opacity: 0
			});
		}
	}
	new smalllunbo().init();
}()



//精品推荐渲染
!function($){
	const $recommend_list=$('.recommend_list');
	$.ajax({
		url: 'http://10.31.162.26/huawei-project/php/taobaodata.php',
        dataType: 'json'
	}).done(function(data){
		console.log(data);
		let $strhtml='<ul>';
		
		for(let $i=0;$i<5;$i++){
			$strhtml+=`
				<li>
					<a href="" target="_blank">
					<div class="recommend_box">
						<p><img src="${data[$i].url}" alt=""></p>
						<p>${data[$i].title}</p>
					</div>
					<p>${data[$i].title}</p>
					<p>${data[$i].price}</p>
					</a>
				</li>
			`;
		};
		$strhtml+='</ul>';
		$recommend_list.html($strhtml);
	});
}(jQuery);


// 手机 phone渲染
!function($){
	const $phonelist=$('.phonelist');
	$.ajax({
		url: 'http://10.31.162.26/huawei-project/php/taobaodata.php',
        dataType: 'json'
	}).done(function(data){
		console.log(data);
		let $strhtml='<ul>';
		
		for(let $i=0;$i<25;$i++){
			$strhtml+=`
				<li>
					<a href="javascript:;" target="_blank">
					<div class="phone01">
						<img src="${data[$i].url}" alt="">
					</div>
					<p>${data[$i].price}</p>
					<p>${data[$i].title}</p>
					<p>${data[$i].price}</p>
					</a>
				</li>
			`;
		};
		$strhtml+='</ul>';
		$phonelist.html($strhtml);
	});
}(jQuery);




// smarttop里的8条数据渲染
!function($){
	const $eightsmart=$('.normalpic');
	$.ajax({
		url: 'http://10.31.162.26/huawei-project/php/taobaodata.php',
        dataType: 'json'
	}).done(function(data){
		console.log(data);
		let $strhtml='';
		
		for(let $i=0;$i<8;$i++){
			$strhtml+=`		
					<a href="javascript:;">
					<div class="phone01">
						<img src="${data[$i].url}" alt="">
					</div>
					<p>${data[$i].price}</p>
					<p>${data[$i].title}</p>
					<p>${data[$i].price}</p>
					</a>
			`;
		};
		$eightsmart.html($strhtml);
	});
}(jQuery);






