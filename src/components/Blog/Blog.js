import React from 'react';

const Blog = () => {
    return (
        <div className='bg-slate-100'>


            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="db164e35-2a0e-4c0f-ab05-f14edc6d4d30"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative">The</span>
                        </span>{' '}
                        Some question's we have to know for learning react
                    </h2>

                </div>
                <div className="grid max-w-sm gap-5 mb-8 lg:grid-cols-1 sm:mx-auto lg:max-w-full">
                    <div className="px-10 py-20 text-center border-2 border-slate-400 rounded lg:px-5 lg:py-10 xl:py-20">
                        <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                            22 Aug, 2022
                        </p>
                        <a
                            href="/"
                            className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            aria-label="Read article"
                            title="Nori grape silver beet broccoli kombu beet"
                        >
                            What is the purpose of react router?
                        </a>
                        <p className="max-w-lg mx-auto mb-2 text-gray-700">
                            Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.

                            React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.
                        </p>
                        <a
                            href="/*"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Read more
                        </a>
                    </div>


                </div>
                <div className="grid max-w-sm gap-5 mb-8 lg:grid-cols-1 sm:mx-auto lg:max-w-full">
                    <div className="px-10 py-20 text-center border-2 border-slate-400 rounded lg:px-5 lg:py-10 xl:py-20">
                        <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                            February 07, 2022 - Dávid Kasznár
                        </p>
                        <a
                            href="/"
                            className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            aria-label="Read article"
                            title="Nori grape silver beet broccoli kombu beet"
                        >
                            What is the use of context API in React?
                        </a>
                        <p className="max-w-lg mx-auto mb-2 text-gray-700">
                            Context is a built-in API introduced in ​​React 16.3. It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props. It can be used to solve the same problems as Redux does, but it doesn’t provide a strict way of state manipulation to ensure predictable behavior. Despite its low-level nature, it might be the perfect solution in some cases.
                            <br />
                            A context contains references to variables and notifies its consumers when these references are changed. There are no restrictions on what type of values you can provide, so you can easily pass in functions that can be used to communicate events back from consumers, for example.

                            To create a context, call the createContext function with an arbitrary value. This will be the default value provided to the consumers. Optionally provide an interface describing your provided object. The returned object will contain helper components you need to provide or consume this context.
                        </p>
                        <a
                            href="/*"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Read more
                        </a>
                    </div>


                </div>
                <div className="grid max-w-sm gap-5 mb-8 lg:grid-cols-1 sm:mx-auto lg:max-w-full">
                    <div className="px-10 py-20 text-center border-2 border-slate-400 rounded lg:px-5 lg:py-10 xl:py-20">
                        <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">

                        </p>
                        <a
                            href="/"
                            className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            aria-label="Read article"
                            title="Nori grape silver beet broccoli kombu beet"
                        >
                            What is useRef hook ?
                        </a>
                        <p className="max-w-lg mx-auto mb-2 text-gray-700">
                            The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                        </p>
                        <a
                            href="/*"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Read more
                        </a>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Blog;