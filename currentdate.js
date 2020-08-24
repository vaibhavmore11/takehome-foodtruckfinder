module.exports = {

  getCurrentDateTime: function() {
    const today = new Date();

    var sysdate = {

      "hour": today.getHours(),
      "minutes": today.getMinutes(),
      "seconds": today.getSeconds(),

      "year": today.getFullYear(),
      "month": today.getMonth() + 1,
      "date": today.getDate(),
      "day": today.getDay()
    }

    return sysdate;
  }
};