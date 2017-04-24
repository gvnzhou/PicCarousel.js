/**
 * jQuery PicCarousel.js 
 * Version 0.1.5
 *
 * https://github.com/javion25/PicCarousel.js
 * MIT licensed
 *
 * Copyright (C) 2015 Javion.me - A project by Javion
 */
;(function($){

	//定义PicCarousel类
	var PicCarousel = (function(){

		//定义PicCarousel的构造函数
		function PicCarousel(element,options){
			this.settings = $.extend(true,$.fn.PicCarousel.defaults,options||{});
			this.element = element;
			this.init();
		}

		//定义PicCarousel的方法
		PicCarousel.prototype = {
			/*说明：初始化插件*/
			init:function(){
				var me = this;
				this.poster = this.element;
				this.posterItemMain = this.poster.find("ul.poster-list");
				this.nextBtn = this.poster.find("div.poster-next-btn"); 
				this.prevBtn = this.poster.find("div.poster-prev-btn"); 
				this.posterItems = this.poster.find("li.poster-item");

				this.posterFirstItem = this.posterItems.first();
				this.posterLastItem = this.posterItems.last();
				this.rotateFlag =true;

				//设置配置参数值
				this.setSettingValue();
				this.setPosterPost();

				this.nextBtn.click(function(){
					if(me.rotateFlag){
						me.rotateFlag = false;
						me.carouseRotate("left");
						console.log(me.posterFirstItem.attr('id'));
					};
				});

				this.prevBtn.click(function(){
					if(me.rotateFlag){
						me.rotateFlag = false;
						me.carouseRotate("right");
					};
				});

				//是否开启自动播放
				if(this.settings.autoPlay){
					this.autoPlay();
					this.poster.hover(function(){
						window.clearInterval(me.timer);
					},function(){
						me.autoPlay();
					});
				}
			},

			//自动播放方法
			autoPlay:function(){
				var me = this;
				me.timer = window.setInterval(function(){
					me.nextBtn.click();
				},me.settings.delay);
			},

			//旋转方法
			carouseRotate:function(dir){
				var me = this;
				var zIndexArr = [];
				if(dir === "left"){
					me.posterItems.each(function(){
						var self = $(this),
							prev = self.prev().get(0)?self.prev():me.posterLastItem,
							width = prev.width(),
							height = prev.height(),
							zIndex = prev.css("zIndex"),
							opacity = prev.css("opacity"),
							left = prev.css("left"),
							top = prev.css("top");
							zIndexArr.push(zIndex);
							self.animate({
								width:width,
								height:height,
								opacity:opacity,
								left:left,
								top:top
							},me.settings.speed,function(){
								me.rotateFlag = true;
							});
					});
					me.posterItems.each(function(i){
						$(this).css("zIndex",zIndexArr[i]);
					})
				}else if(dir === "right"){
					me.posterItems.each(function(){
						var self = $(this),
							next = self.next().get(0)?self.next():me.posterFirstItem,
							width = next.width(),
							height = next.height(),
							zIndex = next.css("zIndex"),
							opacity = next.css("opacity"),
							left = next.css("left"),
							top = next.css("top");
							zIndexArr.push(zIndex);
							self.animate({
									width:width,
									height:height,
									opacity:opacity,
									left:left,
									top:top
							},me.settings.speed,function(){
								me.rotateFlag = true;
							});
					});
					me.posterItems.each(function(i){
						$(this).css("zIndex",zIndexArr[i]);
					})
				}
			},

			//设置剩余的帧的位置关系
			setPosterPost:function(){
				var me = this;
				var sliceItems = me.posterItems.slice(1),
					sliceSize  = sliceItems.size()/2,
					rightSlice = sliceItems.slice(0,sliceSize),
					level      = Math.floor(me.posterItems.size()/2),
					leftSlice  = sliceItems.slice(sliceSize);

				//设置右边帧的位置关系和宽度、高度、top...
				var rw = me.settings.posterWidth,
					rh = me.settings.posterHeight,
					//((容器宽-帧宽)/2)/层级 190
					gap = ((me.settings.width-me.settings.posterWidth)/2)/level;

				var firstLeft = (me.settings.width-me.settings.posterWidth)/2;
				var fixOffsetLeft = firstLeft + rw;

				//设置右边的位置关系
				rightSlice.each(function(i){
					level--;
					rw = rw*me.settings.scale;
					rh = rh*me.settings.scale;
					var j=i;
					$(this).css({
							zIndex:level,
							width:rw,
							height:rh,
							opacity:1/(++j),
							left:fixOffsetLeft+(++i)*gap-rw,
							top:me.setVertucalAlign(rh)
					});

				});

				//设置左边的位置关系
				var lw = rightSlice.last().width(),
					lh = rightSlice.last().height(),
					oloop = Math.floor(me.posterItems.size()/2);

				// 图片数量为双数时多缩小一倍
                if(me.posterItems.length%2==0){
                    lw=lw * me.settings.scale;
                    lh=lh * me.settings.scale;
                }

				leftSlice.each(function(i){
					$(this).css({
							zIndex:i,
							width:lw,
							height:lh,
							opacity:1/oloop,
							left:i*gap,
							top:me.setVertucalAlign(lh)
					});

					lw = lw/me.settings.scale;
					lh = lh/me.settings.scale;
					oloop--;
				});
			},

			//设置垂直排列对齐
			setVertucalAlign:function(height){
				var me = this;
				var verticalType = me.settings.verticalAlign,
					top = 0;

				if(verticalType === "middle"){
					top = (me.settings.height - height)/2;
				}else if(verticalType === "top"){
					top = 0;
				}else if(verticalType === "bottom"){
					top = me.settings.height - height;
				}else{
					top = (me.settings.height-height)/2;
				};

				return top;
			},

			//配置左右按钮和第一帧位置
			setSettingValue:function(){
				var me = this;
				me.poster.css({
					width:me.settings.width,
					height:me.settings.height
				});

				me.posterItemMain.css({
					width:me.settings.width,
					height:me.settings.height
				});

				//计算左右切换按钮的宽度
				var w = (me.settings.width-me.settings.posterWidth)/2;

				me.nextBtn.css({
					width:w,
					height:me.settings.height,
					zIndex:Math.ceil(me.posterItems.size()/2)
				});
				me.prevBtn.css({
					width:w,
					height:me.settings.height,
					zIndex:Math.ceil(me.posterItems.size()/2)
				});
				me.posterFirstItem.css({
					width:me.settings.posterWidth,
					height:me.settings.posterHeight,
					top: me.setVertucalAlign(me.settings.posterHeight),
					left:w,
					zIndex:Math.floor(me.posterItems.size()/2)
				});
			}
		};
		return PicCarousel;
	})();

	//单例模式,添加PicCarousel方法
	$.fn.PicCarousel = function(options){
		return this.each(function(){
			var me = $(this),
				instance = me.data("PicCarousel");
			if(!instance){
				instance = new PicCarousel(me,options);
				me.data("PicCarousel",instance);
			}
		});
	};

	//默认配置参数
	$.fn.PicCarousel.defaults = {
		"width":1000,		//幻灯片的宽度
		"height":300,		//幻灯片的高度
		"posterWidth":520,	//幻灯片第一帧的宽度
		"posterHeight":300, //幻灯片第一张的高度
		"scale":0.9,		//记录显示比例关系
		"speed":300,		//记录幻灯片滚动速度
		"autoPlay":false,	//是否开启自动播放
		"delay":500,		//自动播放间隔
		"verticalAlign":"middle"	//图片对齐位置
	}


}(jQuery));