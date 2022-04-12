module.exports = ({
name: "set-imagen",
aliases: ["setphoto"],
code: `
$description[$getVar[goodemoji] Listo $username, he actualizado tu fondo a:]
$image[$getGlobalUserVar[fondo]]
$color[GREEN]
$footer[Desarrollado por AdirModz👑#6666 y _.jose.htz._#6666]

$wait[1s]

$setGlobalUserVar[fondo;$message]

$deletecommand

$cooldown[15s;{description:$getVar[bademoji] **Hey $username, debes esperar %time% antes de volver a ejecutar el comando.**}{color:RED}{footer: Desarrollado por AdirModz👑#6666 y _.jose.htz._#6666
}]

$onlyIf[$checkContains[$message;.gif;.png;.jpg;https://;http://]!=false;{description:$getVar[bademoji] **Hey $username, el link de la foto que indicaste no es válido, recuerda que debe acabar en .gif, .png o .jpg**}{color:RED}{footer: Desarrollado por AdirModz👑#6666 y _.jose.htz._#6666
}]

$onlyIf[$charCount[$message]<1000;{description:$getVar[bademoji] **Hey $username, ¡ese link es demasiado largo! **}{color:RED}{footer: Desarrollado por AdirModz👑#6666 y _.jose.htz._#6666
}]

$argsCheck[>1;{description:$getVar[bademoji] **Hey $username, debes indicar el link de la foto de tu nuevo fondo después del comando, recuerda que debe acabar en .gif, .png o .jpg**}{color:RED}{footer: Desarrollado por AdirModz👑#6666 y _.jose.htz._#6666
}]

$onlyIf[$getGlobalUserVar[fondoaccess]!=Desactivado;{description:$getVar[bademoji] **Hey $username, primero debes comprar por lanos esta implementación para tu perfil. Puedes usar .shop o .buy-(item) para comprarlo.**}{color:RED}{footer: Desarrollado por AdirModz👑#6666 y _.jose.htz._#6666
}]

`
})