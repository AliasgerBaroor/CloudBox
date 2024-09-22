import Script from "next/script";
import "./globals.css";
import { Providers } from "@/redux/provider";
export const metadata = {
  title: "Cloud Box",
  description: "Cloud Box is a simple cloud storage provider",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
  <link rel="stylesheet" href="/assets/css/backend-plugin.min.css" />
  <link rel="stylesheet" href="/assets/css/backend.css?v=1.0.0" />
  <link rel="stylesheet" href="/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />
  <link rel="stylesheet" href="/assets/vendor/line-awesome/dist/line-awesome/css/line-awesome.min.css" />
  <link rel="stylesheet" href="/assets/vendor/remixicon/fonts/remixicon.css" />
  {/* Viewer Plugin */}
  {/*PDF*/}
  <link rel="stylesheet" href="/assets/vendor/doc-viewer/include/pdf/pdf.viewer.css" />
  {/*Docs*/}
  {/*PPTX*/}
  <link rel="stylesheet" href="/assets/vendor/doc-viewer/include/PPTXjs/css/pptxjs.css" />
  <link rel="stylesheet" href="/assets/vendor/doc-viewer/include/PPTXjs/css/nv.d3.min.css" />
  {/*All Spreadsheet */}
  <link rel="stylesheet" href="/assets/vendor/doc-viewer/include/SheetJS/handsontable.full.min.css" />
  {/*Image viewer*/}
  <link rel="stylesheet" href="/assets/vendor/doc-viewer/include/verySimpleImageViewer/css/jquery.verySimpleImageViewer.css" />
  {/*officeToHtml*/}
  <link rel="stylesheet" href="/assets/vendor/doc-viewer/include/officeToHtml/officeToHtml.css" />

      </head>
      <body>
     
        <Providers>{children}</Providers>

      </body>
      <Script src="/assets/js/backend-bundle.min.js"></Script>
      <Script src="/assets/js/customizer.js"></Script>
      <Script src="/assets/js/chart-custom.js"></Script>
      <Script src="/assets/vendor/doc-viewer/include/pdf/pdf.js"></Script>
      <Script src="/assets/vendor/doc-viewer/include/docx/jszip-utils.js"></Script>
      <Script src="/assets/vendor/doc-viewer/include/PPTXjs/js/filereader.js"></Script>
      <Script src="/assets/vendor/doc-viewer/include/PPTXjs/js/d3.min.js"></Script>
      <Script src="/assets/vendor/doc-viewer/include/PPTXjs/js/nv.d3.min.js"></Script>
      <Script src="/assets/vendor/doc-viewer/include/PPTXjs/js/pptxjs.js"></Script>
      <Script src="/assets/vendor/doc-viewer/include/PPTXjs/js/divs2slides.js"></Script>
      <Script src="/assets/vendor/doc-viewer/include/SheetJS/handsontable.full.min.js"></Script>
      <Script src="/assets/vendor/doc-viewer/include/SheetJS/xlsx.full.min.js"></Script>
      <Script src="/assets/vendor/doc-viewer/include/verySimpleImageViewer/js/jquery.verySimpleImageViewer.js"></Script>
      <Script src="/assets/vendor/doc-viewer/include/officeToHtml/officeToHtml.js"></Script>
      <Script src="/assets/js/doc-viewer.js"></Script>
      <Script src="/assets/js/app.js"></Script>
    </html>
  );
}
