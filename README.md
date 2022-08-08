# Site scaffold

This is a blank scaffold for a new site built with the CA Design System. It contains standard sets of components most sites might use including headers, footers, page feedback at the bottom of every page.

## Static site generation

This site uses the <a href="https://www.11ty.dev/">11ty static site generator</a> to output page templates from content files. This example repo uses markdown files for page bodies but can be hooked up to any CMS instead of using flat files in this repository. The 11ty SSG is an excellent tool because it can output many built pages quickly and does not include any code that needs to be delivered to your site visitors. 

## Builds

To run the site locally:

The first time you checkout the repository run ```npm install```.

Build and start a local server with a watch process that refreshes on local code changes with:

```
npm run dev
```

This same build process runs in a git action in the github repository and sends the built files to an AWS S3 bucket so that the site is hosted reliably at low cost.

The result of using the CA Design System components with a static site generator is a site with easy to manage content that delivers a fast loading, clean design to site visitors. When the site scaffold is audited using lighthouse from 

## Deploys

This repository contains a git action which deploys to AWS S3 in the .github/workflows directory. The site is browseable directly on the S3 bucket at: <a href="http://scaffold.innovation.ca.gov.s3-website-us-west-1.amazonaws.com/">http://scaffold.innovation.ca.gov.s3-website-us-west-1.amazonaws.com/</a>. If this were a production site we would also add AWS CloudFront as a CDN using the S3 bucket as the file source.

The git action runs the deploy process on any code change. The deploy process can be viewed in the <a href="https://github.com/cagov/odi-scaffold/actions">actions tab in this repo</a>