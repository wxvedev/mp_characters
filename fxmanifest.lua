fx_version "cerulean"
game "gta5"

author "wxvedev"
description "mp_characters"
version "1.0.0"

ui_page "web/dist/index.html"
files {
    "web/dist/index.html",
    "web/dist/assets/**"
}

server_scripts {
    "resource/build/server/server.js",
}

client_scripts {
    "resource/build/client/client.js",
}
