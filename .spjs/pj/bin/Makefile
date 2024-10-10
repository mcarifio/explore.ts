# pathname of this makefile e.g. 'Makefile'
makefile := $(lastword $(MAKEFILE_LIST))
# directory of $(makefile)
here := $(shell dirname $(realpath $(makefile)))
# PROOT, top of this project
PROOT ?= $(shell $(realpath $(here)/../../))
# commands to check for
cmds := node npm tsc webstorm bun deno gjs just awk gpp	realpath lna

include $(makefile).mk

.PSEUDO: bootstrap
bootstrap: generate lift
	@echo $@ >&2

# lift pertinent config files from here to project root
lifted := $(PROOT)/.gitignore
lift: $(lifted)
$(PROOT)/.gitignore : $(here)/.gitignore
	ln -sr $< $@ || true

# generate some configuration files from parts, e.g. gitignore.d
generated := $(here)/.gitignore
generate: $(generated)

# TODO mike@carif.io: feels like overkill
# $(here)/.gitignore : $(call rwildcard, $(here)/../gitignore.d, *.gitignore)
# 	echo "# $$(basename $@) generated with make -f $$(realpath --relative-to=$(PROOT) $(makefile)) generate $@" > $@
# 	for f in $^; do echo "# $$(realpath --relative-to=$(PROOT) $$f)" >> $@; gpp $$f >> $@; prinf "\n\n"; done

$(here)/.gitignore:
	[[ -r $@ ]] && xzcat $@ > $@-$(date +'%s').xz
	curl --silent --no-progress-bar --show-error --location -o $@ https://www.toptal.com/developers/gitignore/api/bash,git,linux,node,deno,bun,javascript,ecmascript,typescript


