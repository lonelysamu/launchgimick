function onScanSuccess(decodedText, decodedResult) {
    window.open(`${decodedText}`);
    html5QrcodeScanner.clear();

}
var html5QrcodeScanner = new Html5QrcodeScanner(
    "qr-reader", { fps: 10, qrbox: 250 });

html5QrcodeScanner.render(onScanSuccess);