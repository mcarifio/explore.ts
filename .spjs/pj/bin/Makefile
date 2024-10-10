# pathname of this makefile e.g. 'Makefile'
makefile := $(lastword $(MAKEFILE_LIST))
# directory of $(makefile)
here := $(shell dirname $(realpath $(makefile)))
# PROOT, top of this project
PROOT ?= $(shell $(realpath $(here)/../../))
# commands to check for
cmds := node npm tsc webstorm bun deno gjs just awk gpp	

include $(makefile).mk

.PSEUDO: bootstrap
bootstrap: lift
	@echo $@ >&2

# lift pertinent config files from here to project root
LIFTED := $(PROOT)/.gitignore
lift: $(LIFTED)

# .gitignore
# generate $(here)/.gitignore from parts of gitignore.d then link $(PROOT) to that.
$(PROOT)/.gitignore: $(here)/.gitignore
	cp $< $@


$(here)/.gitignore : $(call rwildcard, $(here)/../gitignore.d, *.gitignore)
	echo "# $$(realpath --relative-to=$(PROOT) $@) generated with make -f $(makefile) $@" > $@
	for f in $< $^; do echo "# $$(realpath --relative-to=$(PROOT) $$f)" >> $@; gpp $$f >> $@; done
