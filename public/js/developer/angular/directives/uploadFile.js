export default function($cookies, serverRequests){
  return {
    restrict: 'A',
    link: (scope, element, attrs) => {
      const userId = $cookies.get('userId');

      element[0].addEventListener('change', (e) => {
        if (e.target.files) {
          serverRequests.uploadFile(userId, e.target.files[0])
            .then(
              res => {
                if (res.status === 200) scope.$emit('uploadFile', res.data);
              },
              err => {
                console.error(err)
              }
            )
        }
      })
    }
  }
}
