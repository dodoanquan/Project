$(document).ready(function(){
   $("#btn-emailsubmit").click(function(){
        var inputEmail = $("#email-submit");
        if(inputEmail.val() === ""){
            $(".error-emailsubmit").text("Email không được để trống!");
            $(".error-emailsubmit").show();
        }
        else if(!validateEmail(inputEmail.val())){
            $(".error-emailsubmit").text("Email không đúng định dạng!");
            $(".error-emailsubmit").show();
        }else{
            $(".error-emailsubmit").text("");
            $(".error-emailsubmit").hide();
        }
    })
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
})