//基本信息和更多个人信息切换
$(".User_information_txt").on("click",function(){
	$(".User_information_txt").removeClass("User_information_txt_click");
	$(this).addClass("User_information_txt_click");
	var index = $(this).index();
	$(".User_information_ul").hide();
	$(".User_information_ul").eq(index).show();
})
//点击确定保存设置
$(".confirm_btn_2").on("click",function(){
	$(".public1_return_btn").css("display","none");
	$(".public1_return_btn_1").css("display","inline-block");
	$(".public1_head_txt").text("我的资料");
	$(".center_box_1").show();
	$(".nickname_out_box_2").hide();
	$(".public1-head-box").css("background","#ffffff");
	$("body").css("background","#f5f5f5");
	$(this).hide();
	$(".secrecy").text(new_txt);
})
//返回我的资料
$(".public1_return_img_2").on("click",function(){
	$(".public1_return_btn").css("display","none");
	$(".public1_return_btn").eq(0).css("display","inline-block");
	$(".public1_head_txt").text("我的资料");
	$(".center_box_1").show();
	$(".nickname_out_box_2").hide();
	$(".public1-head-box").css("background","#ffffff");
	$("body").css("background","#f5f5f5")
	$(".confirm_btn_2").hide();
})
//修改用户名
var THIS;
var information;
$(".User_information_li_1").on("click",function(){
	//隐藏信息版面
	$(".center_box_1").hide();
	//显示信息修改块
	$(".nickname_out_box_1").show();
	//修改头部文本
	$(".public1_head_txt").text("修改用户名");
	//生成返回我的资料按钮
	$(".public1_return_btn").css("display","none");
	$(".public1_return_btn_1").css("display","inline-block");
	//生成确定修改按钮
	$(".confirm_btn_1").show();
	THIS = $(this);
	//获取未修改前的信息
	information = THIS.find(".User_information_right").text();
	//将获取的信息写入修改框
	$(".nickname_ipt").val(information);
})
//确定修改
$(".confirm_btn_1").on("click",function(){
	//显示信息版面
	$(".center_box_1").show();
	//隐藏信息修改块
	$(".nickname_out_box_1").hide();
	//修改头部文本
	$(".public1_head_txt").text("我的资料");
	//返回按钮修改
	$(".public1_return_btn").css("display","inline-block");
	$(".public1_return_btn_1").css("display","none");
	//隐藏确定修改按钮
	$(".confirm_btn_1").hide();
	//写入修改的信息
    THIS.find(".User_information_right").text($(".nickname_ipt").val());
})
//取消修改
$(".cancel_btn").on("click",function(){
	$(".nickname_ipt").val(" ");
})
//性别修改
var sex;
$(".User_information_li_3").on("click",function(){
	//隐藏信息块
	$(".center_box_1").hide();
	//显示修改块
	$(".nickname_out_box_2").show();
	//生成返回我的资料按钮
	$(".public1_return_btn").css("display","none");
	$(".public1_return_btn_1").css("display","inline-block");
	//修改头部文本
	$(".public1_head_txt").text("性别设置");
	sex = $(this);
})
//点击选择性别
var new_txt_1;
$(".nickname_out_box_2").find(".Gender_li").on("click",function(){
	$(".Tick_img").css("display","none");
	$(this).find(".Tick_img").css("display","inline-block");
	new_txt_1 = $(this).find(".Gender_txt").text();
	sex.find(".secrecy").text(new_txt_1);
})
//确定性别修改
$(".OK_button_btn_1").on("click",function(){
	//显示信息块
	$(".center_box_1").show();
	//隐藏修改块
	$(".nickname_out_box_2").hide();
	//返回按钮修改
	$(".public1_return_btn").css("display","inline-block");
	$(".public1_return_btn_1").css("display","none");
	//修改头部文本
	$(".public1_head_txt").text("我的资料");
	sex.find(".ecrecy").text(new_txt_1);
})
$(".nickname_out_ipt").on("click",function(){
	$(".prompt_box").text(" ");
	$(".prompt_box").hide();
})
//婚姻状况修改
$(".User_information_li_7").on("click",function(){
	//隐藏信息块
	$(".center_box_1").hide();
	//显示修改块
	$(".nickname_out_box_4").show();
	//生成返回我的资料按钮
	$(".public1_return_btn").css("display","none");
	$(".public1_return_btn_1").css("display","inline-block");
	//修改头部文本
	$(".public1_head_txt").text("婚姻状况");
})
//点击选择婚姻状态
var new_txt_2;
$(".nickname_out_box_4").find(".Gender_li").on("click",function(){
	$(".Tick_img").css("display","none");
	$(this).find(".Tick_img").css("display","inline-block");
	new_txt_2 = $(this).find(".Gender_txt").text();
})
//确认修改
$(".OK_button_btn_3").on("click",function(){
	//显示信息块
	$(".center_box_1").show();
	//隐藏修改块
	$(".nickname_out_box_4").hide();
	//返回按钮修改
	$(".public1_return_btn").css("display","inline-block");
	$(".public1_return_btn_1").css("display","none");
	//修改头部文本
	$(".public1_head_txt").text("我的资料");
	$(".User_information_li_7").find(".User_information_right").text(new_txt_2);
})
//月收入
$(".User_information_li_8").on("click",function(){
	//隐藏信息块
	$(".center_box_1").hide();
	//显示修改块
	$(".nickname_out_box_5").show();
	//生成返回我的资料按钮
	$(".public1_return_btn").css("display","none");
	$(".public1_return_btn_1").css("display","inline-block");
	//修改头部文本
	$(".public1_head_txt").text("月收入修改");
})
//选择月收入
var new_txt_3;
$(".nickname_out_box_5").find(".Gender_li").on("click",function(){
	$(".Tick_img").css("display","none");
	$(this).find(".Tick_img").css("display","inline-block");
	new_txt_3 = $(this).find(".Gender_txt").text();
})
//确认修改
$(".OK_button_btn_4").on("click",function(){
	//显示信息块
	$(".center_box_1").show();
	//隐藏修改块
	$(".nickname_out_box_5").hide();
	//返回按钮修改
	$(".public1_return_btn").css("display","inline-block");
	$(".public1_return_btn_1").css("display","none");
	//修改头部文本
	$(".public1_head_txt").text("我的资料");
	$(".User_information_li_8").find(".User_information_right").text(new_txt_3);
})
//学历修改
$(".User_information_li_9").on("click",function(){
	//隐藏信息块
	$(".center_box_1").hide();
	//显示修改块
	$(".nickname_out_box_6").show();
	//生成返回我的资料按钮
	$(".public1_return_btn").css("display","none");
	$(".public1_return_btn_1").css("display","inline-block");
	//修改头部文本
	$(".public1_head_txt").text("学历修改");
})
//选择学历
var new_txt_4;
$(".nickname_out_box_6").find(".Gender_li").on("click",function(){
	$(".Tick_img").css("display","none");
	$(this).find(".Tick_img").css("display","inline-block");
	new_txt_4 = $(this).find(".Gender_txt").text();
})
//确认修改
$(".OK_button_btn_5").on("click",function(){
	//显示信息块
	$(".center_box_1").show();
	//隐藏修改块
	$(".nickname_out_box_6").hide();
	//返回按钮修改
	$(".public1_return_btn").css("display","inline-block");
	$(".public1_return_btn_1").css("display","none");
	//修改头部文本
	$(".public1_head_txt").text("我的资料");
	$(".User_information_li_9").find(".User_information_right").text(new_txt_4);
})
//所在行业
$(".User_information_li_10").on("click",function(){
	//隐藏信息块
	$(".center_box_1").hide();
	//显示修改块
	$(".nickname_out_box_7").show();
	//生成返回我的资料按钮
	$(".public1_return_btn").css("display","none");
	$(".public1_return_btn_1").css("display","inline-block");
	//修改头部文本
	$(".public1_head_txt").text("行业修改");
})
//选择行业
var new_txt_5;
$(".nickname_out_box_7").find(".Gender_li").on("click",function(){
	$(".Tick_img").css("display","none");
	$(this).find(".Tick_img").css("display","inline-block");
	new_txt_5 = $(this).find(".Gender_txt").text();
})
//确认修改
$(".OK_button_btn_6").on("click",function(){
	//显示信息块
	$(".center_box_1").show();
	//隐藏修改块
	$(".nickname_out_box_7").hide();
	//返回按钮修改
	$(".public1_return_btn").css("display","inline-block");
	$(".public1_return_btn_1").css("display","none");
	//修改头部文本
	$(".public1_head_txt").text("我的资料");
	$(".User_information_li_10").find(".User_information_right").text(new_txt_5);
})
//修改提示文本改变
$(".User_information_li").eq(5).on("click",function(){
	$(".Notes").text(" ");
})
$(".User_information_li").eq(10).on("click",function(){
	$(".Notes").text(" ");
})
$(".public1_return_btn_1").on("click",function(){
	$(".Notes").text("4-20个字符，可有中英文、数字、“_”、“-”组成");
	//返回按钮修改
	$(".public1_return_btn").css("display","inline-block");
	$(".public1_return_btn_1").css("display","none");
	$(".nickname_out_box").hide();
	$(".confirm_btn_1").hide();
	$(".center_box_1").show();
	$(".public1_head_txt").text("我的资料");
})
//修改出生日期
$(".User_information_li_4").on("click",function(){
	//隐藏信息块
	$(".center_box_1").hide();
	//显示修改块
	$(".nickname_out_box_3").show();
	//生成返回我的资料按钮
	$(".public1_return_btn").css("display","none");
	$(".public1_return_btn_1").css("display","inline-block");
	//修改头部文本
	$(".public1_head_txt").text("出生日期设置");
})
//确认修改
$(".OK_button_btn_2").on("click",function(){
	//显示信息块
	$(".center_box_1").show();
	//隐藏修改块
	$(".nickname_out_box_3").hide();
	//返回按钮修改
	$(".public1_return_btn").css("display","inline-block");
	$(".public1_return_btn_1").css("display","none");
	//修改头部文本
	$(".public1_head_txt").text("我的资料");
	//写入日期
	var date_txt = $(".date_ipt_2").val();
    $(".date_ipt_1").val(date_txt);
	$(".User_information_li_4").find(".nickname_txt").text(date_txt);
})
$(".date_ipt_2").on("click",function(){
	var txt = $(this).val();
})
//设置高度
$(".img_box").css("height",$(".user_portrait").height());
