<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Starter Rendering Modes
</h1>

Kick off your project with this example boilerplate, which includes examples of how to use the different rendering modes available for gatsby. Now, you can render ahead of time(SSG), just in time(SSR), or fashionably late(DSG)💃.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.com/starters/)._

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-rendering-modes)


## 🚀 Quick start (CLI)

1.  **Create a Gatsby site.**

    Use the Gatsby CLI ([install instructions](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli)) to create a new site, specifying the rendering-modes starter.

    ```shell
    # create a new Gatsby site using the hello-world starter
    npx gatsby new gatsby-starter-rendering-modes https://github.com/gatsbyjs/gatsby-starter-rendering-modes
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd gatsby-starter-rendering-modes/
    npm start
    ```

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the `gatsby-starter-rendering-modes` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!


## Important Pages
- `src/pages/ssr.js` uses the `getServerData` API to enable SSR mode
- `src/templates/dsg.js` uses the `createPages` API to enable DSG

## Using Deferred Static Generation(DSG) and Server Side Rendering(SSR)

### DSG

Deferred static Generation gives you the power to build only a part of your page and leave the rest until run-time

to enable DSG, you simply add the `defer` property when creating pages in `gatsby-node` as shown below:

``` gatsby-node.js
const path = require('path')

exports.createPages = ({
  actions,
}) => {

  actions.createPage({
    path: '/dsg', // expected relative path
    component: path.resolve('src/templates/dsg.js'), // this path goes to where the defered page should be expected
    defer: true,
  })
}
```

Add the link to an existing page in order to allow access to the page

```
  <Link to='/dsg'>DSG page</Link>
```

### SSR

to enable SSR, export an asynchronous function `getServerData` within the file where you wish to be able to dynamically retrieve content.

```
export async function getServerData ({ params }) {
  const data = await fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(res => res.json())

  return {
    props: {
     // data has the shape of "message", "status" where message is the image src
      image: data.message
    }
  }
}
```

access the data within the page using props:

```
export default function SSR (props) {
  const { image } = props.serverData
  // ...rest of code
}
```

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├──── src
    │   └── pages
    │       └── ssr.js
    │   └── templates
    │       └── dsg.js
    ├── .gitignore
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.
1.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.
1.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) for more detail).
1.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.
1.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.
1. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**
1. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.
1. **`README.md`**: A text file containing useful reference information about your project.


## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[Build, Deploy, and Host On The Only Cloud Built For Gatsby](https://www.gatsbyjs.com/products/cloud/)

Gatsby Cloud is an end-to-end cloud platform specifically built for the Gatsby framework that combines a modern developer experience with an optimized, global edge network.

<!-- AUTO-GENERATED-CONTENT:END -->
