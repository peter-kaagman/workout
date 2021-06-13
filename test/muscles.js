$(document).ready(function(){
  console.log("In ready");
  var img = new Image();
  img.src = '../public/images/muscles.png';
  var img_container = document.getElementById('img-container');
  var img_container_width = $("#img-container").width();
  var c = document.getElementById('muscles');
  var ctx = c.getContext("2d");
  var aspect = img.height / img.width;
  //console.log(`img width: ${img.width}`);
  //console.log(`img heigt: ${img.height}`);
  //console.log(`aspect ratio: ${aspect}`);
  c.width = img_container_width;
  c.height = parseInt(img_container_width)*parseFloat(aspect);
  //console.log(`canvas width: ${c.width}`);
  //console.log(`canvas height: ${c.height}`);
  var scale = img.width / c.width;
  //console.log(`Scale: ${scale}`);

  img.onload = function(){
    ctx.drawImage(img, 0,0,img.width, img.height,
                       0,0,c.width, c.height);
    //ctx.fillStyle = "rgba(1, 1, 1, 0.01)";
    //ctx.fillRect(0,0,c.width,c.height);
  };

  c.addEventListener('click', function(event){
    console.log(event);
    // Compensate for scrolling
    const rect = c.getBoundingClientRect();
    //console.log(`rect left: ${rect.left} rect top: ${rect.top}`)
    var cX = event.clientX - rect.left;
    var cY = event.clientY - rect.top;
    var iX = parseInt(parseInt(cX) * parseFloat(scale));
    var iY = parseInt(parseInt(cY) * parseFloat(scale));
    $("#clicks tbody").append(`<tr><td>${cX}</td><td>${cY}</td><td>${iX}</td><td>${iY}</td></tr>`);
    ctx.beginPath();
    ctx.arc(cX,cY,2,0, Math.PI*2,true);
    ctx.stroke();
  });
});
