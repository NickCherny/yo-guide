export default function($cookies, serverRequests){
  let id = $cookies.get('userId');
  return {
    id: id || '',
    fullName: serverRequests.getFullName(id),
    photo: {
      src: '',
      alt: ''
    },
    guests: [],
    travels: []
  }
}
