$(document).ready(function(){
    $('.owl-1').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })
    $("#form-comment").validate({
        rules: {
            name:{
                required: true,
                minlength: 8
            }
        },
        messages: {
            name:{
                required: "Họ và tên không được để trống!",
                minlength: "Họ và tên phải lớn hơn 8 kí tự!"
            }
        }
    })
    $("#button-cmt").click(function(){
        var inputEmail = $("#form-email");
        if(inputEmail.val() === ""){
            $(".email-error").text("Email không được để trống!");
            $(".email-error").show();
        }
        else if(!validateEmail(inputEmail.val())){
            $(".email-error").text("Email không đúng định dạng!");
            $(".email-error").show();
        }else{
            $(".email-error").text("");
            $(".email-error").hide();
        }
    })
    $(".star").click(function(){
        $(this).children("i").toggleClass("active-star");
        $(".star").click(function(){
                var thisClassName = $(this).children("i").attr("class");
                if (thisClassName == "active-star") {
                    $(this).children("i").removeClass("active-star");
                    }
                    else{
                    $(".star").children().removeClass("active-star");
                    $(this).children("i").addClass("active-star");
                }
            })
    })
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
})