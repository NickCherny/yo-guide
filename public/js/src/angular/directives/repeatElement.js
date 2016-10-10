export default function() {
  return {
    link: (scope, element, attrs) => {
      let repeatCount = Math.round(attrs['repeatCount']);
      let el = element[0];
      if(repeatCount > 0) {
        let i = 0;
        let count = repeatCount - 1;
        while(i < count ) {
          let star = el.cloneNode(true);
          el.parentElement.appendChild(star);
          i++;
        }
      }
    },
    restrict: 'A'
  }
}
