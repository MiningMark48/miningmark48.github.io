window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var scrollPoint = 250;
    if (document.body.scrollTop > scrollPoint || document.documentElement.scrollTop > scrollPoint) {
        document.getElementById("top-btn").style.display = "block";
    } else {
        document.getElementById("top-btn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}