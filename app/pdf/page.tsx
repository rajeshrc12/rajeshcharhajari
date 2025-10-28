// app/pdf/page.tsx (Next.js 13+ with App Router)
const PdfPage = () => {
  return (
    <div className="w-full h-screen">
      <object
        data="resume.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <p>
          Your browser doesnt support PDFs.
          <a href="resume.pdf" className="text-blue-500 underline">
            Download PDF
          </a>
        </p>
      </object>
    </div>
  );
};

export default PdfPage;
