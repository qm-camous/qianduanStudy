// 获取班级的id
$("ul#banji").on("click","li",function(){  
					 alert($(this).attr("id"));
					  // 删除其他兄弟元素的样式   
					 $(this).siblings('li').removeClass('active'); 
				     //设置选中样式
				     $(this).addClass("active");
				 });

// 获取筛选的课程id
	function course(){
				var aa = $("#course").find("option:selected").text();//选中的文本
				alert(aa);
								}