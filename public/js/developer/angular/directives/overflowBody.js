const overflowBody = function(){
  return {
    link: (scope, element, attrs)=>{
      scope.$on('formShow', function(event){
        element.addClass('overflow-hidden');
      });
      scope.$on('closeForm', function(event){
        element.removeClass('overflow-hidden');
      })
    },
    restrict: 'A',
    replace: 'false'
  }
};
export default overflowBody;
