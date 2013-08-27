$(function ()
{

  var controller = $.superscrollorama({
    triggerAtCenter: false,
    playoutAnimations: true
  });

/////////////////////////////////
  var pinh = 2500;
  controller.pin($('#page2'), pinh, {
    anim: (new TimelineMax())
          .append(TweenMax.to($('#page2 .bottom'), .5, {css:{top: 0}}))
          .append(TweenMax.to($('#page2 .top'), .5, {css:{opacity: 1}})),
    onPin: function ()
    {
      $('#page2-spacer').hide();
    },
    onUnpin: function ()
    {
      if ($('#page2').offset().top > $(window).scrollTop())
      {
        $('#page2-spacer').show();
      }
    }
  });
  $('#page2').after('<div id="page2-spacer"></div>').next().height(pinh);


/////////////////////////////////

  $('#ballots .all').css({right: $(window).width() - $('#ballots .all').offset().left - $('#ballots .all').width()});
  controller.pin($('#ballots .all'), 9e5, {
    pushFollowers: false
  });

  var i = $('#ballots .list li').length;
  while (i --)
  {
    controller.addTween(
      $('#ballots .list li').eq(i).children('.mark'),
      (new TimelineMax()).append([
        TweenMax.to($('#ballots .list li').eq(i).children('.mark'), .001, {css: {visibility: 'hidden'}}),
        TweenMax.to($('#ballots .all li').eq(i), .001, {css: {visibility: 'visible'}})
      ])
    );
  }

  // if click on main election icons, go to that section
  $('#ballots .all li').click(function ()
  {
    $('html, body').animate({scrollTop: $('#ballots .list li').eq($(this).index()).offset().top - $(this).closest('.all').height()});
  });
  


/////////////////////////////////




  //controller.pin($('#question_marks').parent(), 9e5);




  var pinh = 3300;
  controller.pin($('#page5'), pinh, {
    anim: (new TimelineMax())
          //.append(TweenMax.fromTo($('#page5'), .5, {}, {css: {transform: 'translate(0px, -' + $('#page5 > header').outerHeight(true) + 'px)'}}))
          //.append(TweenMax.fromTo($('#stations').parent().add('#page5-subtitle'), .5, {css: {opacity: 0}}, {css: {opacity: 1}}))
          .append(TweenMax.fromTo($('#page5-subtitle'), .5, {css: {opacity: 0}}, {css: {opacity: 1}}))
          .append(TweenMax.fromTo($('#stations').parent(), .5, {css: {position: 'relative', top: 900}}, {css: {top: 0}}))
          .append(TweenMax.fromTo($('#stations-connect'), .5, {css:{top: 700}}, {css:{top: -42}}))
          .append(TweenMax.to($('#stations-connect #line1'), .5, {css:{top: -100, opacity: 0}/*, delay: 1*/}))
          .append(TweenMax.fromTo($('#stations-connect .img img:last-of-type, #stations-connect .right'), .5, {css:{top: 700}}, {css:{top: 0}}))
          .append(TweenMax.fromTo($('#page5 footer'), .5, {css: {opacity: 0}}, {css: {opacity: 1}})),
    onPin: function ()
    {
      $('#page5-spacer').hide();
      $('#ballots .all li:first').css({opacity: 1});
    },
    onUnpin: function ()
    {
      if ($('#page5').offset().top > $(window).scrollTop())
      {
        $('#page5-spacer').show();
      }
      $('#ballots .all li:first').css({opacity: .6});
    }
  });
  $('#page5').after('<div id="page5-spacer"></div>').next().height(pinh);



  controller.addTween(
    $('#page5'),
    (new TimelineMax()).append([
      TweenMax.to($('#question_marks').parent(), .001, {css: {position: 'fixed', width: 'auto', left: $('#sidebar').width(), right: 0, zIndex: 9999, top: $('#ballots .all').outerHeight()}}),
      TweenMax.to($('#question_marks_spacer'), .001, {css: {height: $('#question_marks').parent().outerHeight(true)}})
    ])
  );
  
/*
  controller.addTween(
    $('#page5'),
    TweenMax.to($('#ballots .all li:first'), .5, {css: {opacity: 1}})
  );
*/

/////////////////////////////////

  // if click on question mark, go to that place
  $('#question_marks > div:nth-child(1) > img').click(function ()
  {
    $('html, body').animate({scrollTop: $('#page5  #stations').offset().top });
  });
  $('#question_marks > div:nth-child(2) > img').click(function ()
  {
    $('html, body').animate({scrollTop: $('#page6 .middle').offset().top });
  });
  $('#question_marks > div:nth-child(3) > img').click(function ()
  {
    $('html, body').animate({scrollTop: $('#page7 .bottom').offset().top });
  });
  $('#question_marks > div:nth-child(4) > img').click(function ()
  {
    $('html, body').animate({scrollTop: $('#page8 .after').offset().top });
  });




/////////////////////////////////


  var pinh = 2000;
  controller.pin($('#page6'), pinh, {
    anim: (new TimelineMax())
          .append(TweenMax.fromTo($('#page6 header h4').add('#page6 .problem2_img'), .5, {css: {opacity: 0}}, {css: {opacity: 1}}))
          .append(TweenMax.fromTo($('#page6 .middle .left'), .5, {css: {top: 800}}, {css: {top: 0}}))
          .append(TweenMax.fromTo($('#page6 .middle .right'), .5, {css: {top: 800}}, {css: {top: 0}}))
          .append(TweenMax.fromTo($('#page6 .bottom'), .5, {css: {top: 800}}, {css: {top: 0}})),
    onPin: function ()
    {
      $('#page6-spacer').hide();
      $('#ballots .all li:eq(4)').css({opacity: 1});
    },
    onUnpin: function ()
    {
      if ($('#page6').offset().top > $(window).scrollTop())
      {
        $('#page6-spacer').show();
      }
      $('#ballots .all li:eq(4)').css({opacity: .6});
    }
  });
  $('#page6').after('<div id="page6-spacer"></div>').next().height(pinh);





/*
  controller.addTween(
    $('#page6'),
    (new TimelineMax()).append([
      TweenMax.to($('#ballots .all li:first'), .5, {css: {opacity: .6}}),
      TweenMax.to($('#ballots .all li:eq(4)'), .5, {css: {opacity: 1}})
    ])
  );
*/


/////////////////////////////////



  controller.addTween($('#page7'), TweenMax.fromTo($('#page7 > .top'), .5, {css: {opacity: 0}}, {css: {opacity: 1}}), 300);

  controller.pin($('#page7 > .top'), $('#page7').height(), {
    pushFollowers: false,
    offset: -($('#question_marks').parent().height() + $('#ballots .all').height()),
    onPin: function ()
    {
      $('#ballots .all li:eq(5)').css({opacity: 1});
    },
    onUnpin: function ()
    {
      $('#ballots .all li:eq(5)').css({opacity: .6});
    }
  });
  $(window).load(function ()
  {
    controller.updatePin($('#page7 > .top'), $('#page7').height(), {
      pushFollowers: false,
      offset: -($('#question_marks').parent().height() + $('#ballots .all').height())
    });
  });



/*
  $('#page7 > .top').css({zIndex: 9e4, right: 0});
  controller.pin($('#page7 > .top'), 9e5, {
    pushFollowers: false
  });
*/


/*
  controller.addTween(
    $('#page7'),
    (new TimelineMax()).append([
      TweenMax.to($('#ballots .all li:eq(4)'), .5, {css: {opacity: .6}}),
      TweenMax.to($('#ballots .all li:eq(5)'), .5, {css: {opacity: 1}})
    ])
  );
*/

  $('#protocol6-container .bottom').height($('#protocol6-container .bottom').height());






/////////////////////////////////




  controller.addTween($('#page8'), TweenMax.fromTo($('#page8 > .top'), .5, {css: {opacity: 0}}, {css: {opacity: 1}}), 300);

  controller.pin($('#page8 > .top'), $('#page8').height(), {
    pushFollowers: false,
    offset: -($('#question_marks').parent().height() + $('#ballots .all').height()),
    anim: (new TimelineMax())
          .append(TweenMax.fromTo($('#page8 .after'), .5, {css: {top: 800}}, {css: {top: 0}})),
    onPin: function ()
    {
      $('#ballots .all li:eq(7)').css({opacity: 1});
    },
    onUnpin: function ()
    {
      $('#ballots .all li:eq(7)').css({opacity: .6});
    }
  });
  $(window).load(function ()
  {
    controller.updatePin($('#page8 > .top'), $('#page8').height(), {
      pushFollowers: false,
      offset: -($('#question_marks').parent().height() + $('#ballots .all').height())
    });
  });


  var pinh = 2500;
  controller.pin($('#page8 #spreadsheet1'), pinh, {
    offset: -($('#question_marks').parent().height() + $('#ballots .all').height()),
    anim: (new TimelineMax())
          .append(TweenMax.fromTo($('#page8 .after #spreadsheet1 li:nth-child(1)'), .5, {css: {top: 800}}, {css: {top: 0}}))
          .append(TweenMax.fromTo($('#page8 .after #spreadsheet1 li:nth-child(2)'), .5, {css: {top: 800}}, {css: {top: 0}}))
          .append(TweenMax.fromTo($('#page8 .after #spreadsheet1 li:nth-child(3)'), .5, {css: {top: 800}}, {css: {top: 0}}))
          .append(TweenMax.fromTo($('#page8 .after #spreadsheet1 li:nth-child(4)'), .5, {css: {top: 800}}, {css: {top: 0}}))
          .append(TweenMax.fromTo($('#page8 .after #spreadsheet1 li:nth-child(5)'), .5, {css: {top: 800}}, {css: {top: 0}}))
          .append(TweenMax.fromTo($('#page8 .after #spreadsheet1 li:nth-child(6)'), .5, {css: {top: 800}}, {css: {top: 0}}))
          .append(TweenMax.fromTo($('#page8 .after #spreadsheet1 li:nth-child(7)'), .5, {css: {top: 800}}, {css: {top: 0}})),
    onPin: function ()
    {
      $('#page8-spreadsheet1-spacer').hide();
    },
    onUnpin: function ()
    {
      if ($('#page8 #spreadsheet1').offset().top > $(window).scrollTop())
      {
        $('#page8-spreadsheet1-spacer').show();
      }
    }
  });
  $('#page8 #spreadsheet1').after('<div id="page8-spreadsheet1-spacer"></div>').next().height(50);


  var pinh = 2500;
  controller.pin($('#page8 #spreadsheet2'), pinh, {
    offset: -($('#question_marks').parent().height() + $('#ballots .all').height()),
    anim: (new TimelineMax())
          .append(TweenMax.fromTo($('#page8 .after #spreadsheet2 li:nth-child(1)'), .5, {css: {top: 800}}, {css: {top: 0}}))
          .append(TweenMax.fromTo($('#page8 .after #spreadsheet2 li:nth-child(2)'), .5, {css: {top: 800}}, {css: {top: 0}}))
          .append(TweenMax.fromTo($('#page8 .after #spreadsheet2 li:nth-child(3)'), .5, {css: {top: 800}}, {css: {top: 0}}))
          .append(TweenMax.fromTo($('#page8 .after #spreadsheet2 li:nth-child(4)'), .5, {css: {top: 800}}, {css: {top: 0}}))
          .append(TweenMax.fromTo($('#page8 .after #spreadsheet2 li:nth-child(5)'), .5, {css: {top: 800}}, {css: {top: 0}}))
          .append(TweenMax.fromTo($('#page8 .after #spreadsheet2 li:nth-child(6)'), .5, {css: {top: 800}}, {css: {top: 0}}))
          .append(TweenMax.fromTo($('#page8 .after #spreadsheet2 li:nth-child(7)'), .5, {css: {top: 800}}, {css: {top: 0}})),
    onPin: function ()
    {
      $('#page8-spreadsheet2-spacer').hide();
    },
    onUnpin: function ()
    {
      if ($('#page8 #spreadsheet2').offset().top > $(window).scrollTop())
      {
        $('#page8-spreadsheet2-spacer').show();
      }
    }
  });
  $('#page8 #spreadsheet2').after('<div id="page8-spreadsheet2-spacer"></div>').next().height(50);

/*

  var pinh = 2000;
  controller.pin($('#page8'), pinh, {
    anim: (new TimelineMax())
          .append(TweenMax.fromTo($('#page8 header h4'), .5, {css: {opacity: 0}}, {css: {opacity: 1}}))
          .append(TweenMax.fromTo($('#page8 .after'), .5, {css: {top: 800}}, {css: {top: 0}})),
    onPin: function ()
    {
      $('#page8-spacer').hide();
      $('#ballots .all li:eq(7)').css({opacity: 1});
    },
    onUnpin: function ()
    {
      if ($('#page8').offset().top > $(window).scrollTop())
      {
        $('#page8-spacer').show();
      }
      $('#ballots .all li:eq(7)').css({opacity: .6});
    }
  });
  $('#page8').after('<div id="page8-spacer"></div>').next().height(pinh);
*/


/*
  controller.addTween(
    $('#page8'),
    (new TimelineMax()).append([
      TweenMax.to($('#ballots .all li:eq(5)'), .5, {css: {opacity: .6}}),
      TweenMax.to($('#ballots .all li:eq(7)'), .5, {css: {opacity: 1}})
    ])
  );
*/










/////////////////////////////////


  var pinh = 2500;
  controller.pin($('#page13'), pinh, {
    anim: (new TimelineMax())
          .append(TweenMax.to($('#page13 #line2'), .5, {css:{top: 0}}))
          .append(TweenMax.to($('#page13 #line3'), .5, {css:{top: 0}})),
    onPin: function ()
    {
      $('#page13-spacer').hide();
    },
    onUnpin: function ()
    {
      if ($('#page13').offset().top > $(window).scrollTop())
      {
        $('#page13-spacer').show();
      }
    }
  });
  $('#page13').after('<div id="page13-spacer"></div>').next().height(pinh);



/////////////////////////////////////



  controller.addTween(
    $('#page14'),
    (new TimelineMax()).append([
      TweenMax.to($('#line_fix').parent(), .001, {css: {position: 'fixed', width: 'auto', left: $('#sidebar').width(), right: 0, zIndex: 9999, top: $('#ballots .all').outerHeight() + $('#question_marks').parent().height()}}),
      TweenMax.to($('#line_fix_spacer'), .001, {css: {height: $('#line_fix').parent().outerHeight(true)}}),
      TweenMax.to($('#question_marks img'), .001, {css: {opacity: .6}})
    ])
  );
  





///////////////////////////////////////


  var pinh = 3300;
  controller.pin($('#page15'), pinh, {
    anim: (new TimelineMax())
          .append(TweenMax.fromTo($('#page15-subtitle'), .5, {css: {opacity: 0}}, {css: {opacity: 1}})),
    onPin: function ()
    {
      $('#page15-spacer').hide();
      $('#ballots .all li:first').css({opacity: 1});
    },
    onUnpin: function ()
    {
      if ($('#page15').offset().top > $(window).scrollTop())
      {
        $('#page15-spacer').show();
      }
      $('#ballots .all li:first').css({opacity: .6});
    }
  });
  $('#page15').after('<div id="page15-spacer"></div>').next().height(pinh);



//////////////////////////////////////


  var pinh = 2000;
  controller.pin($('#page16'), pinh, {
    anim: (new TimelineMax())
          .append(TweenMax.fromTo($('#page16 header h3').add('#page16 .line_fix23_img'), .5, {css: {opacity: 0}}, {css: {opacity: 1}}))
          .append(TweenMax.fromTo($('#page16 .middle'), .5, {css: {top: 800}}, {css: {top: 0}}))
          .append(TweenMax.fromTo($('#page16 .bottom .left'), .5, {css: {top: 800}}, {css: {top: 0}}))
          .append(TweenMax.fromTo($('#page16 .bottom .right'), .5, {css: {top: 800}}, {css: {top: 0}})),
    onPin: function ()
    {
      $('#page16-spacer').hide();
      $('#ballots .all li:eq(4)').css({opacity: 1});
      $('#ballots .all li:eq(5)').css({opacity: 1});
    },
    onUnpin: function ()
    {
      if ($('#page16').offset().top > $(window).scrollTop())
      {
        $('#page16-spacer').show();
      }
      $('#ballots .all li:eq(4)').css({opacity: .6});
      $('#ballots .all li:eq(5)').css({opacity: .6});
    }
  });
  $('#page16').after('<div id="page16-spacer"></div>').next().height(pinh);



////////////////////////////////////////


  var pinh = 2000;
  controller.pin($('#page17'), pinh, {
    anim: (new TimelineMax())
          .append(TweenMax.fromTo($('#page17  > .top'), .5, {css: {opacity: 0}}, {css: {opacity: 1}}))
          .append(TweenMax.fromTo($('#page17 .middle #text'), .5, {css: {top: 800}}, {css: {top: 0}}))
          .append(TweenMax.fromTo($('#page17 .middle #eq_header'), .5, {css: {top: 800}}, {css: {top: 0}}))
          .append(TweenMax.fromTo($('#page17 .middle #eq_circle'), .5, {css: {top: 800}}, {css: {top: 0}}))
          .append(TweenMax.fromTo($('#page17 .bottom'), .5, {css: {top: 800}}, {css: {top: 0}})),
    onPin: function ()
    {
      $('#page17-spacer').hide();
      $('#ballots .all li:eq(7)').css({opacity: 1});
    },
    onUnpin: function ()
    {
      if ($('#page17').offset().top > $(window).scrollTop())
      {
        $('#page17-spacer').show();
      }
      $('#ballots .all li:eq(7)').css({opacity: .6});
    }
  });
  $('#page17').after('<div id="page17-spacer"></div>').next().height(pinh);



//////////////////////////////////////



  var pinh = 2500;
  controller.pin($('#page18'), pinh, {
    anim: (new TimelineMax())
          .append(TweenMax.to($('#ballots .all'), .001, {css: {display: 'none', top: -100}}))
          .append(TweenMax.to($('#question_marks').parent(), .001, {css: {display: 'none', top: -100}}))
          .append(TweenMax.to($('#line_fix').parent(), .001, {css: {display: 'none', top: -100}}))
          .append(TweenMax.fromTo($('#page18 #line2'), .5, {css:{top: 700}}, {css:{top: 0}}))
          .append(TweenMax.fromTo($('#page18 #line3'), .5, {css:{top: 700}}, {css:{top: 0}}))
          .append(TweenMax.fromTo($('#page18 #line4'), .5, {css:{top: 700}}, {css:{top: 0}}))
          .append(TweenMax.fromTo($('#page18 #sources'), .5, {css:{top: 700}}, {css:{top: 0}})),
    onPin: function ()
    {
      $('#page18-spacer').hide();
    },
    onUnpin: function ()
    {
      if ($('#page18').offset().top > $(window).scrollTop())
      {
        $('#page18-spacer').show();
      }
    }
  });
  $('#page18').after('<div id="page18-spacer"></div>').next().height(pinh);





////////////////////////////////////////


  $(window).load(function ()
  {
    //setTimeout(function (){ $(window).scroll(); }, 10);
  });



});
