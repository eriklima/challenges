const TinyScraper = require("./tiny-scraper")

const scraper = new TinyScraper("https://discord.com")

scraper.on("startedScrapping", (data) => {
    console.log("Started: ", data)
})

scraper.on("scrapedSuccessful", (data) => {
    console.log("Success: ", data)
})

scraper.on("timeout", () => {
    console.log("Timeout")
})

scraper.on("error", (error) => {
    console.error("Error: ", error.message)
})
