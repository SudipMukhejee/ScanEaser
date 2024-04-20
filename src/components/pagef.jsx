import React from 'react';
import "../full.css"
function Page5() {
    return (
        <div id="page5">
            <button>Become a Client</button>
            <div id="page5-right">
                <p>
                    <span></span>
                    We lead your startup at every step of its 
                    <span></span>
                    growth, providing unparalleled personal service at every interaction. 
                    Whether it's launching an MVP, revamping an existing product, securing 
                    funding with UI prototypes, increasing customer engagement, or boosting 
                    conversions, we develop a suite of custom-tailored design services to 
                    fulfill your expectations.
                </p>
                <div id="page5-content">
                    <div className="uiux">
                        <details open>
                            <summary>
                                <h1>UI/UX Design</h1>
                                <div id="flex">
                                    <h4>UX Audit</h4>
                                    <h4>UI Design</h4>
                                    <h4>UX Design</h4>
                                    <h4>UX Research</h4>
                                </div>
                            </summary>
                            <div id="page-container">
                                <Page5Elem title="UX Research" content="Content " />
                                <Page5Elem title="UX Design" content="Content for UX Design" />
                                <Page5Elem title="UI Design" content="Content for UI Design" />
                                <Page5Elem title="UX Audit" content="Content for UX Audit" />
                            </div>
                        </details>
                    </div>
                    <div className="product">
                        <details>
                            <summary>
                                <h1>Product Design</h1>
                                <div id="flex">
                                    <h4>UX Audit</h4>
                                    <h4>UI Design</h4>
                                    <h4>UX Design</h4>
                                    <h4>UX Research</h4>
                                </div>
                            </summary>
                            <div id="page-container">
                                <Page5Elem title="UX Research" content="Content for UX Research" />
                                <Page5Elem title="UX Design" content="Content for UX Design" />
                                <Page5Elem title="UI Design" content="Content for UI Design" />
                                <Page5Elem title="UX Audit" content="Content for UX Audit" />
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
        <div className="page5-elem">
            <div className="over"></div>
            <h3>{title}</h3>
            <p>{content}</p>
            <i className="ri-arrow-right-up-line"></i>
        </div>
    );
}

export default Page5;
