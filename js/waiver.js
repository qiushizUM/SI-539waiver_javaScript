//problem 1 
window.addEventListener('load', (event) => {
    var figs = Array.from(document.getElementsByTagName('figure'));
    figs.forEach(fig => {fig.className += ' one-third';});
  });


// problem 2 
var ft_hide = document.getElementsByTagName("footer").item(0)

ft_hide.addEventListener("click", function(event){ft_hide.style.display="none";});


  // problem 3 
var fig5 = document.getElementsByTagName("figure").item(4);
fig5.addEventListener("dblclick", function(event){fig5.style.visibility = "hidden";});

// problem 4
var fig1_font = document.getElementsByTagName("figcaption").item(0);
fig1_font.addEventListener("mouseover", function(event){fig1_font.style.fontFamily = "Cursive";});
var current_font = fig1_font.style.fontFamily;
fig1_font.addEventListener("mouseout", function(event){fig1_font.style.fontFamily = current_font;});

// problem 5
fig1_font.tabIndex = 1;
fig1_font.addEventListener("focusin", function(event){fig1_font.style.fontFamily = "Cursive";});
fig1_font.addEventListener("focusout", function(event){fig1_font.style.fontFamily = "Times";});