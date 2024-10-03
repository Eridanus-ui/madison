import React from "react";
import PDFCard from "./pdfCard";

const pdfFiles = [
  {
    title: "React PDF Guide",
    description: "A comprehensive guide to building apps in React.",
    pdfUrl: "https://example.com/react-guide.pdf",
  },
  {
    title: "Node.js Handbook",
    description: "Learn how to build scalable applications with Node.js.",
    pdfUrl: "https://example.com/node-handbook.pdf",
  },
  {
    title: "Tailwind CSS Cheat Sheet",
    description: "A quick reference guide for Tailwind CSS utilities.",
    pdfUrl: "https://example.com/tailwind-cheatsheet.pdf",
  },
];

export default function PDFList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {pdfFiles.map((file, index) => (
        <PDFCard
          key={index}
          title={file.title}
          description={file.description}
          pdfUrl={file.pdfUrl}
        />
      ))}
    </div>
  );
}
