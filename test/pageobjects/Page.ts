// Page.js
export default class Page {
    constructor() {
     
    }
    
    async open (path) {
        await browser.url(path)
    }
}