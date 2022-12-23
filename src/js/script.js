$(document).ready(function(){
  $('.carousel__inner').slick({

        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows: false
              }
            }
            
        ]
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

  $('.catalog-item__link').each(function(i) {
    $(this).on('click', function(e) {
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    });
  });

  $('.catalog-item__back').each(function(i) {
    $(this).on('click', function(e) {
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    });
  });
  
  //Windows
$('[data-window=consultation]').on('click', function () {
  $('.overlay, #consultation').fadeIn('slow');
});

$('.window__close').on('click', function(){
  $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
});
$('.button_mini').on('click', function () {
  $('.overlay, #order').fadeIn('slow');
});

$('.button_mini').each(function(i) {
$(this).on('click', function () {
 $('#order .window__descr').text($('.catalog-item__subtitle').eq(i).text());
 $('.overlay, #order').fadeIn('slow');
});
});

  function valideForms(form){
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: { 
          required: true,
          email: true
      }
      },
      messages: {
        name: {
          required: "Please, enter your name",
          minlength: jQuery.validator.format("At least {0} characters required!")
        },
        phone: "Please enter your phone number",
        email: {
          required: "Please enter your email",
          email: "This emais is incorrect"
        }
      }
      
      });
  };
  valideForms('#consultation-form');
  valideForms('#consultation form');
  valideForms('#order form');

  $('input[name=phone]').mask("+44 999-999-9999");

});        