import $ from 'jquery';

$(() => {
    let added = false;
    const scrollClass = 'page-header--scrolled';
    const $header = $('.page-header');
    const $prevHeader = $header.prev();

    $(window).on('scroll load resize', function() {
        const offsetTop = $prevHeader.offset().top + $prevHeader.outerHeight();

        if(this.scrollY >= offsetTop && !added) {
            $header.addClass(scrollClass);
            added = true;
        } else if(this.scrollY < offsetTop && added) {
            $header.removeClass(scrollClass);
            added = false;
        }
    });

    //
    //

    const btnOn = 'fa-times';
    const btnOff = 'fa-bars';
    const dropdownMenu = 'show';
    const $navbar = $header.find('.navbar-collapse');
    const $toggleBtn = $header.find('.navbar-toggler');
    const $toggleIcon = $toggleBtn.find('i');
    const $closeBtn = $header.find('.page-header__close');

    $toggleBtn.on('click',  function() {
        $toggleIcon.toggleClass(btnOff).toggleClass(btnOn);

        if(!$navbar.hasClass(dropdownMenu)) {
            $navbar.stop(true, false).slideDown('slow').addClass(dropdownMenu);
        } else {
            $navbar.stop(true, false).slideUp('slow').removeClass(dropdownMenu);
        }
    });

    $closeBtn.on('click', function() {
        $toggleBtn.click();
    });
});