$(".downMenuBox div").click(function(){
    $(this).toggleClass('hover').siblings().removeClass('hover');
})
//下拉框滑入滑出效果
$(".downMenuBox div").click(function(){
	//收回
	$(".downMenuBox div").not(this).next(".MenuCenter").slideUp(350);
	//显示
	$(this).next(".MenuCenter").slideToggle(350);
});
//添加快递
$(".increaseColor").click(function(){
	//克隆节点
	var $newNode = $(".TdClone:last").clone(true,true);
	$newNode.find(".increaseColor").remove();
	$newNode.find(".increaseTxt").remove();
	$newNode.find(".increaseColor1").show();
	//插入节点
	$(this).parent().parent().parent().append($newNode);
})
//点击删除快递
$(".increaseColor1").click(function(){
	$(this).parent().parent().remove();
})