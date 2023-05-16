const Directory = require('./directoryService')

const directory = Directory.getDirectory('file/s3-final-prod/rsa/case');
exports.PDFURL = function PDFURL() {
    const pdfUrls = [];
    for (const tenent of directory.children) {
        if (tenent.name == '000') {

            for (const tenentChild of tenent.children) {
                if (tenentChild.type != 'folder') {
                    let pdfUrl = tenentChild.path.replace("s3-final-prod/", "");
                    pdfUrls.push({
                        "tenent": tenent.name,
                        "pdf": pdfUrl
                    });
                } else {
                    for (const partner of tenentChild.children) {
                        let pdfUrl = partner.path.replace("s3-final-prod/", "");
                        pdfUrls.push({
                            "tenent": tenent.name,
                            "partner": tenentChild.name,
                            "pdf": pdfUrl
                        });
                    }
                }
            }
        }
    }

    pdfUrls.forEach(pdfUrl => {
        console.log("tenent =>" + pdfUrl.tenent);
        console.log("pdf  =>" + pdfUrl.pdf)
    });
    return pdfUrls;

}
