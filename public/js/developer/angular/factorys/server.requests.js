export default function ($http) {
  return {
    getUserFullName: id => {
      return $http.get(`/cabinet/user/${id}/fullName`)
    },
    getUserState: id => {
      return $http.get(`/cabinet/user/${id}/state`)
    },
    /**
     *
     * @param {String} id - user id
     * @returns {*} Promise
     */
    getUserProfile: id => {
      return $http.get(`/cabinet/user/${id}/profile`)
    },
    /**
     *
     * @param {String} id - user id
     * @returns {*} Promise
     */
    getGuests: id => {
      return $http.get(`/cabinet/user/${id}/guest/all`)
    },
    /**
     *
     * @param {String} id - user id
     * @returns {*} Promise
     */
    getTravels: id => {
      return $http.get(`/cabinet/user/${id}/travel/all`)
    },
    /**
     *
     * @param {String} id - user id
     * @param {Object} data - form data
     * @returns {*} Promise
     */
    updateProfile: (id, data) => {
      return $http.post(`/cabinet/user/${id}/settings/update`, data)
    },
    /**
     *
     * @param {String} id - user id
     * @returns {*} Promise
     */
    getUserInfo: (id = '') => {
      return $http.get(`/user/${id}/profile/info`)
    }
  }
}
