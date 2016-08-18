export default function(){
  return {
    link: function(scope, elem, attrs){
      let sumChild = elem.children().length;
      let row = elem.children()[sumChild - 1];
      let inpt = elem.find('input')[0];
      inpt.addEventListener('focus', event =>{
        row.classList.add('form__row-inpt_show')
      });
      inpt.addEventListener('blur', event =>{
        if(row.classList.contains('form__row-inpt_show')){
          row.classList.remove('form__row-inpt_show')
        }
      });
    },
    restrict: 'A'
  }
}
