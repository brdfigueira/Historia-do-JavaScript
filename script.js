var linkedinURL1 = "https://br.linkedin.com/in/breno-figueira";
var linkedinURL2 = "https://www.linkedin.com/in/cesar-ricardo-mariscal-7191b929b/";

var qrcode1 = new QRious({
    element: document.getElementById("qrcode1"),
    value: linkedinURL1,
    size: 128
});

var qrcode2 = new QRious({
    element: document.getElementById("qrcode2"),
    value: linkedinURL2,
    size: 128
});