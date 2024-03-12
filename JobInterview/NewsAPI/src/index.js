const http = require("node:http")
const { responseJson } = require("./utils/util")
const { logout, login, verifyToken } = require("./auth/login")
const { getNews, addNews, updateNews, deleteNews } = require("./news/news")
const { getRoute } = require("./routes")

const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || "localhost"

const requestListener = async function (req, res) {
    res.setHeader("Content-Type", "application/json")
    const route = getRoute(req)

    if (!route) {
        responseJson(res, 404, "Not found\n")
    } else {
        route.action(req, res)
    }
}

// const requestListener = async function (req, res) {
//     res.setHeader("Content-Type", "application/json")

//     switch (req.url) {
//         case "/login":
//             switch (req.method) {
//                 case "POST":
//                     login(req, res)
//                     break
//             }
//             break
//         case "/logout":
//             switch (req.method) {
//                 case "POST":
//                     logout(req, res)
//                     break
//             }
//             break
//         case "/news":
//             switch (req.method) {
//                 case "GET":
//                     getNews(req, res)
//                     break
//                 case "POST":
//                     addNews(req, res)
//                     break
//                 case "PUT":
//                     updateNews(req, res)
//                     break
//                 case "DELETE":
//                     deleteNews(req, res)
//                     break
//             }
//             break
//         default:
//             responseJson(res, 404, "Not found\n")
//     }
// }

const server = http.createServer(requestListener)

server.listen(PORT, HOST, () => {
    console.info(`Server running on ${HOST}:${PORT}`)
})
