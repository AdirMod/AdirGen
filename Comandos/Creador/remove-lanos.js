module.exports = ({
name: "remove-lanos",
aliases: ["removelanos"],
code: `
$description[$getVar[goodemoji] **Listo $username, ¡he retirado $message[2] lanos a <@$findUser[$message]>!**] 
$color[GREEN]
$footer[Desarrollado por AdirModz👑#6666
]

$setGlobalUserVar[lanos;$sub[$getGlobalUserVar[lanos;$findUser[$message]];$message[2]];$findUser[$message]]

$onlyForIDs[$getVar[ownerid];]
$argsCheck[>1;]
`
})