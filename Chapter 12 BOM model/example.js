// console.log(global);
console.log(window);
console.log(this);

/**
 * Test window's size feature
 */
// Seems be disabled by default
window.resizeTo(100, 100);

let pageWidth = window.innerWidth,
  pageHeight = window.innerHeight;

if (typeof pageWidth !== "number") {
  if (document.compatMode === "CSS1Compat") {
    pageWidth  = document.documentElement.clientWidth;
    pageHeight = document.documentElement.clientHeight;
  } else {
    pageWidth  = document.body.clientWidth;
    pageHeight = document.body.clientHeight;
  }
}
console.log("Page Width: " + pageWidth + ", Height: " + pageHeight);

/**
 * Windows offset
 */
window.scroll(0, 100);
console.log(window.pageXOffset + " " + window.pageYOffset + " ");

/**
 * Windows open
 */
window.open("http://www.google.com.au");

// wroxWin.close();

/**
 * Try system dialog
 */
/* alert(wroxWin);
alert(wroxWin.opener === window); */
if (window.confirm("Open donald??")) {
  let wroxWin = window.open("http://www.donald.com", "wroxWindow", 
    "height=400,width=400");
  // wroxWin.location.assign("http://www.reddit.com")
}

/**
 * Location
 */
