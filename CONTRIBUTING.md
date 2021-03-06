# Contributing

Like most open source projects, we ask that you fork the project and issue a [pull request](#pull-requests) with your changes.

We encourage small change pull requests, the smaller the change the quicker and easier it is merged.

## Dependencies

To build the Skycons locally, you'll need to install:
 * [node.js](http://nodejs.org),
 * [Gulp](http://gulpjs.com),


## Workflow

1. Fork the project
2. Clone your fork
`git clone git://github.com/<username>/skycons.git`
3. Setup your 'upstream'
`git remote add upstream https://github.com/skyglobal/skycons.git`
4. Create a feature branch to contain your change
`git checkout -b feature-my-feature`
5. Place any new icons into [src/icons](/src/icons)
6. Make sure [CHANGELOG.md](./CHANGELOG.md) includes a summary of your changes in a new version number heading
7. Make sure you are still up to date with master
`git pull upstream master`
8. If necessary, rebase your commits into logical chunks, without errors.
9. Push the branch up 
`git push origin my-awesome-feature`
10. Create a pull request and describe what your change does and the why you think it should be merged.

## Optimising svg images

You can run your svg icons through the online service provided by https://icomoon.io/

1. Got https://icomoon.io/app/
2. Select 'Import Icons' and upload the svg icons you want to optimise
3. Select the edit tool in the toolbar (the little pen)
4. Then click on your icon that should appear at the top in the 'Untitled Set'
5. Click on 'Download'. This will download an already optimised svg icon to your computer.

## Running Locally

 * `gulp serve` :  Run the server on port 3456
 
## Releasing (admin only)

`gulp release`

This will automatically bump the 'patch' section of the version number.  

To bump a different area of the version number you can also use `major|minor|patch|prerelease` e.g. :

`gulp release --version prerelease`

## Common Errors

**`S3::putObject *** error!`** or **`UnknownEndpoint: Inaccessible host: `**

This happens whn a connection to the S3 failed to establish. `bump` and `gh-pages` would have already executed.  Please try the release to cloud only by running:

`component release cloud`
