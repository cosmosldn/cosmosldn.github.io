Not much to see here ¯\\_(ツ)_/¯

This is the repo for the Wallop's documentation website.

If you're after wallop's documentation, check out **[wallop repo](https://github.com/peduarte/wallop)**

## About the site
This site is built with webpack and react.<br>
It uses [mdhtmljson](https://github.com/peduarte/mdhtmljson) to take a raw markdown file (in this case, I use the [README.md](https://raw.githubusercontent.com/peduarte/wallop/master/README.md) from wallops's repo) and return HTML.<br>
The reason for this, is so all the latest documentation is on the correct repo, and this just feeds off of it, making my life much easier.

## Get it running
```
npm install
```

## Run client
```
npm run dev
```
Client available on: **http://localhost:8080**<br>

## Updating docs
```
npm run mdhtmljson
```

## Deploying
I am using [ship](https://www.npmjs.com/package/ship) to deploy the build to Github Pages. But because I want the URL to be peduarte.github.io**/wallop** rather than **/wallop-site** (and I don't want to buy a custom domain for it), I deploy the build to the gh-pages branch of the [wallop repo](https://github.com/peduarte/wallop/tree/gh-pages). Refer to `ship.example.conf` to see the configuration.



