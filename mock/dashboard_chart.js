function chart(method) {
  let res = null;
  switch (method) {
    case "GET":
      res = [43, 66, 40, 57, 31, 38];
      break;
    default:
      res = null;
  }
  return res;
}

module.exports = chart;
