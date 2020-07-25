/**
 * Created by hesongxian on 2017/5/24.
 */

//原生JS导航栏
function $$(id) {
   return document.getElementById(id);
}

var staticroot = 'http://54sh.csu.edu.cn/';
var root = 'http://54sh.csu.edu.cn/mgr/index.php';

// $(document).ready(function () {
//     $(document).keypress(function(e) {
//         if(e.which === 13) {
//             var v = jQuery('input:focus').val();
//             if (v!==null&&v!==''){
//                 query('word',v);
//             }
//         }
//     });
// });




function getByClass(oParent, sClass) {
   var aEle = oParent.getElementsByTagName("*");
   var re = new RegExp("\\b" + sClass + "\\b");
   var arr = [];

   for (var i = 0; i < aEle.length; i++) {
      if (re.test(aEle[i].className)) {
         arr.push(aEle[i]);
      }
   }
   return arr;
}


function setMainNav() {
   var oMainNav = $$("mainNav");
   var aLi = getByClass(oMainNav, "list")[0].getElementsByTagName("li");
   var aHeaderHover = getByClass(oMainNav, "header_hover");
   var aHoverCont = getByClass(oMainNav, "hover_cont");
   var that = this;
   for(var i=0;i<aLi.length;i++){
       aLi[i].index = i;
       aLi[i].onmouseover = function () {
           // aHoverCont[this.index].className += " "+"header_hover_current";
           for(var j=0;j<aHoverCont.length;j++){
                aHoverCont[j].index_j = j;
                aHoverCont[j].style.display = "none";
                aHoverCont[j].onmouseover = function () {
                    this.style.animation = "dropdown-animation .8s";
                    this.style.display = "block";
                    // aHeaderHover[this.index_j].className += " "+"header_hover_current";
                };
                aHoverCont[j].onmouseout = function () {
                    this.style.animation = "dropdown-animation .8s";
                    this.style.display = "none";
                }
           }
           if(aLi[this.index]){
               aHoverCont[this.index].style.animation = "dropdown-animation .8s";
               aHoverCont[this.index].style.display = "block";
           }
       }
   }

   for (i = 0; i < aLi.length; i++) {
      aLi[i].index = i;
      aLi[i].onmouseout = function () {
         if (aHoverCont[this.index]) {

            aHoverCont[this.index].style.display = "none";
         }
      }
      
   }
}

// 移动端导航
$(function () {
    $('#open_nav').click(function () {
        $('.nav_device').toggle(300);
    });
    $('.header_hover').click(function () {
        var obj = $(this).parent();
        obj.find('.nav_li_r').toggle(400);
        obj.find('.open_list').toggleClass('glyphicon-chevron-up');
        obj.find('.open_list').toggleClass('glyphicon-chevron-down');
    })
});

// 搜索框的动画
// $(function () {
//     $('#search-icon').click(function () {
//         $('#search-input').toggle(1000);
//         $('#search-icon').toggleClass('search-active',1000);
//     })
// });


window.onload = function () {
    setMainNav();
    $('#b03').css('width','100%');
};





$(function () {
    // var top = $(document).height();
    // $('#foot').css('top',top);
    // $('body').css('height',top);

    // console.log(top);
    var logo = new Array;
    logo[0] = $('#nav-logo-1');
    logo[1] = $('#nav-logo-2');
    logo[2] = $('#nav-logo-3');

    function article_display(i,j,k){
        logo[i].mouseover(function(){
            $('#article'+i).css('display','block') ;
            $('#article'+j).css('display','none') ;
            $('#article'+k).css('display','none')
        });
    }

    function nav_active(j,k,l){
        logo[j].mouseover(function(){
            logo[j].attr('class','nav-logo-active');
            logo[j].children('.notice_nav_logo').attr('class','notice_nav_logo  active');
            logo[j].children('.nav-logo-margin-a').attr('class','nav-logo-margin-a  active');
            logo[j].children().children('.nav-a').attr('class','nav-a  active');
            logo[k].attr('class','');
            logo[k].children('.notice_nav_logo').attr('class','notice_nav_logo');
            logo[k].children('.nav-logo-margin-a').attr('class','nav-logo-margin-a');
            logo[k].children().children('.nav-a').attr('class','nav-a');
            logo[l].attr('class','');
            logo[l].children('.notice_nav_logo').attr('class','notice_nav_logo');
            logo[l].children('.nav-logo-margin-a').attr('class','nav-logo-margin-a');
            logo[l].children().children('.nav-a').attr('class','nav-a');
        })
    }
    var activity_ul = $('#activity_ul').children('li');

    function activity_active(k,className) {
        activity_ul.eq(k).mouseover(function(){
            activity_ul.eq(k).attr('class','activity_li active');
            activity_ul.eq(k).children().eq(0).attr('class',className+' active');
        }).mouseout(function(){
            activity_ul.eq(k).attr('class','activity_li');
            activity_ul.eq(k).children().eq(0).attr('class',className);
        });
    }
    nav_active(0,1,2);
    nav_active(1,0,2);
    nav_active(2,1,0);
    article_display(0,1,2);
    article_display(1,0,2);
    article_display(2,1,0);
    activity_active(0,'glyphicon glyphicon-file activity_icon');
    activity_active(1,'glyphicon glyphicon-flag activity_icon');
    activity_active(2,'glyphicon glyphicon-road activity_icon');
    activity_active(3,'glyphicon glyphicon-stats activity_icon');
    activity_active(4,'glyphicon glyphicon-list-alt activity_icon');
});

$(function () {
   $('#follow-wx').click(function () {
        $('.display-pic').css('display','block');
        $('#canvas').css('z-index','999','opacity','0.8');
        $('#wx-pic').css('display','block');
        $('#wb-pic').css('display','none');
   });
    $('#follow-wb').click(function () {
        $('.display-pic').css('display','block');
        $('#canvas').css('z-index','999','opacity','0.8');
        $('#wx-pic').css('display','none');
        $('#wb-pic').css('display','block');
    });
    $('#canvas').click(function () {
        $('.display-pic').css('display','none');
        $('#canvas').css('z-index','-999','opacity','0');
    });

    // $('.zhinan').click(function () {
    //     // $('#connect').toggleClass('connect_left');
    //     if($('.zhinan').hasClass('glyphicon-chevron-left')){
    //         $('#connect').animate({right:'0'});
    //         // $('#connect').css('right','0');
    //     }else{
    //         $('#connect').animate({right:"-250px"});
    //         // $('#connect').css('right','-250px');
    //     }
    //     $('.zhinan').toggleClass('glyphicon-chevron-left');
    //     $('.zhinan').toggleClass('glyphicon-chevron-right');
    // });

});

// (function(){document.write(unescape('%3Cdiv id="bdcs"%3E%3C/div%3E'));var bdcs = document.createElement('script');bdcs.type = 'text/javascript';bdcs.async = true;bdcs.src = 'http://znsv.baidu.com/customer_search/api/js?sid=718164603524533293' + '&plate_url=' + encodeURIComponent(window.location.href) + '&t=' + Math.ceil(new Date()/3600000);var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(bdcs, s);})();


