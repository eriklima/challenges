const { verifyToken } = require("../auth/login")
const { responseJson, getRequestBody, generateId } = require("../utils/util")

const news = [
    {
        id: "a001",
        title: "Title 1",
        text: "Text 1",
    },
    {
        id: "a002",
        title: "Title 2",
        text: "Text 2",
    },
    {
        id: "a003",
        title: "Title 3",
        text: "Text 3",
    },
]

function getNews(req, res) {
    responseJson(res, 200, news)
}

async function addNews(req, res) {
    const { token, title, text } = await getRequestBody(req)

    if (await verifyToken(token, res)) {
        const content = { id: generateId(), title, text }
        add(content)
        responseJson(res, 201, content)
    }
}

function add(content) {
    news.push(content)
}

async function updateNews(req, res) {
    const { token, id, title, text } = await getRequestBody(req)

    if (await verifyToken(token, res)) {
        if (deleteById(id)) {
            add({ id, title, text })
            responseJson(res, 200, "Updated")
        } else {
            responseJson(res, 404, "Id not found")
        }
    }
}

async function deleteNews(req, res) {
    const { token, id } = await getRequestBody(req)

    if (await verifyToken(token, res)) {
        if (deleteById(id)) {
            responseJson(res, 204)
        } else {
            responseJson(res, 404, "Id not found")
        }
    }
}

function deleteById(id) {
    const indexNews = getIndexById(id)

    if (indexNews >= 0) {
        news.splice(indexNews, 1)
    }

    return indexNews >= 0
}

function getIndexById(id) {
    return news.findIndex((item) => item.id === id)
}

module.exports = {
    getNews,
    addNews,
    updateNews,
    deleteNews,
}
