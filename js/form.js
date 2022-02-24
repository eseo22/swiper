//email
(function(){
    emailjs.init(
    "user_GPCdZok39hmAjE0Uym5Ma");
})();

window.onload = function() {
    var form = document.getElementById("contact-form");

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        this.contact_number.value = Math.random() * 100000 | 0;


        emailjs
            .sendForm('service_iict8jn', 'template_9zw5m0q', this)
            .then(
                function(response) {
                    console.log('메일 발송 성공', response.status, response.text); 
                    alert("문의 내용이 전송되었습니다.");   
                    form.reset();   
                }, 
                function(error) {
                    console.log('메일 발송 실패', error);
                    alert("메일 발송에 실패했습니다.");
                }
            );
    });   
}