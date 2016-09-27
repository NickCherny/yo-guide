export default function ($http, $cookies, serverRequests) {
  let id = $cookies.get('userId')
  return {
    id: id || '',
    fullName: serverRequests.getFullName(id),
    photo: {
      src: '',
      alt: ''
    },
    guests: [],
    travels: [],
    getUserProfile: (id) => {
      return $http.get(`/cabinet/user/${id}/profile`)
    }
  }
}
