export default function ($http) {
  return {
    /**
     *
     * @param {String} id - user id
     * @returns {*} Promise Object
       */
    getUserFullName: (id = 'not') => {
      return $http.get(`/cabinet/user/${id}/fullName`)
    },
    /**
     *
     * @param {String} id - user id
     * @returns {*} Promise Object
       */
    getUserState: (id = 'not') => {
      return $http.get(`/cabinet/user/${id}/state`)
    },
    /**
     *
     * @param {String} id - user id
     * @returns {*} Promise
     */
    getUserProfile: (id = 'not') => {
      return $http.get(`/cabinet/user/${id}/profile`)
    },
    /**
     *
     * @param {String} id - user id
     * @returns {*} Promise
     */
    getGuests: (id = 'not') => {
      return $http.get(`/cabinet/user/${id}/guest/all`)
    },
    /**
     *
     * @param {String} id - user id
     * @returns {*} Promise
     */
    getTravels: (id = 'not') => {
      return $http.get(`/cabinet/user/${id}/travel/all`)
    },
    /**
     *
     * @param {String} id - user id
     * @param {Object} data - form data
     * @returns {*} Promise
     */
    updateProfile: (id = 'not', data = {}) => {
      return $http.post(`/cabinet/user/${id}/settings/update`, data)
    },
    /**
     *
     * @param {String} id - user id
     * @returns {*} Promise
     */
    getUserInfo: (id = 'not') => {
      return $http.get(`/user/${id}/profile/info`)
    },
    uploadFile: (id = 'not', file = 'not') => {
      if (id === 'not' || file === 'not') return 'Error';

      let form = new FormData();
      form.append('file', file);
      form.append('userId', id);
      return $http.post(`/cabinet/user/${id}/settings/photo/upload`, form, {
        headers: {'Content-Type': undefined}
      })
    },
    deletePhoto: (id='not', name='not') => {
      if (id === 'not' || name === 'not') return;
      return $http.post(`/cabinet/user/${id}/settings/photo/${name}/delete`, {})
    },
    searchGuidesLoaction: text => {
      return $http.get(`/guide/search/location/${text.toLowerCase()}`)
    }
  }
}
