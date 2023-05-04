import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blogs = () => {


    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => (
                        <button
                            onClick={toPdf}
                            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            Generate PDF
                        </button>
                    )}
                </Pdf>
                <div ref={ref} className="mt-4">
                    <h1 className="text-3xl font-bold">Blog Page</h1>
                    <h2 className="text-xl font-semibold">
                    This blog page contains 4 collapsible section <br />
                    The first collapsible section explains the difference <br />
                    between controlled and uncontrolled components in React.<br />
                    The second section describes how to validate React <br />
                    props using PropTypes. The third section explains <br />
                    the difference between Node.js and Express.js. The<br />
                    final collapsible section explains what a custom <br />
                     hook is in React and why you might want to create one
                    </h2>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-2xl font-medium">
                    Tell us the differences between uncontrolled and controlled components.
                </div>
                <div className="collapse-content">
                    <p>a controlled component is a React component whose value is controlled by React, whereas an uncontrolled component is a component whose value is controlled by the DOM.

                        For example, with an uncontrolled input field, the value of the input is managed by the DOM and the JavaScript code can read the current value of the input field from the DOM whenever it needs to. On the other hand, with a controlled input field, the value of the input is managed by React state, and any changes to the input value trigger a state update, causing the component to re-render with the updated value.

                        In general, controlled components are more powerful and flexible, as they give you more control over the state of the component and make it easier to validate and manipulate the input data. However, they can be more verbose and require more code to implement, especially for complex forms. Uncontrolled components, on the other hand, are simpler and require less code to implement, but are less flexible and can be harder to validate and manipulate.</p>
                </div>
            </div>


            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-2xl font-medium">
                    How to validate React props using PropTypes
                </div>
                <div className="collapse-content">
                    <p>PropTypes is a library in React that allows you to validate the types of props passed to a component, making it easier to catch and debug errors related to incorrect props. It's a way to ensure that the props passed to your component meet certain requirements, such as being of a specific type (e.g. string, number, boolean) or having a certain shape (e.g. an object with specific keys).
                        To use PropTypes, you first need to import it at the top of your file:
                        import PropTypes from 'prop-types';

                        Then, you can define the types of props that your component expects by adding a propTypes property to your component:
                        function MyComponent(props)

                        MyComponent.propTypes =
                        hobbies: PropTypes.arrayOf(PropTypes.string),
                    </p>
                </div>
            </div>


            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-2xl font-medium">
                    Tell us the difference between nodejs and express js.
                </div>
                <div className="collapse-content">
                    <p>Node.js is a runtime environment that allows developers to run JavaScript code outside of a web browser. It provides a set of built-in modules that allow developers to perform various tasks such as file I/O, network communication, and more. It also includes a V8 engine, which is a high-performance JavaScript engine developed by Google.

                        Express.js, on the other hand, is a popular web framework built on top of Node.js. It provides a set of additional features that make it easier for developers to build web applications using Node.js. Some of these features include middleware for handling requests and responses, routing, templating engines, and more.

                        In simpler terms, Node.js is a runtime environment, while Express.js is a framework built on top of Node.js. Node.js provides the core functionality for running JavaScript code outside of a web browser, while Express.js provides additional features that make it easier to build web applications.</p>
                </div>
            </div>


            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-2xl font-medium">
                    What is a custom hook, and why will you create a custom hook?
                </div>
                <div className="collapse-content">
                    <p>
                        In React, a custom hook is a function that uses one or more built-in hooks and/or other custom hooks to provide some reusable functionality that can be used across multiple components.

                        There are several reasons why you might want to create a custom hook:

                        Reusability: If you find yourself writing the same code repeatedly in multiple components, you can abstract that code into a custom hook and reuse it across those components.

                        Abstraction: Custom hooks can help you hide implementation details and provide a simpler, higher-level interface for components to interact with.

                        Encapsulation: Custom hooks can help you encapsulate complex logic or state management in a single hook, making your components more modular and easier to reason about.

                        Separation of Concerns: Custom hooks can help you separate concerns in your codebase, making it easier to understand and maintain.

                        Overall, custom hooks are a powerful tool in React that can help you write more modular, reusable, and maintainable code.</p>
                </div>
            </div>
        </>
    );
};

export default Blogs;