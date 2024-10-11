# makefile, the pathname of this makefile e.g. 'Makefile'
makefile := $(lastword $(MAKEFILE_LIST))
# here, the directory of $(makefile)
here := $(shell dirname $(realpath $(makefile)))
# PROOT, the top of this project. This makefile assumes it's 3 directories up.
# Use -e PROOT=some/path to override this.
PROOT := $(shell realpath $(here)/../../..)
# Commands to check for. Unfortunately bootstrapping requires some of these.
# The `check` target will check for these.
cmds := node npm tsc webstorm bun deno gjs just awk gpp	realpath ln curl

# Adds very generic targets `targets`, `variables` and `check`
include $(makefile).mk
.PSEUDO: bootstrap clean

bootstrap:
	@echo $@ed >&2

clean:
	@echo $@ed >&2





