const { responseJson, getRequestBody, generateHash } = require("../utils/util")

const loggedUsers = [
    {
        username: "erik",
        passwordHash: "7c4a8d09ca3762af61e59520943dc26494f8941b",
    },
    {
        username: "erik2",
        passwordHash: "df2983700ffecb52e6649f0cb3981b66537083a4",
    },
]

async function login(req, res) {
    const body = await getRequestBody(req)

    const loggedUser = loggedUsers.find(
        (user) => user.username === body.username
    )

    if (!loggedUser) {
        responseJson(res, 403)
    } else {
        const passwordHash = generateHash(body.password)

        if (passwordHash != loggedUser.passwordHash) {
            responseJson(res, 403)
        } else {
            responseJson(res, 200, { token: loggedUser.passwordHash })
        }
    }
}

async function logout(req, res) {
    const body = await getRequestBody(req)

    const userIndex = loggedUsers.findIndex(
        (user) => user.username === body.username
    )

    if (userIndex < 0) {
        responseJson(res, 404, "User not found")
    } else {
        loggedUsers.splice(userIndex, 1)
        responseJson(res, 204)
    }
}

async function verifyToken(token, res) {
    const userIndex = loggedUsers.findIndex(
        (user) => user.passwordHash === token
    )

    if (userIndex < 0) {
        responseJson(res, 403, "Invalid token")
    }

    return userIndex >= 0
}

module.exports = {
    login,
    logout,
    verifyToken,
}
