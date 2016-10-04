export default function(){
  return {
    restrict: 'A',
    link: (scope, element, attrs) => {
      let className = attrs['setClass']
      let listenElement = element[0].querySelector(`[${attrs['focusElement']}]`)
      let hideElement = element[0].querySelector(`[${attrs['hideElement']}]`)
      if(className && listenElement && hideElement){
        listenElement.addEventListener('focus', e => {
          hideElement.classList.add(className)
        })
        listenElement.addEventListener('blur', e => {
          (hideElement.classList.contains(className)) ? hideElement.classList.remove(className) : null;
        })
      }
    }
  }
}
