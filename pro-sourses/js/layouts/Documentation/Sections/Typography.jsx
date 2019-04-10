import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
// core components
import Quote from "components/Typography/Quote.jsx";
import Muted from "components/Typography/Muted.jsx";
import Primary from "components/Typography/Primary.jsx";
import Info from "components/Typography/Info.jsx";
import Success from "components/Typography/Success.jsx";
import Warning from "components/Typography/Warning.jsx";
import Danger from "components/Typography/Danger.jsx";

const codeExampleH = `<h1>h1. Material Dashboard PRO heading</h1>
<h2>h2. Material Dashboard PRO heading</h2>
<h3>h3. Material Dashboard PRO heading</h3>
<h4>h4. Material Dashboard PRO heading</h4>
<h5>h5. Material Dashboard PRO heading</h5>
<h6>h6. Material Dashboard PRO heading</h6>
<h2>
  Header with small subtitle<br />
  <small>Use &lt;small&gt; tag for the headers</small>
</h2>`;
const codeExampleP = `<p>
  I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.
</p>`;
const codeExampleQ = `import React from 'react';
// core components
import Quote from "components/Typography/Quote.jsx";

function Typography({...props}){
  return (
    <Quote
      text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
      author=" Kanye West, Musician"
    />
  );
}

export default Typography;
`;
const codeExampleC = `import React from 'react';
// core components
import Muted from "components/Typography/Muted.jsx";
import Primary from "components/Typography/Primary.jsx";
import Info from "components/Typography/Info.jsx";
import Success from "components/Typography/Success.jsx";
import Warning from "components/Typography/Warning.jsx";
import Danger from "components/Typography/Danger.jsx";

function Typography({...props}){
  return (
    <div>
      <Muted>
        I will be the leader of a company that ends up being worth
        billions of dollars, because I got the answers...
      </Muted>
      <Primary>
        I will be the leader of a company that ends up being worth
        billions of dollars, because I got the answers...
      </Primary>
      <Info>
        I will be the leader of a company that ends up being worth
        billions of dollars, because I got the answers...
      </Info>
      <Success>
        I will be the leader of a company that ends up being worth
        billions of dollars, because I got the answers...
      </Success>
      <Warning>
        I will be the leader of a company that ends up being worth
        billions of dollars, because I got the answers...
      </Warning>
      <Danger>
        I will be the leader of a company that ends up being worth
        billions of dollars, because I got the answers...
      </Danger>
    </div>
  );
}

export default Typography;
`;

function Typography({ ...props }) {
  //  const { } = props;
  return (
    <div>
      <h1>Typography</h1>
      <p>
        Documentation and examples for Material Dashboard PRO typography,
        including global settings, headings, body text, lists, and more.
      </p>
      <h2>Styles</h2>
      <p>
        You will find the styles for these components in<br />{" "}
        <code>
          src/assets/jss/material-dashboard-pro-react/components/typographyStyle.jsx
        </code>.
      </p>
      <h2>
        <b>Headings</b>
      </h2>
      <h1>h1. Material Dashboard PRO heading</h1>
      <h2>h2. Material Dashboard PRO heading</h2>
      <h3>h3. Material Dashboard PRO heading</h3>
      <h4>h4. Material Dashboard PRO heading</h4>
      <h5>h5. Material Dashboard PRO heading</h5>
      <h6>h6. Material Dashboard PRO heading</h6>
      <h2>
        Header with small subtitle<br />
        <small>Use &lt;small&gt; tag for the headers</small>
      </h2>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExampleH}
      </SyntaxHighlighter>
      <h2>
        <b>Paragraph</b>
      </h2>
      <p>
        I will be the leader of a company that ends up being worth billions of
        dollars, because I got the answers. I understand culture. I am the
        nucleus. I think that’s a responsibility that I have, to push
        possibilities, to show people, this is the level that things could be
        at.
      </p>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExampleP}
      </SyntaxHighlighter>
      <h2>
        <b>Quote</b>
      </h2>
      <Quote
        text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
        author=" Kanye West, Musician"
      />
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExampleQ}
      </SyntaxHighlighter>
      <h2>
        <b>Text Colors</b>
      </h2>
      <Muted>
        I will be the leader of a company that ends up being worth billions of
        dollars, because I got the answers...
      </Muted>
      <Primary>
        I will be the leader of a company that ends up being worth billions of
        dollars, because I got the answers...
      </Primary>
      <Info>
        I will be the leader of a company that ends up being worth billions of
        dollars, because I got the answers...
      </Info>
      <Success>
        I will be the leader of a company that ends up being worth billions of
        dollars, because I got the answers...
      </Success>
      <Warning>
        I will be the leader of a company that ends up being worth billions of
        dollars, because I got the answers...
      </Warning>
      <Danger>
        I will be the leader of a company that ends up being worth billions of
        dollars, because I got the answers...
      </Danger>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExampleC}
      </SyntaxHighlighter>
    </div>
  );
}

export default Typography;



// WEBPACK FOOTER //
// ./src/layouts/Documentation/Sections/Typography.jsx