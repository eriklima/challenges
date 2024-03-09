const { EventEmitter } = require("node:events")
const cheerio = require("cheerio")

class TinyScraper extends EventEmitter {
    isTimeout = false
    timer = null

    constructor(url, timeout = 2000) {
        super()
        this.url = url
        this.timeout = timeout
        this.startScrapping()
    }

    async startScrapping() {
        this.emit("startedScrapping", this.url)

        this.isTimeout = false

        this.timer = setTimeout((ctx) => {
            this.isTimeout = true
            this.emit("timeout")
        }, this.timeout)

        this.getOpenGraph()
            .then((openGraph) => {
                clearTimeout(this.timer)
                if (!this.isTimeout) this.emit("scrapedSuccessful", openGraph)
            })
            .catch((error) => {
                clearTimeout(this.timer)
                this.emit("error", error)
            })
    }

    async getOpenGraph() {
        return new Promise(async (resolve, reject) => {
            try {
                const webPage = await this.fetchWebPage()
                const openGraph = await this.scrapWebPage(webPage)
                resolve(openGraph)
            } catch (error) {
                reject(error)
            }
        })
    }

    async fetchWebPage() {
        const result = await fetch(this.url)
        return await result.text()
    }

    scrapWebPage(webPage) {
        return new Promise((resolve, reject) => {
            try {
                const $ = cheerio.load(webPage)
                const title = $('meta[property="og:title"]').attr("content")

                const image = $('meta[property="og:image"]').attr("content")

                const description = $('meta[property="og:description"]').attr(
                    "content"
                )

                resolve({
                    title,
                    image,
                    description,
                })
            } catch (error) {
                reject(error)
            }
        })
    }
}

module.exports = TinyScraper
