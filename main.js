/*-----------------------------------------------------------------------------------
  Template Name: Asbab eCommerce HTML5 Template.
  Template URI: #
  Description: Asbab is a unique website template designed in HTML with a simple & beautiful look.
  Author: HasTech
  Author URI: https://themeforest.net/user/hastech/portfolio
  Version: 1.0
-----------------------------------------------------------------------------------*/

/*-------------------------------
[  Table of contents  ]
---------------------------------
    01. jQuery MeanMenu
    02. wow js active
    03. Product  Masonry (width)
    04. Sticky Header
    05. ScrollUp
    06. Search Bar
    07. Shopping Cart Area
    08. Filter Area
    09. Toggle Menu   
    10. User Menu 
    11. Menu 
    12. Menu Dropdown
    13. Overlay Close
    14. Testimonial Image Slider As Nav
    15. Brand Area
    16. Price Slider Active
    17. Accordion
    18. Ship to another
    19. Payment credit card    
    20. Slider Activations
-----------------------------------
*/

(function($) {
    'use strict';

    /*-------------------------------------------
        01. jQuery MeanMenu
    --------------------------------------------- */
    $('.mobile-menu nav').meanmenu({
        meanMenuContainer: '.mobile-menu-area',
        meanScreenWidth: "991",
        meanRevealPosition: "right",
    });

    /*-------------------------------------------
        02. wow js active
    --------------------------------------------- */
    new WOW().init();

    /*-------------------------------------------
        03. Product Masonry (width)
    --------------------------------------------- */ 
    $('.htc__product__container').imagesLoaded(function() {
        // init Isotope
        var $grid = $('.product__list').isotope({
            itemSelector: '.single__pro',
            percentPosition: true,
            transitionDuration: '0.7s',
            masonry: {
                columnWidth: '.single__pro',
            }
        });

        // filter items on button click
        $('.product__menu').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
            $(this).siblings('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });

    /*-------------------------------------------
        04. Sticky Header
    --------------------------------------------- */ 
    var win = $(window);
    var sticky_id = $("#sticky-header-with-topbar");
    win.on('scroll', function() {    
        var scroll = win.scrollTop();
        if (scroll < 245) {
            sticky_id.removeClass("scroll-header");
        } else {
            sticky_id.addClass("scroll-header");
        }
    });

    /*--------------------------
        05. ScrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    /*------------------------------------    
        06. Search Bar
    --------------------------------------*/ 
    $('.search__open').on('click', function() {
        $('body').toggleClass('search__box__show__hide');
        return false;
    });
    $('.search__close__btn .search__close__btn_icon').on('click', function() {
        $('body').toggleClass('search__box__show__hide');
        return false;
    });

    /*------------------------------------    
        07. Shopping Cart Area
    --------------------------------------*/
    $('.cart__menu').on('click', function(e) {
        e.preventDefault();
        $('.shopping__cart').addClass('shopping__cart__on');
        $('.body__overlay').addClass('is-visible');
    });
    $('.offsetmenu__close__btn').on('click', function(e) {
        e.preventDefault();
        $('.shopping__cart').removeClass('shopping__cart__on');
        $('.body__overlay').removeClass('is-visible');
    });

    /*------------------------------------    
        08. Filter Area
    --------------------------------------*/
    $('.filter__menu').on('click', function(e) {
        e.preventDefault();
        $('.filter__wrap').addClass('filter__menu__on');
        $('.body__overlay').addClass('is-visible');
    });
    $('.filter__menu__close__btn').on('click', function(e) {
        e.preventDefault();
        $('.filter__wrap').removeClass('filter__menu__on');
        $('.body__overlay').removeClass('is-visible');
    });

    /*------------------------------------    
        09. Toggle Menu
    --------------------------------------*/
    $('.toggle__menu').on('click', function(e) {
        e.preventDefault();
        $('.offsetmenu').addClass('offsetmenu__on');
        $('.body__overlay').addClass('is-visible');
    });
    $('.offsetmenu__close__btn').on('click', function(e) {
        e.preventDefault();
        $('.offsetmenu').removeClass('offsetmenu__on');
        $('.body__overlay').removeClass('is-visible');
    });

    /*------------------------------------    
        10. User Menu
    --------------------------------------*/
    $('.user__menu').on('click', function(e) {
        e.preventDefault();
        $('.user__meta').addClass('user__meta__on');
        $('.body__overlay').addClass('is-visible');
    });
    $('.offsetmenu__close__btn').on('click', function(e) {
        e.preventDefault();
        $('.user__meta').removeClass('user__meta__on');
        $('.body__overlay').removeClass('is-visible');
    });

    /*------------------------------------    
        11. Menu 
    --------------------------------------*/
    $('.menu__click').on('click', function(e) {
        e.preventDefault();
        $('.off__canvars__wrap').addClass('off__canvars__wrap__on');
        $('.body__overlay').addClass('is-visible');
        $('body').addClass('off__canvars__open');
        $(this).hide();
    });
    $('.menu__close__btn').on('click', function() {
        $('.off__canvars__wrap').removeClass('off__canvars__wrap__on');
        $('.body__overlay').removeClass('is-visible');
        $('body').removeClass('off__canvars__open');
        $('.menu__click').show();
    });

    /*------------------------------------    
        12. Menu Dropdown
    --------------------------------------*/
    function offCanvasMenuDropdown(){
        $('.off__canvars__dropdown-menu').hide();
        $('.off__canvars__dropdown > a').on('click', function(e){
            e.preventDefault();
            $(this).find('i.zmdi').toggleClass('zmdi-chevron-up');
            $(this).siblings('.off__canvars__dropdown-menu').slideToggle();
        });
    }
    offCanvasMenuDropdown();

    /*------------------------------------    
        13. Overlay Close
    --------------------------------------*/
    $('.body__overlay').on('click', function() {
        $(this).removeClass('is-visible');
        $('.offsetmenu, .shopping__cart, .filter__wrap, .user__meta, .off__canvars__wrap').removeClass('offsetmenu__on shopping__cart__on filter__menu__on user__meta__on off__canvars__wrap__on');
        $('body').removeClass('off__canvars__open');
        $('.menu__click').show();
    });

    /*-----------------------------------------------
        14. Testimonial Image Slider As Nav
    -----------------------------------------------*/
    $('.ht__testimonial__activation').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        swipeToSlide: true,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '10px',
        responsive: [
            { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1, centerPadding: '10px' } },
            { breakpoint: 320, settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: false, focusOnSelect: false } }
        ]
    });

    /*-----------------------------------------------
        15. Brand Area
    -----------------------------------------------*/
    $('.brand__list').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay: true,
        autoplayTimeout: 10000,
        items: 5,
        dots: false,
        lazyLoad: true,
        responsive: { 0: { items: 2 }, 767: { items: 4 }, 991: { items: 5 } }
    });

    /*-------------------------------
        16. Price Slider Active
    --------------------------------*/
    $("#slider-range").slider({
        range: true,
        min: 10,
        max: 500,
        values: [110, 400],
        slide: function(event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));

    /*-----------------------------------------------
        17. Accordion
    -----------------------------------------------*/
   function emeAccordion(){
    // Hide all bodies except first
    $('.accordion__body').hide();
    $('.accordion__body').first().show();
    $('.accordion__title').removeClass('active');
    $('.accordion__title').first().addClass('active');

    // Click event
    $('.accordion__title').click(function(){
        var $this = $(this);
        $this.addClass('active').siblings('.accordion__title').removeClass('active');
        
        // Slide toggle the corresponding body
        $this.next('.accordion__body').slideDown();
        // Slide up all other bodies
        $('.accordion__body').not($this.next()).slideUp();
    });
}

// Call the function
$(document).ready(function(){
    emeAccordion();
});

    emeAccordion();

    /*-----------------------------------------------
        18. Ship to another
    -----------------------------------------------*/
    function shipToAnother(){
        $('.ship-to-another-trigger').on('click', function(e){
            e.preventDefault();
            $('.ship-to-another-content').slideToggle();
        });
    }
    shipToAnother();

    /*-----------------------------------------------
        19. Payment credit card
    -----------------------------------------------*/
    function paymentCreditCard(){
        $('.paymentinfo-credit-trigger').on('click', function(e){
            e.preventDefault();
            $('.paymentinfo-credit-content').slideToggle();
        });
    }
    paymentCreditCard();

    /*-----------------------------------------------
        20. Slider Activations
    -----------------------------------------------*/
    if ($('.slider__activation__wrap').length) {
        $('.slider__activation__wrap').owlCarousel({
            loop: true,
            margin:0,
            nav:true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            smartSpeed: 1000,
            autoplay: false,
            navText: [ '<i class="icon-arrow-left icons"></i>', '<i class="icon-arrow-right icons"></i>' ],
            autoplayTimeout: 10000,
            items:1,
            dots: false,
            lazyLoad: true,
            responsive: { 0: { items: 1 }, 767: { items: 1 }, 991: { items: 1 } }
        });
    }

})(jQuery);
function manage_cart(pid, type) {
    let qty=1;

    if (type === 'update') {
        qty = jQuery("#" + pid + "qty").val();
    } 
    else if (type === 'add') {
        qty = jQuery("#qty" ).val();

    } 


    jQuery.ajax({
        url: 'manage_cart.php',
        type: 'post',
        data: 'pid=' + pid + '&qty=' + qty + '&type=' + type,
        success: function(result) {
             // 🔥 FIX: refresh immediately for ADD also
            if (type === 'add' || type === 'update' || type === 'remove') {
                location.reload();
            }
           
            jQuery('.htc_qua').html(result);
        }
    });
}
function sort_product_drop(cat_id, site_path){
    var sort_product_id = document.getElementById('sort_product_id').value; 
    console.log("Sorting by:", sort_product_id); // Debug log
    
    if(sort_product_id != ''){
        window.location.href = site_path + "categories.php?id=" + cat_id + "&sort=" + sort_product_id;
    } else {
        window.location.href = site_path + "categories.php?id=" + cat_id;
    }
}

function wishlist_manage(pid,type){
	jQuery.ajax({
		url:'wishlist_manage.php',
		type:'post',
		data:'pid='+pid+'&type='+type,
		success:function(result){
			if(result=='not_login'){
				window.location.href='login.php';
			}else{
				jQuery('.htc__wishlist').html(result);
			}
		}	
	});	
}




