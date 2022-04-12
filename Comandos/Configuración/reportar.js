module.exports = ({
name: "reportar",
aliases: ["report"],
code: `
$channelsendmessage[$getVar[logschannel];
**Usuario reportado:** $username[$findUser[$message]]#$discriminator[$findUser[$message]] ($findUser[$message])
**Reportado por:** $username#$discriminator ($authorID)
**Razón:** $noMentionMessage]

$description[$getVar[goodemoji] $username has reportado correctamente al usuario **$username[$findUser[$message]]#$discriminator[$findUser[$message]] ($findUser[$message])** por el mal uso del bot, recibiras un mensaje privado cuando lo hayamos revisado.] 
$color[GREEN]
$footer[Desarrollado por AdirModz👑#6666
]

$cooldown[10m;{description:$getVar[bademoji] **Hey $username, debes esperar %time% antes de volver a reportar a alguien.**}{color:RED}{footer: Desarrollado por AdirModz👑#6666
}]

$onlyIf[$findUser[$message]!=$authorID;{description:$getVar[bademoji] **$username, debes mencionar a la persona que quieres reportar.**}{color:RED}{footer: Desarrollado por AdirModz👑#6666
}]

$onlyIf[$userExists[$findUser[$message]]!=false;{description:$getVar[bademoji] **Hey $username, el usuario que indicastes no existe.**}{color:RED}{footer: Desarrollado por AdirModz👑#6666
}]

$argsCheck[>2;{description:$getVar[bademoji] **Uso incorrecto.** 
**Ejemplo válido:** .reportar @huguitis Utilizando selfbot para generar cuentas en el bot. Prueba: https://imagendelaspruebas.jpg
**Porfavor indica el link de una captura de la prueba de tu reporte, si reportas sin motivo recibirás un aviso.**
}{color:RED}{footer: Desarrollado por AdirModz👑#6666
}]
`
})