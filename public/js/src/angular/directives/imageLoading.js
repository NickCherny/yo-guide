export default function () {
  return {
    restrict: 'A',
    link: (scope, element, attrs) => {
      let imgMax = attrs['imageLoading'] || '';
      let ms = attrs['imageLoadingTime'] || 0;
      let timer = setTimeout(() => {
        element[0].classList.add(imgMax);
        clearTimeout(timer);
      }, ms);
    },
    scope: true
  }
}
