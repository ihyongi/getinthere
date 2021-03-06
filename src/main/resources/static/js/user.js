let index= {
    init: function () {
        $("#btn-save").on("click", () => { //function(){}, ()=>{} this를 바인딩하기 위해서
            this.save();
        });
        /*$("#btn-login").on("click", () => { //function(){}, ()=>{} this를 바인딩하기 위해서
            this.login();
        });*/
    },

    save: function () {
        //alert("user의 save함수가 호출됨");
        let data = {
            username: $("#username").val(),
            password: $("#password").val(),
            email: $("#email").val()
        };
        //console.log(data);

        //ajax호출시 default가 비동기호출
        //ajax 통신을 이용해서 3개의 데이터를 json으로 변경하여 insert요청!
        $.ajax({
            //회원가입 수행 요청
            type: "post", //insert
            url: "/auth/joinProc",
            data: JSON.stringify(data), //http body데이터
            contentType: "application/json; charset=utf-8", //body 데이터가 어떤 타입인지(MIME)
            dataType: "json" //요청을 서버로해서 응답이 왔을때 기본적으로 모든것이 string(생긴게 json)->자바스크립트 오브젝트로 바꿔줌
        }).done(function (resp) {
            alert("회원가입이 완료되었습니다.");
            console.log(resp);
            location.href = "/";
        }).fail(function (error) {
            alert(JSON.stringify(error));
        });
    },


    /*login:function (){
        //alert("user의 save함수가 호출됨");
        let data={
            username: $("#username").val(),
            password: $("#password").val(),
            email: $("#email").val()
        };
        //console.log(data);

        //ajax호출시 default가 비동기호출
        //ajax 통신을 이용해서 3개의 데이터를 json으로 변경하여 insert요청!
        $.ajax({
            //회원가입 수행 요청
            type:"post", //insert
            url:"/api/user/login",
            data:JSON.stringify(data), //http body데이터
            contentType:"application/json; charset=utf-8", //body 데이터가 어떤 타입인지(MIME)
            dataType:"json" //요청을 서버로해서 응답이 왔을때 기본적으로 모든것이 string(생긴게 json)->자바스크립트 오브젝트로 바꿔줌
        }).done(function(resp){
            alert("로그인이 완료되었습니다.");
            console.log(resp);
            location.href="/";
        }).fail(function(error){
            alert(JSON.stringify(error));
        });
    }*/
}

index.init();