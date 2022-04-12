module.exports = ({
name: "set-color",
aliases: ["setcolor"],
code: `
$description[$getVar[goodemoji] Listo $username, he actualizado el color de tu perfil a **$getGlobalUserVar[embedcolor]**]
$color[$getGlobalUserVar[embedcolor]]
$footer[Desarrollado por AdirModz👑#6666 y _.jose.htz._#6666
]

$wait[1s]

$setGlobalUserVar[embedcolor;$message]

$cooldown[15s;{description:$getVar[bademoji] **Hey $username, debes esperar %time% antes de volver a ejecutar el comando.**}{color:RED}{footer: Desarrollado por AdirModz👑#6666 y _.jose.htz._#6666
}]

$onlyIf[$isValidHex[$message]!=false;{description:$getVar[bademoji] **Hey $username, el color que indicaste no es válido, recuerda que debe estar en hex, ejemplo: 78b5b8**}{color:RED}{footer: Desarrollado por AdirModz👑#6666 y _.jose.htz._#6666
}]

$argsCheck[>1;{description:$getVar[bademoji] **Hey $username, debes indicar el color para tu perfil en hex después del comando.**}{color:RED}{footer: Desarrollado por AdirModz👑#6666 y _.jose.htz._#6666
}]

$onlyIf[$getGlobalUserVar[coloraccess]!=Desactivado;{description:$getVar[bademoji] **Hey $username, primero debes comprar por lanos esta implementación para tu perfil. Puedes usar .shop o .buy-(item) para comprarlo.**}{color:RED}{footer: Desarrollado por AdirModz👑#6666 y _.jose.htz._#6666
}]

`
})