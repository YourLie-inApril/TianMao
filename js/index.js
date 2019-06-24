// 鼠标移入，显示猫耳
$("#menu a").mouseenter(function () {
    var left = $(this).position().left;
    var top = $(this).position().top;
    var width = $(this).css("width");
    var fin_left = parseInt(left) + parseInt(width) / 2;

    $("#cat_ear").css("left", fin_left);
    $("#cat_ear").css("top", top - 15);
    $("#cat_ear").fadeIn(500);
});
// 鼠标移出，隐藏猫耳
$("#menu a").mouseleave(function () {
    $("#cat_ear").hide();
});

// 显示产品列表
function showProducts(cid) {
    $(".each_category[cid = " + cid + "] a").css("color","#87cefa");
    $(".product_list[cid = " + cid + "]").show();
}
// 鼠标移入，获取cid
$(".each_category,.product_list").mouseenter(function () {
    var cid = $(this).attr("cid");
    showProducts(cid);
});
// 隐藏产品列表
function hideProducts(cid) {
    $(".each_category[cid = " + cid + "] a").css("color","#000");
    $(".product_list[cid = " + cid + "]").hide();
}
// 鼠标移出，获取cid
$(".each_category,.product_list").mouseleave(function () {
    var cid = $(this).attr("cid");
    hideProducts(cid);
});