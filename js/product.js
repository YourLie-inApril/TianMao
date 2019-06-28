// 修改商品数量限制
var stock = 66;
var num = $("#number input").val();
$("#number input").keyup(function () {
    num = $("#number input").val();
    // num = parseInt(num);
    if (isNaN(num) || num < 0 || num === "") {
        num = 1;
        $("#number input").val(num);
        // return num;
    } else if (num > stock) {
        num = stock;
        $("#number input").val(num);
        // return num;
    } else {
        num = parseInt(num);
        $("#number input").val(num);
        // return num;
    }
});

// 增加按钮效果
$("#up_arrows").click(function () {
    // console.log(1);
    num++;
    $("#number input").val(num);
    if (num > stock) {
        num = stock;
        $("#number input").val(num);
    }
});
$("#down_arrows").click(function () {
    // console.log(1);
    num--;
    $("#number input").val(num);
    if (num <= 0) {
        num = 1;
        $("#number input").val(num);
    }
});

// 切换tab
$("#add_eva").hide();
$("#tab_eva").click(function () {
    $("#pro_basic").hide();
    $("#add_eva").show();
});
$("#tab_pro").click(function () {
    $("#add_eva").hide();
    $("#pro_basic").show();
});