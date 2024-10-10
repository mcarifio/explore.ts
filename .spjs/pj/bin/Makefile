# pathname of this makefile e.g. 'Makefile'
makefile := $(lastword $(MAKEFILE_LIST))
# directory of $(makefile)
here := $(shell dirname $(realpath $(makefile)))
# PROOT, top of this project
PROOT := $(shell realpath $(here)/../../..)
# commands to check for
cmds := node npm tsc webstorm bun deno gjs just awk gpp	realpath ln

include $(makefile).mk
.PSEUDO: bootstrap generate lift clean

bootstrap: generate lift

# lift pertinent config files from here to project root
lifted := $(PROOT)/.gitignore
lift: $(lifted)
$(PROOT)/.gitignore: $(here)/.gitignore
	ln -sr $< $@


generate: $(here)/.gitignore
$(here)/.gitignore: 
	curl --silent --no-progress-bar --show-error --location -o $@ https://www.toptal.com/developers/gitignore/api/bash,git,linux,node,deno,bun,javascript,ecmascript,typescript

clean: $(lifted)
	unlink $<
	xz --force $(here)/.gitignore
	echo "make -f $(makefile) bootstrap ## next" >&2





