$(document).ready(function(){
    $("#button-sub").click(function(){
        var inputEmail = $("#email");
        if(inputEmail.val() === ""){
            $(".error-email").text("Email không được để trống!");
            $(".error-email").show();
        }
        else if(!validateEmail(inputEmail.val())){
            $(".error-email").text("Email không đúng định dạng!");
            $(".error-email").show();
        }else{
            $(".error-email").text("");
            $(".error-email").hide();
        }
    })
    $("#form").validate({
        rules: {
            name:{
                required: true,
                minlength: 8
            },
            place:{
                required: true
            }
        },
        messages: {
            name:{
                required: "Họ và tên không được để trống!",
                minlength: "Họ và tên phải trên 8 kí tự!"
            },
            place:{
                required: "Địa chỉ không được để trống!",
            }
        }
    })
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
})