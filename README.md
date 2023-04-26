<!-- Improved compatibility of back to top link: See: https://github.com/jcsj89/api-santana/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the api-santana. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/jcsj89/api-santana">
    <img src="public/images/nodedotjs.svg" alt="Logo" width="80" height="80" style="padding: 0px 10px">
    <img src="public/images/postgresql.svg" alt="Logo" width="80" height="80" style="padding: 0px 10px">
    <img src="public/images/typescript.svg" alt="Logo" width="80" height="80" style="padding: 0px 10px">
    <img src="public/images/javascript.svg" alt="Logo" width="80" height="80" style="padding: 0px 10px">
  </a>

  <h2 align="center" style="color: #FC4F00">API SANTANA</h2>

  <p align="center">
    A real project with knowledge objective!
    <br />
    <a href="https://github.com/jcsj89/api-santana"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/jcsj89/api-santana">View Demo</a>
    ·
    <a href="https://github.com/jcsj89/api-santana/issues">Report Bug</a>
    ·
    <a href="https://github.com/jcsj89/api-santana/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This project consists of an REST API that uses **JSON Web Tokens** to authenticate users and uses the **MVC pattern** in its structure, but with a small modification, we just added a **service layer** where the business logic is, we treated each service separately, making it easier to maintain the code and understand it.

- RESTful API - <https://aws.amazon.com/what-is/restful-api/> and <https://www.ibm.com/topics/rest-apis>
- JSON Web Token - <https://jwt.io/>
- MVC Pattern - <https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller>

[![MVC Pattern][mvc-arq]](https://devnotes.com)

## Folder Structure

The folder structure was designed to leave each module isolated to facilitate maintenance and future scalability of the application, however within each module contains the CONTROLLER, DATA MODEL, ROUTES AND SERVICES.

Exemple user folder:

- user
  - controller
    - UserController.ts
  - model
    - UserModel.ts
  - routes
    - user.routes.ts
  - services
    - CreateUserService.ts
    - DeleteUserService.ts
    - ListUserService.ts
    - UpdateUserService.ts

[![Product Name Screen Shot][product-screenshot]](https://devnotes.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
<br/>

## Built With

Some technologies we used to build the project.

- Node - <https://nodejs.org/en>
- Express - <https://expressjs.com/>
- TypeScript - <https://www.typescriptlang.org/>
- Knex - <https://knexjs.org/>
- Postgres - <https://www.postgresql.org/>

<p align="right">(<a href="#readme-top">back to top</a>)</p>
<br/>

<!-- ABOUT TECHNOLOGIES -->

### Node

This project was coded in [Node JS][node-url], which is a server-side [JavaScript][javascript-url] execution environment, not depending on the browser as we normally use [JavaScript][javascript-url] for the front-end, here we can create servers for static and dynamic websites, APIs and microservices based systems.

### Express

[Express][express-url] is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
With it we have the creation of routes, middleware, request handling, responses and errors in a consistent and simple way. The learning curve is not very big and [Express][express-url] is one of the most consolidated frameworks for Node JS.

### TypeScript

[TypeScript][typescript-url] is an open source programming language developed by Microsoft. It is a strict syntactic superset of [JavaScript][javascript-url] and adds optional static typing to the language and features that are not natively present in the language. Types provide a way to describe the form of an object, providing better documentation and allowing [TypeScript][typescript-url] to validate that your code is working correctly.

### Knex

[Knex][knex-url] is a query-builder built for Node.js that interacts with relational databases. [Knex][knex-url] is able to easily access and interact with the relational database of your application. Unlike Sequelize, which is an ORM, [Knex][knex-url] is just a query-builder.

### Postgres

[PostgreSQL][postgres-url] is a related database manager that greatly optimizes the work of anyone who needs to administer information at these levels. The tool is easy to install and practical to use, providing a number of advantages, especially with the use of extensions.

<br/>

<!-- USAGE EXAMPLES -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Jose Carlos Sant'Anna - [@your_twitter](https://twitter.com/your_username) - jcsj2010@gmail.com

Project Link: [https://github.com/jcsj89/api-santana](https://github.com/jcsj89/api-santana)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[node-js]: https://img.shields.io/badge/node.js-000?style=for-the-badge&logo=nodedotjs&logoColor=339933
[node-url]: https://nodejs.org
[javascript-url]: https://www.ecma-international.org
[express-url]: https://expressjs.com
[knex-url]: https://knexjs.org
[sequelize-url]: https://nodejs.org
[postgres-url]: https://www.postgresql.org
[typescript-url]: https://www.typescriptlang.org
[contributors-shield]: https://img.shields.io/github/contributors/jcsj89/api-santana.svg?style=for-the-badge
[contributors-url]: https://github.com/jcsj89/api-santana/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jcsj89/api-santana.svg?style=for-the-badge
[forks-url]: https://github.com/jcsj89/api-santana/network/members
[stars-shield]: https://img.shields.io/github/stars/jcsj89/api-santana.svg?style=for-the-badge
[stars-url]: https://github.com/jcsj89/api-santana/stargazers
[issues-shield]: https://img.shields.io/github/issues/jcsj89/api-santana.svg?style=for-the-badge
[issues-url]: https://github.com/jcsj89/api-santana/issues
[license-shield]: https://img.shields.io/github/license/jcsj89/api-santana.svg?style=for-the-badge
[license-url]: https://github.com/jcsj89/api-santana/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/josecarlossantanna
[product-screenshot]: public/images/screenshot.png
[mvc-arq]: public/images/MVC.jpg
