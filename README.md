# My React Bootstrap

Generated (latest 17.4.2019) with React + Typescript using CRA: `create-react-app my-app --typescript`.

## Requirements

Requires Node >= 8, yarn installed globally.

## How to install

1) Clone & run `yarn`
2) Start the app with: `yarn start`

## Building and running this using Docker

You must have Docker or Docker Toolbox installed. Then you can run `./build.sh` to build the image using current sources and tagging it with the most recent tag. If there's already an image with the same name and tag it's removed before building.

After you've committed some new fancy features and would like to update your Docker Compose and Kubernetes stacks you can tag the current commit with `git tag 1.5.1`. Now you should update the old tag from the `docker-compose.yml` and `k8s-templates`. Not very efficient way to do it, I know. But this just experimental setup.

To run the latest image simply run `./run.sh`. It will grep the top-most image in the `docker images` list and expose it to the currently specified local port (8800 as of now).

There's a set of utility functions for helping to manage the images that you can load to your terminal session with: `. functions.sh`. Currently there's the following methods:

* `rm-containers <grepped-string>` eg. `rm-containers teemukoivisto` will first stop all the running containers with specified string in their name and then remove them.
* `rm-images <grepped-string>`  eg. `rm-images react` will do the same thing as `rm-containers` but also delete all their images.

## TODO

* Fix Toaster. Not closing them after timeout expires (progress bar finishes) as it should.
* Make dropdown list items buttons for triggering onClick-event with enter. BUT remember that there's some stupid bug with outlines that causes them to overlap when buttons are next to each other with `position: absolute` in the parent element.
* Fix Dropdown generics.
* Use focus trap with eg modals, maybe. I don't know. Is aria-compatibility that big of a deal?
* Invent a color palette.
* Example form for adding/updating/deleting items.
* Add local or sessionStorage.
* Github pages deployment.
* Manifest JSON customization.
* Go through the whole AWS deployment pipeline once more...

## Git commands

* `git tag -l` will list all the tags.
* `git push origin <local-branch>:<target-branch> --follow-tags` will push the branch with tags.
* `git push --tags` will also push the current branch to the same branch in upstream.
* `git tag --delete <tagname>` will delete the tag locally.
* `git push origin :<tagname>` will delete the tag in the remote.