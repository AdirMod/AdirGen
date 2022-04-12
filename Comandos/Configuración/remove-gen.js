module.exports = ({
name: "remove-gen", 
code: `
$description[$getVar[goodemoji] Listo $username, he desabilitado el generador en este servidor.]
$color[GREEN]
$footer[Desarrollado por AdirModz👑#6666
]

$resetServerVar[genchannel]

$cooldown[15s;{description:$getVar[bademoji] **Hey $username, debes esperar %time% antes de volver a ejecutar el comando.**}{color:RED}{footer: Desarrollado por AdirModz👑#6666
}]

$onlyIf[$getServerVar[genchannel]!=Sin especificar;{description:$getVar[bademoji] **Hey $username, el generador ya está desabilitado en este servidor.**}{color:RED}{footer: Desarrollado por AdirModz👑#6666
}]

$onlyBotPerms[admin;{color:RED}{footer: Desarrollado por AdirModz👑#6666
}{description: $getVar[bademoji] **Hey $username, necesito administrador en el servidor para poder hacer eso.**}]

$onlyPerms[managechannels;{color:RED}{footer: Desarrollado por AdirModz👑#6666
}{description: $getVar[bademoji] **Hey $username, debes tener el permiso de configurar canales para ppder usar eso.**}]
`
})