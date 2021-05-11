import * as axios from 'axios';

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      "API-KEY": '7a54856f-2743-4411-acb4-8e65a28abcfb'
   }
});

export const usersAPI = {
   getUsers(currentPage = 1, pageSize = 5) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => {
            return response.data;
         });
   },

   follow(userId) {
      return instance.post(`follow/${userId}`)

   },

   unfollow(userId) {
      return instance.delete(`follow/${userId}`)

   },

   getProfile(userId) {
      return profileAPI.getProfile(userId)
   }

}


export const profileAPI = {
   getProfile(userId) {
      return instance.get(`profile/${userId}`)
   },
   getStatus(userId) {
      return instance.get(`profile/status/${userId}`)
   },
   updateStatus(status) {
      return instance.put(`profile/status`, { status: status })
   }

}

export const authAPI = {
   getMe() {
      return instance.get(`auth/me`)
   }

}