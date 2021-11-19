/* -------------------------------------------

Name: 		Arter
Version:  1.0
Author:		Nazar Miller (millerDigitalDesign)
Portfolio:  https://themeforest.net/user/millerdigitaldesign/portfolio?ref=MillerDigitalDesign

p.s. I am available for Freelance hire (UI design, web development). mail: miller.themes@gmail.com

------------------------------------------- */
$(function () {
  "use strict";

  // const options = {
  //   containers: ["#swup", "#swupMenu"],
  //   animateHistoryBrowsing: true,
  //   linkSelector: 'a:not([data-no-swup])'
  // };
  // const swup = new Swup(options);

  // scrollbar
  Scrollbar.use(OverscrollPlugin);
  Scrollbar.init(document.querySelector('#scrollbar'), {
    damping: 0.05,
    renderByPixel: true,
    continuousScrolling: true,
  });
  Scrollbar.init(document.querySelector('#scrollbar2'), {
    damping: 0.05,
    renderByPixel: true,
    continuousScrolling: true,
  });

  // page loading
  $(document).ready(function () {
    var history = [
      {
        title: "Co-founder & CTO",
        subtitle: "Rokao.com - London",
        time: "Jul 2020 - present",
        description: `
        I've working as CTO and Full-Stack developer at Rokao team 
        I also successfully manage over 5 person team member to Develop Rokao
        and responsible to designing backend structure and develop apis 
        and responsible to design Ui pattern and develop front-end with next.js
        `,
        link: "https://rokao.com"
      },
      {
        title: "Co-founder",
        subtitle: "Rojand - Germany",
        time: "Jan 2018 - Apr 2021",
        description: "I've responsible for (Mobile application development & manage Frontend team)  for company projects and we have successfuly delivery over 6 projects"
      },
      {
        title: "Senior Mobile & Frontend Developer",
        subtitle: "Ariana holding (onmiz.com) - Mashhad",
        time: "Nov 2017 - Apr 2021",
        description: "One of Ariana holding project is Miz mobile application that i responsible for develop and testing Mobile applicatoin with react native I've spend 2 years with ariana and we deliver a big and scale project",
        link: "https://onmiz.com"
      },
      {
        title: "Data Scientist and Software Engineer",
        subtitle: "Financial Research and Technology - London",
        time: "Nov 2015 - Apr 2021",
        description: "As software engineer i responsible to create backend api's and manage databases (MongoDb)  we have done lot's of research about forex and Crypto currency in this years and build lots of expert and robots"
      },
      {
        title: "Full-stack developer",
        subtitle: "Zibasoo - Mashhad",
        time: "Jan 2018 - Mar 2020",
        description: "As full-stack developer i've responsible for Manager and build zibasoo backend and mobile application",
        link: "https://www.f6s.com/zibasoo"
      },
      {
        title: "Senior Ios developer",
        subtitle: "HamrahDoctor - Mashhad",
        time: "Sep 2017 - Jan 2017",
        description: "As IOS developer I've responsible to build and develop HamrahDoctor ios application for iphone and Ipad in swift4",
        link: "https://play.google.com/store/apps/details?id=com.hamrahdoctor.patient&hl=en&gl=US"
      },
      {
        title: "Project Manager",
        subtitle: "Win - Mashhad",
        time: "May 2017 - Jul 2017",
        description: "Win is a quiz game in android that I've Mange develop team and developing backend and manage database for them",
        link: "https://cafebazaar.ir/app/com.spresaneh.app?l=en"
      },
      {
        title: "Softwer Engineer",
        subtitle: "Sorush Mehr Rezvan - Mashhad",
        time: "Jun 2012 - May 2017",
        description: "We have building lots of Augmented reality application with unity and C# also I've responsible to develop frontend and backend project (joomla , wodpress , php , jquery , html) projects in this company",
        link: "https://www.smgroup.ir/"
      }
    ]




    var projects = [
      {
        title: "Zibasoo artist",
        subtitle: "Rojand inc",
        time: "Sep 2018",
        description: `
            Zibasoo artist is mobile application for listed beauty saloons to manage thier booking times.
          `,
        link: "https://cafebazaar.ir/app/com.zibasoo_saloons.apps?l=en"
      },
      {
        title: "Zibasoo",
        subtitle: "Rojand inc",
        time: "Sep 2018",
        description: `
            Zibasoo is mobile application that help womans to find best beauty salons in thier area and make them to book appointment with them.
          `,
        link: "https://cafebazaar.ir/app/com.zibasoo.apps?l=en"
      },
      {
        title: "Miz Moile application",
        subtitle: "ariana holding",
        time: "Jan 2018",
        description: `
            Miz is an social network for business  , they can list their services to find by people around them easly with lots of more facily.
          `,
        link: "https://cafebazaar.ir/app/com.onmiz.app?l=en"
      },
      {
        title: "Iran Central Bank Mobile Application",
        subtitle: "Iran Central Bank",
        time: "Jan 2014",
        description: `
          We've built a augmented reality mobile application for Iran Central Bank that scan money to check that is fake or not.
        `,
        link: "https://www.cbi.ir/showitem/15485.aspx"
      },
      {
        title: "Movafaghiat Magezine",
        subtitle: "Mobile application for Movafaghiat",
        time: "Sep 2013",
        description: `
          We've built Mobile applciation for Movafaghiat magezine that is one the bigest magezine in Iran  that help people to intract with their magezine.
        `,
        link: "https://cafebazaar.ir/app/ir.smgroup.movafagh?l=en"
      },
      {
        title: "Modiryar website",
        subtitle: "modiryar.com",
        time: "May 2013",
        description: `
          I've built modiryar website with html, css, javascript, jquery, php, mysql, wordpress and Joomla.
        `,
        link: "http://www.modiryar.com/"
      },
      {
        title: "Hamshahri News papaer",
        subtitle: "Ar mobile application",
        time: "Jan 2013",
        description: `
          We've built an augmented reality application for Hamshahri one of biggest news papaer in Iran.
        `,
        link: "https://www.youtube.com/watch?v=YrX0Z9LaFhM"
      },
      {
        title: "Atlas Mega mall",
        subtitle: "Augmented reality application",
        time: "Jul 2012",
        description: `
          We have built Ar application for one of biggest complex in  Mashhad.
        `,
        link: "https://rokao.comhttps://cafebazaar.ir/app/com.SMGroup.atlasWeb/?l=en"
      }
    ]
    for (var item of history) {
      $("#history").append(`
        <div class="art-timeline-item">
          <div class="art-timeline-mark-light"></div>
          <div class="art-timeline-mark"></div>
          <div class="art-a art-timeline-content">
            <div class="art-card-header">
              <div class="art-left-side">
                <h5>${item.title}</h5>
                <div class="art-el-suptitle mb-15">${item.subtitle}</div>
              </div>
              <div class="art-right-side">
                <span class="art-date">${item.time}</span>
              </div>
            </div>
            <p>${item.description}</p>
            ${item.link ? `<a href="${item.link}" target="_blank" class="art-link art-color-link art-w-chevron">View</a>` : ''}
          </div>
        </div>
        `)
    }
    for (var item of projects) {
      $("#projects").append(`
        <div class="art-timeline-item">
          <div class="art-timeline-mark-light"></div>
          <div class="art-timeline-mark"></div>
          <div class="art-a art-timeline-content">
            <div class="art-card-header">
              <div class="art-left-side">
                <h5>${item.title}</h5>
                <div class="art-el-suptitle mb-15">${item.subtitle}</div>
              </div>
              <div class="art-right-side">
                <span class="art-date">${item.time}</span>
              </div>
            </div>
            <p>${item.description}</p>
            ${item.link ? `<a href="${item.link}" target="_blank" class="art-link art-color-link art-w-chevron">View</a>` : ''}
          </div>
        </div>
        `)
    }


    anime({
      targets: '.art-preloader .art-preloader-content',
      opacity: [0, 1],
      delay: 200,
      duration: 600,
      easing: 'linear',
      complete: function (anim) {

      }
    });
    anime({
      targets: '.art-preloader',
      opacity: [1, 0],
      delay: 2200,
      duration: 400,
      easing: 'linear',
      complete: function (anim) {
        $('.art-preloader').css('display', 'none');
      }
    });
  });

  var bar = new ProgressBar.Line(preloader, {
    strokeWidth: 1.7,
    easing: 'easeInOut',
    duration: 1400,
    delay: 750,
    trailWidth: 1.7,
    svgStyle: {
      width: '100%',
      height: '100%'
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });

  bar.animate(1);

  // counters
  anime({
    targets: '.art-counter-frame',
    opacity: [0, 1],
    duration: 800,
    delay: 2300,
    easing: 'linear',
  });

  anime({
    targets: '.art-counter',
    delay: 1300,
    opacity: [1, 1],
    complete: function (anim) {
      $('.art-counter').each(function () {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
          duration: 2000,
          easing: 'linear',
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        });
      });
    }
  });

  // progressbars
  var bar = new ProgressBar.Circle(circleprog1, {
    strokeWidth: 7,
    easing: 'easeInOut',
    duration: 1400,
    delay: 2500,
    trailWidth: 7,
    step: function (state, circle) {
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
    }
  });

  bar.animate(0.7);

  var bar = new ProgressBar.Circle(circleprog2, {
    strokeWidth: 7,
    easing: 'easeInOut',
    duration: 1400,
    delay: 2600,
    trailWidth: 7,
    step: function (state, circle) {
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
    }
  });

  bar.animate(1);

  var bar = new ProgressBar.Circle(circleprog3, {
    strokeWidth: 7,
    easing: 'easeInOut',
    duration: 1400,
    delay: 2700,
    trailWidth: 7,
    step: function (state, circle) {
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
    }
  });

  bar.animate(0.3);

  // var bar = new ProgressBar.Line(lineprog1, {
  //   strokeWidth: 1.72,
  //   easing: 'easeInOut',
  //   duration: 1400,
  //   delay: 2800,
  //   trailWidth: 1.72,
  //   svgStyle: {
  //     width: '100%',
  //     height: '100%'
  //   },
  //   step: (state, bar) => {
  //     bar.setText(Math.round(bar.value() * 100) + ' %');
  //   }
  // });

  // bar.animate(.9);

  // var bar = new ProgressBar.Line(lineprog2, {
  //   strokeWidth: 1.72,
  //   easing: 'easeInOut',
  //   duration: 1400,
  //   delay: 2900,
  //   trailWidth: 1.72,
  //   svgStyle: {
  //     width: '100%',
  //     height: '100%'
  //   },
  //   step: (state, bar) => {
  //     bar.setText(Math.round(bar.value() * 100) + ' %');
  //   }
  // });

  // bar.animate(.95);

  // var bar = new ProgressBar.Line(lineprog3, {
  //   strokeWidth: 1.72,
  //   easing: 'easeInOut',
  //   duration: 1400,
  //   delay: 3000,
  //   trailWidth: 1.72,
  //   svgStyle: {
  //     width: '100%',
  //     height: '100%'
  //   },
  //   step: (state, bar) => {
  //     bar.setText(Math.round(bar.value() * 100) + ' %');
  //   }
  // });

  // bar.animate(.75);

  // var bar = new ProgressBar.Line(lineprog4, {
  //   strokeWidth: 1.72,
  //   easing: 'easeInOut',
  //   duration: 1400,
  //   delay: 3100,
  //   trailWidth: 1.72,
  //   svgStyle: {
  //     width: '100%',
  //     height: '100%'
  //   },
  //   step: (state, bar) => {
  //     bar.setText(Math.round(bar.value() * 100) + ' %');
  //   }
  // });

  // bar.animate(.65);

  // var bar = new ProgressBar.Line(lineprog5, {
  //   strokeWidth: 1.72,
  //   easing: 'easeInOut',
  //   duration: 1400,
  //   delay: 3200,
  //   trailWidth: 1.72,
  //   svgStyle: {
  //     width: '100%',
  //     height: '100%'
  //   },
  //   step: (state, bar) => {
  //     bar.setText(Math.round(bar.value() * 100) + ' %');
  //   }
  // });

  // bar.animate(.85);

  // Contact form
  $('.art-input').keyup(function () {
    if ($(this).val()) {
      $(this).addClass('art-active');
    } else {
      $(this).removeClass('art-active');
    }
  });

  $("#form").submit(function () {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function () {

      var tl = anime.timeline({
        easing: 'easeOutExpo',
      });

      tl
        .add({
          targets: '.art-submit',
          opacity: 0,
          scale: .5,
        })
        .add({
          targets: '.art-success',
          scale: 1,
          height: '45px',
        })
    });
    return false;
  });

  // portfolio filter
  $('.art-filter a').on('click', function () {
    $('.art-filter .art-current').removeClass('art-current');
    $(this).addClass('art-current');

    var selector = $(this).data('filter');
    $('.art-grid').isotope({
      filter: selector
    });
    return false;
  });

  // // masonry Grid
  // $('.art-grid').isotope({
  //   filter: '*',
  //   itemSelector: '.art-grid-item',
  //   transitionDuration: '.6s',
  // });

  // slider works
  // var swiper = new Swiper('.art-works-slider', {
  //   slidesPerView: 3,
  //   spaceBetween: 30,
  //   speed: 1400,
  //   autoplay: {
  //     delay: 4000,
  //   },
  //   autoplaySpeed: 5000,
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: '.art-works-swiper-next',
  //     prevEl: '.art-works-swiper-prev',
  //   },
  //   breakpoints: {
  //     1500: {
  //       slidesPerView: 2,
  //     },
  //     1200: {
  //       slidesPerView: 2,
  //     },
  //     992: {
  //       slidesPerView: 1,
  //     },
  //   },
  // });





  $('.current-menu-item a').clone().appendTo('.art-current-page');

  $('.art-map-overlay').on('click', function () {
    $(this).addClass('art-active');
  });

  $('.art-info-bar-btn').on('click', function () {
    $('.art-info-bar').toggleClass('art-active');
    $('.art-menu-bar-btn').toggleClass('art-disabled');
  });

  $('.art-menu-bar-btn').on('click', function () {
    $('.art-menu-bar-btn , .art-menu-bar').toggleClass("art-active");
    $('.art-info-bar-btn').toggleClass('art-disabled');
  });

  $('.art-info-bar-btn , .art-menu-bar-btn').on('click', function () {
    $('.art-content').toggleClass('art-active');
  });

  $('.art-curtain , .art-mobile-top-bar').on('click', function () {
    $('.art-menu-bar-btn , .art-menu-bar , .art-info-bar , .art-content , .art-menu-bar-btn , .art-info-bar-btn').removeClass('art-active , art-disabled');
  });

  $('.menu-item').on('click', function () {
    if ($(this).hasClass('menu-item-has-children')) {
      $(this).children('.sub-menu').toggleClass('art-active');
    } else {
      $('.art-menu-bar-btn , .art-menu-bar , .art-info-bar , .art-content , .art-menu-bar-btn , .art-info-bar-btn').removeClass('art-active , art-disabled');
    }
  });

  // reinit
  document.addEventListener("swup:contentReplaced", function () {
    Scrollbar.use(OverscrollPlugin);
    Scrollbar.init(document.querySelector('#scrollbar'), {
      damping: 0.05,
      renderByPixel: true,
      continuousScrolling: true,
    });
    Scrollbar.init(document.querySelector('#scrollbar2'), {
      damping: 0.05,
      renderByPixel: true,
      continuousScrolling: true,
    });

    $("#form").submit(function () {
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
      }).done(function () {

        var tl = anime.timeline({
          easing: 'easeOutExpo',
        });

        tl
          .add({
            targets: '.art-submit',
            opacity: 0,
            scale: .5,
          })
          .add({
            targets: '.art-success',
            scale: 1,
            height: '45px',
          })
      });
      return false;
    });

    // Masonry Grid
    // $('.art-grid').isotope({
    //   filter: '*',
    //   itemSelector: '.art-grid-item',
    //   transitionDuration: '.6s',
    // });

    $('.art-filter a').on('click', function () {
      $('.art-filter .art-current').removeClass('art-current');
      $(this).addClass('art-current');

      var selector = $(this).data('filter');
      $('.art-grid').isotope({
        filter: selector
      });
      return false;
    });

    anime({
      targets: '.art-counter-frame',
      opacity: [0, 1],
      duration: 800,
      delay: 300,
      easing: 'linear',
    });

    $('.art-counter').each(function () {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 2000,
        easing: 'linear',
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      });
    });

    // slider testimonials
    // var swiper = new Swiper('.art-testimonial-slider', {
    //   slidesPerView: 3,
    //   spaceBetween: 30,
    //   speed: 1400,
    //   autoplay: false,
    //   autoplaySpeed: 5000,
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //   },
    //   navigation: {
    //     nextEl: '.art-testi-swiper-next',
    //     prevEl: '.art-testi-swiper-prev',
    //   },
    //   breakpoints: {
    //     1500: {
    //       slidesPerView: 2,
    //     },
    //     1200: {
    //       slidesPerView: 2,
    //     },
    //     992: {
    //       slidesPerView: 2,
    //     },
    //     768: {
    //       slidesPerView: 1,
    //     }
    //   },
    // });



    $('.current-menu-item a').clone().prependTo('.art-current-page');

    $('.menu-item').on('click', function () {
      if ($(this).hasClass('menu-item-has-children')) {
        $(this).children('.sub-menu').toggleClass('art-active');
      } else {
        $('.art-menu-bar-btn , .art-menu-bar , .art-info-bar , .art-content , .art-menu-bar-btn , .art-info-bar-btn').removeClass('art-active , art-disabled');
      }
    });

  })

});

