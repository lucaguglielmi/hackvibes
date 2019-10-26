

var spongebob = "<img src = 'img/avatar/png/avatar1.png' class = 'avatar' >";
var patrick = "<img src = 'img/avatar/png/avatar2.png' class = 'avatar' >";
var squidward = "<img src = 'img/avatar/png/avatar3.png' class = 'avatar' >";
var krabs = "<img src = 'img/avatar/png/avatar4.png' class = 'avatar' >";
var larry = "<img src = 'img/avatar/png/avatar5.png' class = 'avatar' >";
var images = [spongebob, patrick, squidward, krabs, larry]
function displayImage(){
  var rn = Math.random();
  rn = rn*4;
  rn = Math.floor(rn);

  var currentphoto = images[rn];
  document.getElementById("pic").innerHTML=currentphoto;
  document.getElementById("pic-mirrored").innerHTML=currentphoto;
  
    // sync img src of the avatar to the confirmation message
    // $("#pic").find("img").attr("src", $("#pic-loading").attr("src"));
    // console.log("swap img 2");
}