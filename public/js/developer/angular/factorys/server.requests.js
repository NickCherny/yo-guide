export default function ($http) {
  return {
    getUserFullName: id => {
      return $http.get(`/cabinet/user/${id}/fullName`)
    },
    getUserState: id => {
      return $http.get(`/cabinet/user/${id}/state`)
    },
    getUserProfile: id => {
      return $http.get(`/cabinet/user/${id}/profile`)
    },
    getGuests: id => {
      return $http.get(`/cabinet/user/${id}/guest/all`)
    },
    getTravels: id => {
      return $http.get(`/cabinet/user/${id}/travel/all`)
    },
    updateProfile: (id, data) => {
      return $http.post(`/cabinet/user/${id}/settings/update`, data)
    }
  }
}
