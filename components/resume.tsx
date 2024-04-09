import React from "react";

type ResumeItem = {
    number: string;
    title: string;
    description: React.ReactNode;
};

const resumeItems: ResumeItem[] = [
    {
        number: "3",
        title:
            "Oct 2023 - Today: Lorpem Ipsum at Lorpem Ipsum Inc.",
        description: (
            <div>
                <ul>
                    <li>
                        &#x2022; Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                        &#x2022; Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </li>
                    <li>
                        &#x2022; Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </li>
                    <li>
                        &#x2022; Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </li>
                    <li>
                        &#x2022; Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </li>
                </ul>
            </div>
        ),
    },
    {
        number: "2",
        title:
            "Jan 2021 – Today: PR Account Manager at Lorpem Ipsum PR Agency",
        description: (
            <div>
                <ul>
                    <li>
                        &#x2022; Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                        &#x2022; Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </li>
                    <li>
                        &#x2022; Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </li>
                    <li>
                        &#x2022; Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </li>
                    <li>
                        &#x2022; Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </li>
                </ul>
            </div>
        ),
    },
    {
        number: "1",
        title: "Jul 2019 – Mar 2021: Spokesperson at Lorpem Ipsum Municipality",
        description: (
            <div>
                <ul>
                    <li>
                        &#x2022; Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                        &#x2022; Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </li>
                    <li>
                        &#x2022; Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </li>
                    <li>
                        &#x2022; Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </li>
                    <li>
                        &#x2022; Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </li>
                </ul>
            </div>
        ),
    },
];



export const ShowResume = () => {
    return (
        <section>
            <div className="container px-5 py-2 mx-auto flex justify-end w-full">
                <div className="flex justify-end w-full">
                    <div className="w-full">
                        {resumeItems.map((item, i) => (
                            <div key={i} className="flex relative pb-12 w-full gap-5">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center ">
                                    <div className="dark:text-white h-full w-1 bg-neutral-300 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-300 inline-flex items-center justify-center text-black relative z-10">
                                    {item.number}
                                </div>
                                <div className="flex-grow pl-4">
                                    <h1 className="font-medium text-lg underline mb-1 tracking-wider">
                                        {item.title}
                                    </h1>
                                    <div className="leading-relaxed">{item.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};