export class Browser {
    static copyToClipboard(text) {
        if (window.clipboardData) {//Internet Explorer
            window.clipboardData.setData("Text", text);
        } else {
            navigator.clipboard.writeText(text);
        }
    }
}
