 


//날짜 삽입
function clock() {
    const Target = document.getElementById("dateBox");
    
    const now = new Date();
    
    const month = now.getMonth() + 1;
    const date = now.getDate();
    
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    Target.innerText =
        'TODAY' + '\u00A0\u00A0' + (("00"+month.toString()).slice(-2)) + ' - ' + (("00"+date.toString()).slice(-2)) + '\u00A0\u00A0' + (("00"+hours.toString()).slice(-2)) + ':' + (("00"+minutes.toString()).slice(-2)) + ':' + (("00"+seconds.toString()).slice(-2));
}




//흑백 모드
function Darkmode() {
      var target = document.querySelector('#dark');
    
      if(target.value === 'DARK mode'){
      target.value ='LIGHT mode';      
      target.style.color ='#c9c7c7';    
       
      //모든 섹션의 배경색 흑백주기      
      var sDark = document.querySelectorAll('.section');          
      var i = 0;
          while(i < sDark.length){
            sDark[i].style.backgroundColor='#c9c7c7'
            i = i+1;    
                };
          
      document.querySelector('#menu li.active a').style.color ='#c9c7c7';
      document.querySelector('#sec2 h1').style.color= 'black';   
      document.querySelector('#sec3h1').style.color= 'black'; 
      
      //모든 프로젝트 버튼 흑백으로 색변경      
      var rDark = document.querySelectorAll('.redesign, .responsive, .sec3BT a, .mobileBT');
      var i =0;      
          while(i < rDark.length){
            rDark[i].style.color= '#c9c7c7';    
            i = i+1;
                };      

      } else {
          target.value = 'DARK mode'
      }
}




//슬라이드 좌우 이동

function slideLeft(){
      $('#slideBox').stop().animate({'margin-left':'-100%'},700,function() {
        $('.slideIn:first').appendTo('#slideBox');
        $('#slideBox').css('marginLeft',0);
    });
}


function slideRight(){
    $('.slideIn:last').prependTo('#slideBox');
    $('#slideBox').css('margin-left','-100%');
    $('#slideBox').stop().animate({'margin-left':'0'},700);
}










$(function(){
    
    clock();
    setInterval(clock,1000);
    
    
    
    //neon효과
    $('#RtopLeft h5').mouseover(function(){
       $('.neonef1').stop().animate({width:'180px'},300); 
    });
    $('#RtopLeft h5').mouseleave(function(){
       $('.neonef1').stop().animate({width:0},300); 
    });
    
    $('#RtopRight h5').mouseover(function(){
       $('.neonef2').stop().animate({width:'180px'},300); 
    });
    $('#RtopRight h5').mouseleave(function(){
       $('.neonef2').stop().animate({width:0},300); 
    });
    
    $('#sec2Rbot img').mouseover(function(){
       $('.neonef3').stop().animate({width:'210px'},300); 
    });
    $('#sec2Rbot img').mouseleave(function(){
       $('.neonef3').stop().animate({width:0},300); 
    });
    
    
     


     //사이트보기 연길 
     $('.webBT').click(function(){

     });
     
     //모바일화면으로 보기
     $('.mobileBT').click(function(){

        window.open(this.href, 'target','top=200, left=400, width=450, height=700px, toolbar=no, menubar=no, location=no, resizable=no');
     });
     
     
     
     //프로젝트 슬라이드 좌우버튼
    $('.slideRight').click(function(){
        slideLeft();
    });
     
    $('.slideLeft').click(function(){
       slideRight(); 
    });
     
    
    

    

     
     
     
     
});