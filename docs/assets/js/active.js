var jQuery,document,window,location,swal;!function(e){"use strict";const o={dev:"CrazyDH",flex_center:"flex_center",popupVdo:e(".eco--popup")};o.subMenu=e(".sub-menu"),o.subMenu.length&&o.subMenu.each(function(){e(this).closest("li").addClass("has-dropdown")}),o.fnPreloader=(()=>{o.preloader=e(".preloader"),o.preloader.length&&o.preloader.fadeOut(1e3)}),o.heightConfig=(()=>{o.autoHeight=(i=>{let n=-1;i.each(function(){e(this).height()>n&&(n=e(this).height())}),i.height(n).addClass(o.flex_center)}),o.home_height1=e(".eco--home--height--1"),o.autoHeight(o.home_height1),o.sPricing1Li=e(".eco--single--pricing--1 li:first-child"),o.autoHeight(o.sPricing1Li)}),o.smoothScroll=(()=>{e("a.smoothScroll").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")||location.hostname==this.hostname){var o=e(this.hash);if((o=o.length?o:e("[name="+this.hash.slice(1)+"]")).length)return e("html,body").animate({scrollTop:o.offset().top},1e3),!1}})}),o.plugins=(()=>{o.popupVdo.length&&e.fn.magnificPopup&&o.popupVdo.magnificPopup({disableOn:0,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!0,fixedContentPos:!1}),o.mainMenu=e(".eco--main--menu")}),o.consoleTxt=(()=>{o.consoleStyle=["font-size: 10px","color: #ffffff","background-color: #2e7d32","display: block","text-align: left","font-weight: bold","display: inline-block"].join(";"),document.querySelector(".eco--home--image-1").classList.remove("hidden"),inject(),console.log("%c SITE LOADED 100%, - Created by "+o.dev,o.consoleStyle)}),o.docReady=(()=>{o.fnPreloader(),o.heightConfig(),o.smoothScroll(),o.plugins()}),o.winLoad=(()=>{o.consoleTxt(),o.heightConfig()}),e(document).ready(o.docReady),e(window).on("load",o.winLoad)}(jQuery);