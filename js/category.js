// 动态获取输入框值
$("#price input").keyup(function () {
    var begin = $("#begin_price").val();
    var end = $("#end_price").val();
    begin = parseFloat(begin);
    end = parseFloat(end);
    // console.log("begin=" + begin);
    // console.log("end=" + end);
    // 无值全显示
    if (isNaN(begin) && isNaN(end)) {
        $(".product").show();
    } else if (!isNaN(begin) || !isNaN(end)) {
        $(".product").hide();
        // 遍历.product
        $(".product").each(function () {
            var price = $(this).attr("price");
            price = parseFloat(price);
            // console.log(price);
            // 三种情况
            if (price >= begin && isNaN(end)) {
                $(this).show();
            }else if (price <= end && isNaN(begin)) {
                $(this).show();
            }else if (price >= begin && price <= end) {1
                // console.log(this);
                $(this).show();
            }
        });
    }
});