#!/usr/bin/env bash
set -Eeuo pipefail; shopt -s nullglob

declare -g _top="$(realpath -Lm $(dirname $0)/..)"
declare -g _subtree="subtree"

subtree.add() (
    local _url=${1:?"${FUNCNAME} expecting a url"}
    local _remote=$(basename ${_url} .git)
    local _branch=${2:-main}
    local _prefix=${3:-${_subtree}}
    local _location="${_prefix}/${_remote}"
    
    [[ -z "${_remote}" ]] && { echo "no remote name found for ${_url}" >&2; return 1; }
    git remote get-url ${_remote} &> /dev/null && git remote remove ${_remote}
    git remote add --fetch "${_remote}" "${_url}"
    # git remote set-url --delete "${_remote}" "${_url}"
    # [[ -d "${_top}/${_location}" ]] && mv -v "${_top}/${_location}" /tmp
    git subtree add --prefix="${_location}" ${_remote} ${_branch} --squash    
)

subtree.pull() (
    local _remote=${1:?"${FUNCNAME} expecting a remote"}
    local _branch=${2:-main}
    local _prefix=${3:-${_subtree}}
    local _location="${_prefix}/${_remote}"
    git subtree pull --prefix="${_location}" ${_remote} ${_branch} --squash
)

subtrees() (
    local _prefix="${1:-${_subtree}}"; shift
    for _url in "$@"; do
        [[ "${_url}" =~ ([^@]+)(@(.+))? ]] || { echo "${_url} subtree skipped." >&2; break; }
        subtree.add "${_url}" "${BASH_REMATCH[3]}" ${_prefix}
        subtree.pull $(basename "${_url}" .git) "${BASH_REMATCH[3]}" ${_prefix}
    done
)

main() (
    local _prefix="${1:-${_subtree}}"; shift
    subtrees "${_prefix}" "${@:-}"
    type -p direnv &> /dev/null || return 0
    cp -v ${_prefix}/pj/bin/.envrc "${_top}/"
    direnv allow
    grep -s -E "^${_prefix}" ${_top}/.gitignore && return 0
    printf "\n\n# $0 added\n${_prefix}/" >> ${_top}/.gitignore
    git commit -m "$0 modified ${_top}/.gitignore" ${_top}/.gitignore
)

main "${_subtree}" gh:mcarifio/pj.git

