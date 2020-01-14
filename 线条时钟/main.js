let hourDom = document.getElementById('hour');
let mniuteDom = document.getElementById('minute');
let secondDom = document.getElementById('second');
function getRoateAngle() {
	let today = new Date();
	let h = today.getHours();
	let m = today.getMinutes();
	let s = today.getSeconds();
	let hourDeg = (m / 60) * 30;
  let minuteDeg = (s / 60) * 6;
  let secondDeg = s * 6;
  hourDom.style.transform = `rotate(${h * 30+ hourDeg}deg)`;
  mniuteDom.style.transform = `rotate(${m * 6 + minuteDeg}deg)`;
  secondDom.style.transform = `rotate(${secondDeg}deg)`;
}
getRoateAngle();
setInterval(function() {
  getRoateAngle();
}, 1000);