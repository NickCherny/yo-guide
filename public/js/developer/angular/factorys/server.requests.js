export default function ($http) {
  return {
    getUserFullName: id => {
      return $http.get(`/api/v1/cabinet/user/${id}/fullName`)
    },
    getUserState: id => {
      return $http.get(`/api/v1/cabinet/user/${id}/state`)
    },
    getUserProfile: id => {
      return $http.get(`/api/v1/user/${id}/profile`)
    },
    getGuests: id => {
      return $http.get(`/api/v1/user/${id}/guest/all`)
    },
    getTravels: id => {
      return $http.get(`/api/v1/user/${id}/travel/all`)
    },
    updateProfile: (id, data) => {
      return $http.post(`/cabinet/user/${id}/settings/update`, data)
    }
  }
}
