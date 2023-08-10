jQuery(document).ready(function () {
  "use strict";
  shane_tm_color_switcher();
  shane_tm_switcher_opener();
  shane_tm_cursor_switcher();
  shane_tm_modalbox();
  shane_tm_portfolio();
  shane_tm_projects();
  shane_tm_portfolio_popup();
  shane_tm_modalbox_news();
  shane_tm_modalbox_contact();
  shane_tm_nav_bg();
  shane_tm_down();
  shane_tm_hamburger();
  shane_tm_cursor();
  shane_tm_imgtosvg();
  shane_tm_popup();
  shane_tm_data_images();
  shane_tm_contact_form();
  shane_tm_jarallax();
  shane_tm_owl_carousel();
  shane_tm_totop();
  shane_tm_down_anchor();
  jQuery(window).load("body", function () {
    shane_tm_my_load();
  });
  jQuery(window).on("scroll", function () {
    shane_tm_progress_line();
  });
});
function shane_tm_color_switcher() {
  "use strict";
  var list = jQuery(".shane_tm_settings .colors li a");
  list.on("click", function () {
    var element = jQuery(this);
    var elval = element.attr("class");
    element.closest(".shane_tm_all_wrap").attr("data-color", "" + elval + "");
    return false;
  });
}
function shane_tm_switcher_opener() {
  "use strict";
  var settings = jQuery(".shane_tm_settings");
  var button = settings.find(".link");
  var direction = settings.find(".direction li a");
  var light = settings.find(".direction li a.light");
  var dark = settings.find(".direction li a.dark");
  button.on("click", function () {
    var element = jQuery(this);
    if (element.hasClass("opened")) {
      element.removeClass("opened");
      element.closest(".shane_tm_settings").removeClass("opened");
    } else {
      element.addClass("opened");
      element.closest(".shane_tm_settings").addClass("opened");
    }
    return false;
  });
  direction.on("click", function () {
    var element = jQuery(this);
    if (!element.hasClass("active")) {
      direction.removeClass("active");
      element.addClass("active");
    }
  });
  dark.on("click", function () {
    var el = jQuery(this);
    jQuery("body").addClass("dark");
    jQuery(".shane_tm_partners").addClass("opened");
    el.closest(".shane_tm_settings").addClass("changed");
    return false;
  });
  light.on("click", function () {
    var ele = jQuery(this);
    jQuery("body").removeClass("dark");
    jQuery(".shane_tm_partners").removeClass("opened");
    ele.closest(".shane_tm_settings").removeClass("changed");
    return false;
  });
}
function shane_tm_cursor_switcher() {
  "use strict";
  var wrapper = jQuery(".shane_tm_all_wrap");
  var button = jQuery(".shane_tm_settings .cursor li a");
  var show = jQuery(".shane_tm_settings .cursor li a.show");
  var hide = jQuery(".shane_tm_settings .cursor li a.hide");
  button.on("click", function () {
    var element = jQuery(this);
    if (!element.hasClass("showme")) {
      button.removeClass("showme");
      element.addClass("showme");
    }
    return false;
  });
  show.on("click", function () {
    wrapper.attr("data-magic-cursor", "");
  });
  hide.on("click", function () {
    wrapper.attr("data-magic-cursor", "hide");
  });
}
jQuery(".player").YTPlayer();
function shane_tm_modalbox() {
  "use strict";
  jQuery(".shane_tm_all_wrap").prepend(
    '<div class="shane_tm_modalbox"><div class="box_inner"><div class="close"><a href="#"><i class="icon-cancel"></i></a></div><div class="description_wrap"></div></div></div>'
  );
}
function shane_tm_portfolio() {
  "use strict";
  if (jQuery().isotope) {
    var filter = jQuery(".shane_tm_portfolio .portfolio_filter ul");
    if (filter.length) {
      filter.find("a").on("click", function () {
        var element = jQuery(this);
        var selector = element.attr("data-filter");
        var list = element
          .closest(".shane_tm_portfolio")
          .find(".portfolio_list")
          .children("ul");
        list.isotope({
          filter: selector,
          animationOptions: { duration: 750, easing: "linear", queue: false },
        });
        filter.find("a").removeClass("current");
        element.addClass("current");
        return false;
      });
    }
  }
}
function shane_tm_projects() {
  "use strict";
  jQuery(".shane_tm_portfolio_animation_wrap").each(function () {
    jQuery(this)
      .on("mouseenter", function () {
        if (jQuery(this).data("title")) {
          jQuery(".shane_tm_portfolio_titles").html(
            jQuery(this).data("title") +
              '<span class="work__cat">' +
              jQuery(this).data("category") +
              "</span>"
          );
          jQuery(".shane_tm_portfolio_titles").addClass("visible");
        }
        jQuery(document).on("mousemove", function (e) {
          jQuery(".shane_tm_portfolio_titles").css({
            left: e.clientX - 10,
            top: e.clientY + 25,
          });
        });
      })
      .on("mouseleave", function () {
        jQuery(".shane_tm_portfolio_titles").removeClass("visible");
      });
  });
}
function shane_tm_portfolio_popup() {
  "use strict";
  var modalBox = jQuery(".shane_tm_modalbox");
  var button = jQuery(".shane_tm_portfolio .portfolio_popup");
  var closePopup = modalBox.find(".close");
  button.off().on("click", function () {
    var element = jQuery(this);
    var parent = element.closest(".inner");
    var content = parent.find(".hidden_content").html();
    var image = parent.find(".entry .main").data("img-url");
    var category = parent.find(".entry").data("category");
    var title = parent.find(".entry").data("title");
    modalBox.addClass("opened");
    modalBox.find(".description_wrap").html(content);
    modalBox
      .find(".popup_details")
      .prepend(
        '<div class="top_image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="' +
          image +
          '"></div></div>'
      );
    modalBox
      .find(".popup_details .top_image")
      .after(
        '<div class="portfolio_main_title"><h3>' +
          title +
          '</h3><span><a href="#">' +
          category +
          "</a></span><div>"
      );
    shane_tm_data_images();
    return false;
  });
  closePopup.on("click", function () {
    modalBox.removeClass("opened");
    modalBox.find(".description_wrap").html("");
    return false;
  });
}
function shane_tm_modalbox_news() {
  "use strict";
  var modalBox = jQuery(".shane_tm_modalbox");
  var button = jQuery(
    ".shane_tm_news .shane_tm_full_link,.shane_tm_news .news_list ul li .details .title a"
  );
  var closePopup = modalBox.find(".close");
  button.on("click", function () {
    var element = jQuery(this);
    var parent = element.closest(".list_inner");
    var content = parent.find(".news_hidden_details").html();
    var image = element
      .closest(".list_inner")
      .find(".image .main")
      .data("img-url");
    var title = parent.find(".details .title a").text();
    modalBox.addClass("opened");
    modalBox.find(".description_wrap").html(content);
    modalBox
      .find(".news_popup_informations")
      .prepend(
        '<div class="image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="' +
          image +
          '"></div></div>'
      );
    modalBox
      .find(".news_popup_informations .image")
      .after('<div class="details"><h3>' + title + "</h3><div>");
    shane_tm_data_images();
    return false;
  });
  closePopup.on("click", function () {
    modalBox.removeClass("opened");
    modalBox.find(".description_wrap").html("");
    return false;
  });
}
function shane_tm_modalbox_contact() {
  "use strict";
  var button = jQuery(
    ".shane_tm_talk .button a,.shane_tm_topbar .menu ul li a.modal"
  );
  var modalBox = jQuery(".shane_tm_modalbox");
  var closePopup = modalBox.find(".close");
  button.on("click", function () {
    var content = jQuery(".shane_tm_contact_popup").html();
    modalBox.addClass("opened");
    modalBox.find(".description_wrap").html(content);
    shane_tm_contact_form();
    initMap();
    return false;
  });
  closePopup.on("click", function () {
    modalBox.removeClass("opened");
    modalBox.find(".description_wrap").html("");
    return false;
  });
}
function shane_tm_preloader() {
  "use strict";
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
    navigator.userAgent
  )
    ? true
    : false;
  var preloader = $("#preloader");
  if (!isMobile) {
    setTimeout(function () {
      preloader.addClass("preloaded");
    }, 800);
    setTimeout(function () {
      preloader.remove();
    }, 2000);
  } else {
    preloader.remove();
  }
}
function shane_tm_my_load() {
  "use strict";
  var speed = 500;
  setTimeout(function () {
    shane_tm_preloader();
  }, speed);
  setTimeout(function () {
    jQuery("body").addClass("loaded");
  }, speed + 2000);
  setTimeout(function () {
    jQuery(".shane_tm_down").addClass("loaded");
  }, speed + 2000);
  setTimeout(function () {
    jQuery(".shane_tm_topbar").addClass("loaded");
  }, speed + 4200);
}
function shane_tm_nav_bg() {
  "use strict";
  jQuery(window).on("scroll", function () {
    var topbar = jQuery(".shane_tm_topbar .topbar_inner");
    var progress = jQuery(".progressbar");
    var WinOffset = jQuery(window).scrollTop();
    if (WinOffset >= 100) {
      topbar.addClass("opened");
      progress.addClass("animate");
    } else {
      topbar.removeClass("opened");
      progress.removeClass("animate");
    }
  });
}
jQuery(".anchor_nav").onePageNav();
function shane_tm_down() {
  "use strict";
  jQuery(".shane_tm_talk .button a").on("click", function () {
    if ($.attr(this, "href") !== "#") {
      $("html, body").animate(
        { scrollTop: $($.attr(this, "href")).offset().top - 70 },
        1000
      );
    }
    return false;
  });
}
function shane_tm_hamburger() {
  "use strict";
  var hamburger = jQuery(".hamburger");
  var mobileMenu = jQuery(".shane_tm_mobile_menu .dropdown");
  hamburger.on("click", function () {
    var element = jQuery(this);
    if (element.hasClass("is-active")) {
      element.removeClass("is-active");
      mobileMenu.slideUp();
    } else {
      element.addClass("is-active");
      mobileMenu.slideDown();
    }
    return false;
  });
  jQuery(".shane_tm_mobile_menu .dropdown .dropdown_inner ul li a").on(
    "click",
    function () {
      jQuery(".hamburger").removeClass("is-active");
      jQuery(".shane_tm_mobile_menu .dropdown").slideUp();
      return false;
    }
  );
}
function shane_tm_cursor() {
  "use strict";
  var myCursor = jQuery(".mouse-cursor");
  if (myCursor.length) {
    if ($("body")) {
      const e = document.querySelector(".cursor-inner"),
        t = document.querySelector(".cursor-outer");
      let n,
        i = 0,
        o = !1;
      (window.onmousemove = function (s) {
        o ||
          (t.style.transform =
            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
          (e.style.transform =
            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
          (n = s.clientY),
          (i = s.clientX);
      }),
        $("body").on("mouseenter", "a, .cursor-pointer", function () {
          e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
        }),
        $("body").on("mouseleave", "a, .cursor-pointer", function () {
          ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
            (e.classList.remove("cursor-hover"),
            t.classList.remove("cursor-hover"));
        }),
        (e.style.visibility = "visible"),
        (t.style.visibility = "visible");
    }
  }
}
function shane_tm_imgtosvg() {
  "use strict";
  jQuery("img.svg").each(function () {
    var jQueryimg = jQuery(this);
    var imgClass = jQueryimg.attr("class");
    var imgURL = jQueryimg.attr("src");
    jQuery.get(
      imgURL,
      function (data) {
        var jQuerysvg = jQuery(data).find("svg");
        if (typeof imgClass !== "undefined") {
          jQuerysvg = jQuerysvg.attr("class", imgClass + " replaced-svg");
        }
        jQuerysvg = jQuerysvg.removeAttr("xmlns:a");
        jQueryimg.replaceWith(jQuerysvg);
      },
      "xml"
    );
  });
}
function shane_tm_popup() {
  "use strict";
  jQuery(".gallery_zoom").each(function () {
    jQuery(this).magnificPopup({
      delegate: "a.zoom",
      type: "image",
      gallery: { enabled: true },
      removalDelay: 300,
      mainClass: "mfp-fade",
    });
  });
  jQuery(".popup-youtube, .popup-vimeo").each(function () {
    jQuery(this).magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
  });
  jQuery(".soundcloude_link").magnificPopup({
    type: "image",
    gallery: { enabled: true },
  });
}
wow = new WOW({ animateClass: "animated", offset: 10 });
wow.init();
function shane_tm_data_images() {
  "use strict";
  var data = jQuery("*[data-img-url]");
  data.each(function () {
    var element = jQuery(this);
    var url = element.data("img-url");
    element.css({ backgroundImage: "url(" + url + ")" });
  });
}
function shane_tm_contact_form() {
  "use strict";
  jQuery(".contact_form #send_message")
    .off()
    .on("click", function () {
      var name = jQuery(".contact_form #name").val();
      var email = jQuery(".contact_form #email").val();
      var message = jQuery(".contact_form #message").val();
      var subject = jQuery(".contact_form #subject").val();
      var success = jQuery(".contact_form .returnmessage").data("success");
      jQuery(".contact_form .returnmessage").empty();
      if (name === "" || email === "" || message === "") {
        jQuery("div.empty_notice").slideDown(500).delay(2000).slideUp(500);
      } else {
        jQuery.post(
          "modal/contact.php",
          {
            ajax_name: name,
            ajax_email: email,
            ajax_message: message,
            ajax_subject: subject,
          },
          function (data) {
            jQuery(".contact_form .returnmessage").append(data);
            if (
              jQuery(".contact_form .returnmessage span.contact_error").length
            ) {
              jQuery(".contact_form .returnmessage")
                .slideDown(500)
                .delay(2000)
                .slideUp(500);
            } else {
              jQuery(".contact_form .returnmessage").append(
                "<span class='contact_success'>" + success + "</span>"
              );
              jQuery(".contact_form .returnmessage")
                .slideDown(500)
                .delay(4000)
                .slideUp(500);
            }
            if (data === "") {
              jQuery("#contact_form")[0].reset();
            }
          }
        );
      }
      return false;
    });
}
function tdProgress(container) {
  "use strict";
  container.find(".progress_inner").each(function () {
    var progress = jQuery(this);
    var pValue = parseInt(progress.data("value"), 10);
    var pColor = progress.data("color");
    var pBarWrap = progress.find(".bar");
    var pBar = progress.find(".bar_in");
    pBar.css({ width: pValue + "%", backgroundColor: pColor });
    setTimeout(function () {
      pBarWrap.addClass("open");
    });
  });
}
jQuery(".tokyo_progress").each(function () {
  "use strict";
  var pWrap = jQuery(this);
  pWrap.waypoint({
    handler: function () {
      tdProgress(pWrap);
    },
    offset: "90%",
  });
});
function shane_tm_jarallax() {
  "use strict";
  jQuery(".jarallax").each(function () {
    var element = jQuery(this);
    var customSpeed = element.data("speed");
    if (customSpeed !== "undefined" && customSpeed !== "") {
      customSpeed = customSpeed;
    } else {
      customSpeed = 0.5;
    }
    element.jarallax({ speed: customSpeed, automaticResize: true });
  });
}
function shane_tm_owl_carousel() {
  "use strict";
  var carousel = jQuery(".shane_tm_partners .owl-carousel");
  var rtlMode = false;
  if (jQuery("body").hasClass("rtl")) {
    rtlMode = "true";
  }
  carousel.owlCarousel({
    loop: true,
    items: 4,
    lazyLoad: false,
    margin: 100,
    autoplay: true,
    autoplayTimeout: 7000,
    rtl: rtlMode,
    dots: true,
    nav: false,
    navSpeed: true,
    responsive: {
      0: { items: 1 },
      480: { items: 1 },
      768: { items: 2 },
      1040: { items: 3 },
      1200: { items: 3 },
      1600: { items: 4 },
      1920: { items: 4 },
    },
  });
  shane_tm_imgtosvg();
  var carousel2 = jQuery(".shane_tm_testimonials .owl-carousel");
  carousel2.owlCarousel({
    loop: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    items: 1,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 6000,
    smartSpeed: 2000,
    margin: 0,
    dots: true,
    nav: false,
    navSpeed: true,
    responsive: {
      0: { mouseDrag: false, touchDrag: true },
      1100: { mouseDrag: true, touchDrag: true },
    },
  });
  shane_tm_imgtosvg();
}
function shane_tm_progress_line() {
  "use strict";
  var line = jQuery(".progressbar .line");
  var documentHeight = jQuery(document).height();
  var windowHeight = jQuery(window).height();
  var winScroll = jQuery(window).scrollTop();
  var value = (winScroll / (documentHeight - windowHeight)) * 100;
  var position = value;
  line.css("height", position + "%");
}
function shane_tm_totop() {
  "use strict";
  var text = $(".progressbar .text");
  text.css({ bottom: 105 + text.width() });
  $(".progressbar a").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
}
function shane_tm_down_anchor() {
  "use strict";
  jQuery(".anchor").on("click", function () {
    if ($.attr(this, "href") !== "#") {
      $("html, body").animate(
        { scrollTop: $($.attr(this, "href")).offset().top - 70 },
        800
      );
    }
    return false;
  });
}
