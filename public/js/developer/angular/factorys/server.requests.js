export default function($http){
  return {
    getUserFullName: id => {
      return $http.get(`/api/v1/cabinet/user/${id}/fullName`)
    }
  }
}
