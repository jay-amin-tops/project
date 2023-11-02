import React from 'react';

const fucntionalcompointro = () => {
    return (
        <>
            <p>This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “function components” because they are literally JavaScript functions.</p>
            <pre>
                function Welcome(props) &#123; <br/>
                   &nbsp;&nbsp;&nbsp;&nbsp; return &lt;h1&gt;Hello, &#123;props.name&#125;&lt;/h1&gt;; <br/>
                &#125; <br/>
            </pre>
        </>
    );
};

export default fucntionalcompointro;