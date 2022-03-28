let Browser = {
    methods: {
        copyToClipboard(text) {
            if (window.clipboardData) {//Internet Explorer
                window.clipboardData.setData("Text", text);
            } else {
                navigator.clipboard.writeText(text);
            }
        }
    }
}
export default Browser;
