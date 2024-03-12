const { v4 } = require("uuid")
const crypto = require("node:crypto")

function generateId() {
    return v4()
}

function generateHash(value) {
    const hash = crypto.createHash("sha1")
    const data = hash.update(value, "utf-8")
    return data.digest("hex")
}

function responseJson(res, statusCode, value) {
    res.writeHeader(statusCode)
    res.end(JSON.stringify(value))
}

function getRequestBody(req) {
    return new Promise((resolve) => {
        const body = []

        req.on("data", (chunk) => {
            body.push(chunk)
        })

        req.on("end", () => {
            resolve(JSON.parse(Buffer.concat(body).toString()))
        })
    })
}

module.exports = {
    generateId,
    generateHash,
    responseJson,
    getRequestBody,
}
