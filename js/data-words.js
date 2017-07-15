function dataWord () {

  $("[data-words]").attr("data-words", function(i, d){
    var $self  = $(this),
        $words = d.split("|"),
        tot    = $words.length,
        c      = 0; 

    // CREATE SPANS INSIDE SPAN
    for(var i=0; i<tot; i++) $self.append($('<span/>',{text:$words[i]}));

    // COLLECT WORDS AND HIDE
    $words = $self.find("span").hide();

    // ANIMATE AND LOOP
    (function loop(){
      $self.animate({ width: $words.eq( c ).width()+1 });
      $words.stop().fadeOut().eq(c).fadeIn().delay(4000).show(0, loop);
      c = ++c % tot;
    }());
    
  });

}

// dataWord(); // If you don't use external fonts use this on DOM ready; otherwise use:
$(window).on("load", dataWord);