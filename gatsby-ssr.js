/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require("react")

exports.onRenderBody = ({setPostBodyComponents}) => {
          setPostBodyComponents([
            <script key="1" src={'js/plugins/plugins.js'} type="text/javascript" />,
            <script type="text/javascript" src={"js/beauty.custom.js"}/>
          ]);
  };
