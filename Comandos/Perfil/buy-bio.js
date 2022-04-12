module.exports = ({
name: "buy-bio",
code: `
$description[$getVar[goodemoji] Listo $username, desde ahora puede personalizar tu biografía del embed de tu perfil con **.set-bio**]
$color[GREEN]
$footer[Desarrollado por AdirModz👑#6666 y _.jose.htz._#6666]

$setGlobalUserVar[biotienes;$getVar[goodemoji]]
$setGlobalUserVar[bioaccess;Activado]
$setGlobalUserVar[lanos;$sub[$getGlobalUserVar[lanos];10]]

$onlyIf[$getGlobalUserVar[lanos;$authorID]>=10;{description:$getVar[bademoji] **Hey $username, no tienes suficientes lanos, actualmente tienes $getGlobalUserVar[lanos] lanos y esta implementación cuesta 10 lanos.**}{color:RED}{footer: Desarrollado por AdirModz👑#6666 y _.jose.htz._#6666
}]

$onlyIf[$getGlobalUserVar[bioaccess]!=Activado;{description:$getVar[bademoji] **Hey $username, ¡ya has comprado esa implementación para tu perfil!**}{color:RED}{footer: Desarrollado por AdirModz👑#6666 y _.jose.htz._#6666
}]
`
})