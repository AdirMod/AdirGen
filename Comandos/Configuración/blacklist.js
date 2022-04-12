module.exports = ({
name: "blacklist",
code: `
$description[
$getVar[goodemoji] ¡El usuario <@$findUser[$message]> ha sido vetado de usar el generador del bot en este servidor por $username! ]
$color[GREEN]

$setGlobalUserVar[blacklistpublico;Blacklisteado;$findUser[$message]]

$onlyIf[$getGlobalUserVar[blacklistpublico;$findUser[$message]]!=Blacklisteado;{color: #FF0000}{description: $getVar[bademoji] $username, $username[$findUser[$message]] ya está blacklisteado en este servidor.}]

$onlyIf[$findUser[$message]!=$authorID;{description:$getVar[bademoji] **$username, debes mencionar a la persona que quieres blacklistear.**}{color:RED}{footer: Desarrollado por HuguitisYT}]

$argsCheck[>1;{color: #FF0000}{description: $getVar[bademoji] $username, necesitas mencionar a alguien para blacklistearle del generador.}]

$onlyIf[$getGlobalUserVar[blackaccess]!=Desactivado;{description:$getVar[bademoji] **Hey $username, primero debes comprar por lanos esta implementación. Puedes usar .shop o .buy-(item) para comprarlo.**}{color:RED}{footer: Desarrollado por AdirModz👑#6666
}]

$onlyPerms[admin;{color: #FF0000}{description: $getVar[bademoji] $username, necesitas administrador para poder hacer eso.}]`
})