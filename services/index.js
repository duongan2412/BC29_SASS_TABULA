function Services() {

    this.getListTeachers = function () {
        return axios({
            url: "https://628b995c7886bbbb37bbca67.mockapi.io/api/teacher",
            method: "GET"
        })
    }
}