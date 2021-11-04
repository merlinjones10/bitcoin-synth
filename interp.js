//https://www.trysmudford.com/blog/linear-interpolation-functions/
function lerp(x, y, a) {
  return x * (1 - a) + y * a;
}

var interpolatedList = []

inlets = 1;
outlets = 1;

function bang() 
{
	outlet(0, interpolatedList );	
}
  
function list() {
  var arr = arrayfromargs(arguments)
  var interpDecimal = 0.5;
  var interpolated = [];
  for (var i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      interpolated.push(arr[i]);
      break;
    }
    interpolated.push(arr[i], lerp(arr[i], arr[i + 1], interpDecimal));
  }
  interpolatedList = interpolated;
  post(interpolated)
  bang();
}