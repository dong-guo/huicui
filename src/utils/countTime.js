let time = () => {
  let day,hour,minute,seconds
  var endTime = new Date('2019/01/22 17:00:00').getTime() + 1000;
  let interval = null;
  interval = setInterval(() => {
    let syhm = endTime - Date.now(); // 剩余毫秒
    if (syhm >= 0) {
      day = Math.floor(syhm / 1000 / 60 / 60 / 24);
      hour = Math.floor(syhm / 1000 / 60 / 60 % 24);
      minute = Math.floor(syhm / 1000 / 60 % 60);
      seconds = Math.floor(syhm / 1000 % 60);
      return day
    } else {
      clearInterval(interval);
    }
  }, 0);
}
export {time}