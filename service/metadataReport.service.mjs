import { PDFDocument } from 'pdf-lib';
//import { PDFURL } from '../util/pdfUrl-utils';



const baseUrl = 'http://127.0.0.1:9000/cwa-bce-final-test-s3/';

//PDFURL.PDFURL.forEach(async element => {
// const { PDFDocument } = PDFLib;

//const pdfUrl = baseUrl + element.pdf;
const pdfUrl = baseUrl + 'files/rsa/case/tha/215/terms.pdf'
const pdfBytes = await fetch(pdfUrl).then((res) => res.arrayBuffer());


// Load the PDF document without updating its existing metadata
const pdfDoc = await PDFDocument.load(pdfBytes, {
    updateMetadata: false
});

// Read all available metadata fields      
// const title = pdfDoc.getTitle();
const author = pdfDoc.getAuthor();


console.log("metadata => " + author)

//});
