import React from 'react';
import "../full.css"
function Page5() {
    return (
        <div id="page5">
            <button>Use OCR</button>
            <div id="page5-right">
                <p>
                    Experience unparalleled support and personalized attention as we streamline your processes and elevate your user experience. Our mission is to revolutionize the way you interact with visual content, making information accessible and actionable for all.
                </p>
                <div id="page5-content">
                    <div className="uiux">
                        <details open>
                            <summary>
                                <h1>Frequently Asked Questions</h1>
                            </summary>
                            <div id="page-container">
                                <Page5Elem title="What is Optical Character Recognition (OCR)?" content="Optical Character Recognition (OCR) is a technology that enables the conversion of various types of documents, such as scanned images or PDFs, into editable and searchable text. Our OCR service utilizes advanced algorithms to recognize characters within images and convert them into machine-readable text." />
                                <Page5Elem title="How does OCR work?" content="OCR works by analyzing the patterns of light and dark pixels in an image, identifying shapes that resemble characters, and then converting these shapes into text. Our OCR technology employs machine learning and artificial intelligence algorithms to continuously improve accuracy and efficiency." />
                                <Page5Elem title="Is my data secure when using your OCR service?" content="We take data security and privacy seriously. Our OCR service is designed with robust security measures to ensure the confidentiality and integrity of your data. We adhere to strict security standards and protocols to safeguard your information against unauthorized access, disclosure, or misuse." />
                                <Page5Elem title="What platforms are compatible with your OCR service?" content="Our OCR service is compatible with various platforms and devices, including desktop computers, laptops, smartphones, tablets, and web browsers. Whether you're accessing our service through a web application, mobile app, or API integration, you can enjoy seamless OCR functionality across different platforms." />
                            </div>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Page5Elem({ title, content }) {
    return (
        <div className="page5-elem block">
            <div className="over"></div>
            <h3>{title}</h3>
            <p>{content}</p>
            <i className="ri-arrow-right-up-line"></i>
        </div>
    );
}

export default Page5;
