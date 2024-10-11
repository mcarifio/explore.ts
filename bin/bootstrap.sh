#!/usr/bin/env bash
set -Eeuo pipefail; shopt -s nullglob

declare -g _top="$(realpath -Lm $(dirname $0)/..)"
declare -g _subtrees="${_top}/subtrees"

subtree.add() (
    local _url=${1:?"${FUNCNAME} expecting a url"}
    local _remote=$(basename ${_url} .git)
    local _branch=${2:-main}
    
    [[ -z "${_remote}" ]] && { echo "no remote name found for ${_url}" >&2; return 1; }
    git remote get-url ${_remote} &> /dev/null && git remote set-url ${_remote} "${_url}" || git remote add "${_remote}" "${_url}"    
    git subtree add --prefix="${_subtrees}/${_remote}" ${_remote} ${_branch} --squash    
)

subtree.pull() (
    local _remote=${1:?"${FUNCNAME} expecting a remote"}
    local _branch=${2:-main}

    git subtree pull --prefix="${_subtrees}/${_remote}" ${_remote} ${_branch} --squash
)

subtrees() (
    for _url in "$@"; do
        [[ "${_url}" =~ ([^@]+)(@(.+))? ]] || { echo "${_url} subtree skipped." >&2; break; }
        subtree.add "${_url}" "${BASH_REMATCH[3]}"
        subtree.pull $(basename "${_url}" .git) "${BASH_REMATCH[3]}"
    done
    printf '\n\nsubtrees created: '; find ${_subtrees} -mindepth 1 -maxdepth 1 -type d
)

main() (
    subtrees "${@:-}"
    type -p direnv &> /dev/null || return 0
    ln -sr ${_subtrees}/pj/bin/.envrc "${_top}/.envrc"
    direnv allow
)

main gh:mcarifio/pj.git

