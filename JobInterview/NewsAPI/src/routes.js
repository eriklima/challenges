const { login, logout } = require("./auth/login")
const { getNews, addNews, updateNews, deleteNews } = require("./news/news")

const routes = [
    {
        path: "/login",
        method: "POST",
        action: login,
    },
    {
        path: "/logout",
        method: "POST",
        action: logout,
    },
    {
        path: "/news",
        method: "GET",
        action: getNews,
    },
    {
        path: "/news",
        method: "POST",
        action: addNews,
    },
    {
        path: "/news",
        method: "PUT",
        action: updateNews,
    },
    {
        path: "/news",
        method: "DELETE",
        action: deleteNews,
    },
]

function getRoute(req) {
    return routes.find((route) => {
        const regex = new RegExp(route.path)
        return regex.test(req.url) && req.method === route.method
    })
}

module.exports = {
    getRoute,
}
