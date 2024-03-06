rwildcard=$(foreach d,$(wildcard $1*),$(call rwildcard,$d/,$2) $(filter $(subst *,%,$2),$d))
makefile := $(lastword $(MAKEFILE_LIST))
here := $(shell dirname $(realpath $(makefile)))

# The folder where .envrc and .gitignore are
TOP ?= $(here)/../..

.PHONY: gitignore
gitignore : $(TOP)/.gitignore
$(TOP)/.gitignore : $(call rwildcard, $(here)/../gitignore.d, *.gitignore)
	echo "# generated with make -f $(makefile) gitignore" > $@
	for f in $^; do echo "# $$(realpath --relative-to=$(TOP) $$f)" >> $@; gpp $$f >> $@; done
