module.exports = ({
name: "give-lanos",
aliases: ["givelanos"],
code: `
$description[$getVar[goodemoji] **$username, ¡has dado $message[2] lanos a <@$findUser[$message]>!**] 
$color[GREEN]
$footer[Desarrollado por AdirModz👑#6666 y _.jose.htz._#6666
]

$setGlobalUserVar[lanos;$sum[$getGlobalUserVar[lanos;$findUser[$message]];$message[2]];$findUser[$message]]

$setGlobalUserVar[lanos;$sub[$getGlobalUserVar[lanos;$authorID];$message[2]];$authorID]

$onlyIf[$checkContains[$message[2];.;,]!=true;{description:$getVar[bademoji] **Hey $username, ¡no indiques puntos ni comas en el número de lanos!
Ejemplo: .give-lanos @huguitis 1000**}{color:RED}{footer: Desarrollado por AdirModz👑#6666 y _.jose.htz._#6666
}]

$onlyIf[$isNumber[$message[2]]!=false;{description:$getVar[bademoji] **Hey $username, debes indicar un número válido.
Ejemplo: .give-lanos @huguitis 100**}{color:RED}{footer: Desarrollado por AdirModz👑#6666 y _.jose.htz._#6666
}]

$onlyIf[$getGlobalUserVar[lanos;$authorID]>=$message[2];{description:$getVar[bademoji] **Hey $username, no tienes suficientes lanos, actualmente tienes $getGlobalUserVar[lanos] lanos.**}{color:RED}{footer: Desarrollado por AdirModz👑#6666 y _.jose.htz._#6666
}]

$argsCheck[>2;{description:$getVar[bademoji] **Hey $username, debes indicar el usuario y el número de lanos que quieres dar. Ejemplo: .give-lanos @huguitis 100**}{color:RED}{footer: Desarrollado por AdirModz👑#6666 y _.jose.htz._#6666
}]
`
})