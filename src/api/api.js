const API = {
    fetchAllPosts: function(userId) {
        let URI = `https://jsonplaceholder.typicode.com/users/${userId}/posts`
        return (
            fetch(URI, {
                method: 'get'
            })
            .then(response => response.json())
        )
    },

    fetchAllUsers: function() {
        let URI = `https://jsonplaceholder.typicode.com/users`
        return (
            fetch(URI, {
                method: 'get'
            })
            .then(response => response.json())
        )
    }
}

export default API;