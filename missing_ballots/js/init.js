$(function ()
{

  var $clones = $('.clone[data-target]');
  var num = $clones.length - 1;

  $clones.each(function (index)
  {
    var self = $(this);
    var target = $(self.data('target'));

    if (!target.length)
    {
      console.log('incorrect target for', this);
      return;
    }

    self.html(target.html());
    //.data(target.data());
    // this is not working probably because impress uses .getAttribute(), not .data()
    // and when you set value with .data(), jquery doesn't give the element an attribute
    // instead, it stores key and value in the cache for later use
    // so, when getting the value with .data(key), you'll get the value
    // but with .getAttribute('data' + key) you won't, cause there's no attribute.

    $.each(target.data(), function (key, value)
    {
      self.attr('data-' + key, value);
    });

    if (self.data('remove-substeps'))
    {
      self.find('.substep').removeClass('substep');
    }

    if (num == index)
    {
      init();
    }
  });
});

function init ()
{
  $('img.loupe').loupe({
    loupe: 'loupe' // css class for magnifier
  });

  impress().init();

  if ($('body').hasClass('impress-not-supported'))
  {
    var _ifs = document.createElement('script');
    _ifs.src = 'ex3_files/fallback.js';
    document.body.appendChild(_ifs);
  }

/*	
  $('#impress img').click(function(){
    $.fancybox({
        type: 'iframe',
        href: $(this).attr('src'),
        width: $(this).width()
    });
  });
*/
}


$(document).ready(function(){
  // update slide counter

  var steps = $('.step:not(#overview)');
  $('#slide_count #slide_count_total').html(steps.length);
  
  document.addEventListener("impress:stepenter", function(event){
    var index = +steps.index(event.target) + 1;
    if (index == 0){
      $('#slide_count').hide();
    } else {
      $('#slide_count').show();
      $('#slide_count #slide_count_current').html(index);
    }
  }, false);
});
