

var spongebob = "<img src = 'img/avatar/png/avatar1.png'>";
var patrick = "<img src = 'img/avatar/png/avatar2.png'>";
var squidward = "<img src = 'img/avatar/png/avatar3.png'>";
var sandy = "<img src = 'img/avatar/png/avatar3.png'>";
var krabs = "<img src = 'img/avatar/png/avatar4.png'>";
var larry = "<img src = 'img/avatar/png/avatar5.png'>";
var images = [spongebob, patrick, squidward, sandy, krabs, larry]
var names = ["Spongebob Squarepants", "Patrick Star", "Squidward Tentacles", "Sandy Cheeks", "Eugene Krabs", "Larry Lobster"]
function displayImage(){
  var rn = Math.random();
  rn = rn*6;
  rn = Math.floor(rn);
  document.getElementById("pic").innerHTML=images[rn];
  document.getElementById("name").innerHTML=names[rn];
}