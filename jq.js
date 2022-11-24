function f1()
{
    $("#i1").fadeToggle();
}

function f2()
{
    $("div").css('background-color','orange');
}
function f3() {
    $(".para").hide();
}
function f4(){
    $(".intro").fadeToggle();
}
function f5(){
    $("ul li:first").hide();
}


$(document).ready(function(){
    $("#ss").dblclick(function(){
      $(this).hide();
    });
  });


  function f6(){
    $("#x").hide();
  }
  function f7(){
    $("#x").show();
  }
//   $(document).ready(function(){
//     $("#hide").click(function(){
//       $("p").hide();
//     });
//     $("#show").click(function(){
//       $("p").show();
//     });
//   });
$("#container").dblclick(function() { 
    //code executed on jQuery double click rather than mouse double click
    alert('dblclick');
  });
  
  $(document).ready(function(){
    $("#we").dblclick(function(){
        $(this).fadeOut(3000);
    });
});

$(document).ready(function(){
    $("#r").click(function(){
        $("#cc").toggle();
    });
});

$(document).ready(function(){
    $("#color").click(function(){
        $("#div1").fadeIn();
        $('#div2').fadeIn("slow");
        $("#div3").fadeIn(3000);
    });
});

$(document).ready(function(){
    $("#fadeout").click(function(){
        $("#d1").fadeOut();
        $("#d2").fadeOut("slow");
        $("#d3").fadeOut(3000);
    });
});
$(document).ready(function(){
    $("#fadeinout").click(function(){
      $("#v1").fadeToggle();
      $("#v2").fadeToggle("slow");
      $("#v3").fadeToggle(3000);
    });
  });

  $(document).ready(function(){
    $("#fadeto").click(function(){
        $("#q1").fadeTo("slow",0.15)
        $("#q2").fadeTo("slow",0.6)
    });
});

$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideDown("slow");
    });
});
    
$(document).ready(function(){
    $("#flp").click(function(){
        $("#pan").slideUp("slow")
    });
});
  
$(document).ready(function(){
    $("#click").click(function(){
        $("#drop").slideToggle("slow")
    });
});
$(document).ready(function(){
    $("#anime").click(function(){
        $("#img1").animate({left:'300px'})
    });
});
$(document).ready(function(){
    $("#clic").click(function(){
        $("#drp").slideDown(5000);
    });
    $("#stop").click(function(){
        $("#drp").stop();
    });
});

$(document).ready(function(){
    $("#dd").click(function(){
        $("#pp").hide("slow",function(){
            alert("This paragraph is now hidden");
        });
    });
});
$(document).ready(function(){
    $("#bid").click(function(){
        $("#pid").css("color","red")
        .slideUp(2000)
        .slideDown(2000);
    });
});
$(document).ready(function(){
    $("#btn1").click(function(){
      alert("Text: " + $("#test").text());
    });
    $("#btn2").click(function(){
      alert("HTML: " + $("#test").html());
    });
  });
  $(document).ready(function(){
    $("button").click(function(){
      alert("Value: " + $("#test").val());
    });
  });
  $(document).ready(function(){
    $("#bn1").click(function(){
      $("#tes1").text(function(i, origText){
        return "Old text: " + origText + " New text: Hello world! (index: " + i + ")"; 
      });
    });
  
    $("#bn2").click(function(){
      $("#tes2").html(function(i, origText){
        return "Old html: " + origText + " New html: Hello <b>world!</b> (index: " + i + ")"; 
      });
    });
  });
  $(document).ready(function(){
    $("#bbb1").click(function(){
      $("#ivvv1").remove();
    });
  });
  
  $(document).ready(function(){
    $("#boot1").click(function(){
      $("#hoh1, #hoh2, #prem1,#prem2").addClass("blue");
      $("#impo1").addClass("important");
    });
  });
  $(document).ready(function(){
    $("#ton").click(function(){
      $("h1,h2,p").removeClass("blu");
    });
  });
  $(document).ready(function(){
    $("#bbb").click(function(){
      $(".qt").css({"background-color": "yellow", "font-size": "200%"});
    });
  });
  $(document).ready(function(){
    $("button").click(function(){
      var txt = "";
      txt += "Width of div: " + $("#l1").width() + "</br>";
      txt += "Height of div: " + $("#l1").height() + "</br>";
      txt += "Inner width of div: " + $("#l1").innerWidth() + "</br>";
      txt += "Inner height of div: " + $("#l1").innerHeight();
      $("#l1").html(txt);
    });
  });
