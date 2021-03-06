jQuery(document).ready(function($){

  // sidebar animate
    var hasChildren= $('.has-children');
    hasChildren.each(function(){
        $(this).on('change', 'input[type="checkbox"]', function(){
            var checkbox = $(this);
            console.log(checkbox.prop('checked'));
            ( checkbox.prop('checked') ) ? checkbox.siblings('ul').attr('style', 'display:none;').slideDown(300) : checkbox.siblings('ul').attr('style', 'display:block;').slideUp(300);
        });
    });

    jQuery(".post").fitVids();

  // Load discus comment
  function initDisqusComments(){

    if(config.disqus_shortname != '' && config.disqus_shortname != null && config.disqus_shortname != undefined) {
      var disqus_shortname = config.disqus_shortname;
      (function() {
      var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
      dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
      })();
    }else {
      alert("Please check Disqus short name configuration on your _config.yml");
    }
  }

  var pathname = window.location.pathname;
  var url = window.location.href;

  console.log('pathname:', pathname)
  console.log('url:', url)

  if(pathname == '/' | pathname.indexOf('/about/') != -1 | pathname.indexOf('/menus/') != -1){
    console.log('do not init Disqus');
  }else{
    initDisqusComments();
  }



});

// css 관련 jquery
$(document).ready(function(){
    $('.language-bash').parent('pre').css('background-color', 'black');
});
