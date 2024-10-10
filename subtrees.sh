#!/usr/bin/env bash
set -Eeuo pipefail; shopt -s nullglob
declare -g _prefix="$(realpath -Lm $(dirname "$0"))/.subtrees"

subtree.add() (
    local _url=${1:?"${FUNCNAME} expecting a url"}
    local _remote=$(basename ${_url} .git)
    local _prefix=${2:?"${FUNCNAME} expecting a directory"}
    local _branch=${3:-}
    
    [[ -z "${_remote}" ]] && { echo "no remote name found for ${_url}" >&2; return 1; }
    git remote get-url ${_remote} &> /dev/null && git remote set-url ${_remote} "${_url}" || git remote add "${_remote}" "${_url}"    
    git subtree add --prefix="${_prefix}" ${_remote} ${_branch} --squash    
)

subtree.pull() (
    local _remote=${1:?"${FUNCNAME} expecting a remote"}
    local _prefix=${2:?"${FUNCNAME} expecting a directory"}
    local _branch=${3:-}
    git subtree pull --prefix="${_prefix}" ${_remote} ${_branch} --squash
)

subtrees() (
    for _url in "$@"; do
        [[ "${_url}" =~ ([^@]+)(@(.+))? ]] || { echo "${_url} subtree skipped." >&2; break; }
        subtree.add "${_url}" "${_prefix}" "${BASH_REMATCH[3]}"
        subtree.pull $(basename "${_url}" .git) "${_prefix}" "${BASH_REMATCH[3]}"
    done    
)

subtrees gh:mcarifio/pj.git
