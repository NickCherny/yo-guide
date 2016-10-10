class GuideCardCtrl {
  constructor () {
    this.guidesInfo
  }
  createArray (len) {
    let i = 0;
    let arr = [];
    while ( i < len) {
      arr.push(i);
      i++
    }
    return arr;
  }
}
export default GuideCardCtrl;
