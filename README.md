![image](https://github.com/MugoBrian/a11y-checker-api/assets/49617104/7d86ec96-39c0-4bf5-ad87-9b70252a31de)# a11y-checker-api

This is project is the backend API server for the [mzima-a11y-checker](https://github.com/MugoBrian/mzima-a11y-checker) project

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Support and Contact](#support-and-contact)
- [Acknowledgments](#acknowledgments)

## Overview
This project serves as the foundational backend API server, forming a crucial component of the [mzima-a11y-checker](https://github.com/MugoBrian/mzima-a11y-checker) initiative. Its role is pivotal in facilitating the seamless functionality and operations of the mzima-a11y-checker project. Through this backend API server, data processing, communication, and other essential operations are orchestrated, enabling the overall effectiveness of the mzima-a11y-checker project's objectives.

## Installation

Instructions on how to install your project.
### Requirements
Node version > 18.x.x

To run the a11y-checker-api locally, follow these steps:

Clone the repository:

```git clone https://github.com/MugoBrian/a11y-checker-api.git```

Navigate to the server directory:

```cd a11y-checker-api```

Install dependencies:

```npm install```

Start the server:

```npm run serve```

#### Running 

Open the browser and navigate to :  http://localhost:3000

## Usage

Examples and instructions on how to use your project.

To execute various API Endpoints, you can utilize your preferred API client, such as Thunder Client or Postman.

Here are the available API Endpoints along with their associated HTTP methods:

**POST METHODS:**

1. The `/url` endpoint is designed to perform accessibility checks for website URLs.
2. The `/code` endpoint is utilized for carrying out accessibility checks on code.

You can initiate these checks using different accessibility testing tools as follows:

- **Running With Pa11y:**
  - Website URL: `http://localhost:3000/api/accessibility-check/pa11y/url`
  - Code: `http://localhost:3000/api/accessibility-check/pa11y/code`

- **Running With IBM Accessibility Checker:**
  - Website URL: `http://localhost:3000/api/accessibility-check/ibm/url`
  - Code: `http://localhost:3000/api/accessibility-check/ibm/code`

- **Running With Axe Dev Core:**
  - Website URL: `http://localhost:3000/api/accessibility-check/axe/url`
  - Code: `http://localhost:3000/api/accessibility-check/axe/code`

Feel free to choose the appropriate endpoint and testing tool based on your specific needs, and initiate the checks using your preferred API client, such as Thunder Client or Postman.

## Features

List of key features:
1. It has the capability to conduct accessibility checks on both HTML code and website URLs.
2. Additionally, it offers support for executing accessibility assessments using prominent libraries such as pa11y, axe-dev core, and the IBM Accessibility Checker.
   This functionality empowers the project to comprehensively evaluate and ensure accessibility standards across different dimensions.

## Support and Contact

How users can seek support or contact you for assistance.
Incase of any issues raising it in the Github Issues tab or contact [me](brianmuchirimugo@gmail.com)

## Acknowledgments

Credits to pa11y, axe-dev core and IBM Accessibility Checker libraries.


