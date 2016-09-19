export default function(){
  return {
    strict: 'A',
    link: (scope, element, attrs) =>{
      let btn = element[0].querySelector('[data-toggle-btn]');
      let container = element[0].querySelector('[data-toggle-container]');
      if(btn && container){
        btn.addEventListener('click', e =>{
          container.classList.toggle('toggle-container_show');
        });
      }
    }
  }
}
