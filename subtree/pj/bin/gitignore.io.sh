#!/usr/bin/env bash

curl --silent --no-progress-bar --show-error https://www.toptal.com/developers/gitignore/api/${1:-bash,git,linux,node,deno,bun,javascript,ecmascript,typescript}
