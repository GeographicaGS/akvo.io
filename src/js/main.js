$(function() {
  var $title = $('#title-text-co'),
    cpos = 0;

  $('nav.main-nav ul li a').click(function(){
    $('h2.page-title').html($(this).html());
  });

  var positions = [];
  $('main section').each(function(){
    var id = $(this).attr('id');

    if (id=="intro") return;
    positions.push({
      text : $('.main-nav a[href="#' + id + '"]').html(),
      h : $(this).position().top
    });

  });

  $(document).scroll(function(){
    var h = $(this).scrollTop();
    // get the closest section
    var min = 100000,
      find = 0;
    for (var p in positions){
      var d = Math.abs(h-positions[p].h);
      if (d<min){
        find = p;
        min = d;
      }
    }

    if (find != cpos){
      cpos = find;  
      $title.html(positions[find].text);
    }
    
  });
});