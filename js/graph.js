var graph = document.getElementById('graph');
var ctx = graph.getContext('2d');

ctx.fillStyle = 'gray';
ctx.fillRect(0,0,500,100);

ctx.beginPath();
ctx.strokeStyle = 'orange';
ctx.moveTo(0,100);
var kys = Object.keys(records);
var x;
var y;


for (var i = 0; i < kys.length; i++){
    y = 100 - records[kys[i]];
    ctx.lineTo(x,y);
    x = (i * 5);
    y = 100;
    ctx.moveTo(x,y);
}

ctx.stroke();
