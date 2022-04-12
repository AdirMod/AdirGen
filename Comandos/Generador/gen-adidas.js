module.exports = ({
name: "gen-adidas", 
code: `
$channelSendMessage[$getVar[logschannel];{description: **$username#$discriminator ($authorID)** ha generado una cuenta de adidas en el servidor **"$serverName"** En total ha generado $getGlobalUserVar[usergencount] cuentas}{color:GREEN}]

$wait[1s]

$setGlobalUserVar[usergencount;$sum[$getGlobalUserVar[usergencount];1]]
$setGlobalUserVar[lanos;$sum[$getGlobalUserVar[lanos];10]]

$sendMessage[{description: $getVar[goodemoji] **Generada correctamente, revisa tus mensajes directos.**}{color:GREEN}{footer: Desarrollado por AdirModz👑#6666
};no]

$sendDM[$authorID;{description: 
**(Nota: puede que algunas cuentas no funcionen)**
**¡Se han añadido 10 lanos a tu saldo del bot!**

**Aquí está tu cuenta:** $randomText[$readFile[./Cuentas/cuentas-adidas.txt]]
**Tipo:** Adidas
}{color:GREEN}{footer: Desarrollado por AdirModz👑#6666
}]

$wait[4s]

$sendMessage[{description:**Generando una cuenta de Adidas...**}{color:#ffff00}{footer: Desarrollado por AdirModz👑#6666
}{delete:4s};no]

$complexCooldown[user;3m;{description:$getVar[bademoji] **Hey $username, debes esperar %time% antes de volver a ejecutar el comando.**}{color:RED}{footer: Desarrollado por AdirModz👑#6666
}]

$onlyIf[$isUserDMEnabled!=false;{description:$getVar[bademoji] **Hey $username, parece ser que tu cuenta no puede recibir mensajes privados de otros, cambia este ajuste en la configuración de Discord y vuelve a intentarlo.**}{color:RED}{footer: Desarrollado por AdirModz👑#6666
}]

$onlyForChannels[$getServerVar[genchannel];{footer: Desarrollado por AdirModz👑#6666
}{color:RED}{description: $getVar[bademoji] **Hey $username, solo puedes usar el generador en <#$getServerVar[genchannel]>**}]

$onlyIf[$getServerVar[genchannel]!=Sin especificar;{description:$getVar[bademoji] **Hey $username, el generador no está configurado en el servidor, para ello tienes que especificar un canal en el servidor donde se ejecutarán los comandos, usa .setgen-channel para esto.**}{color:RED}{footer: Desarrollado por AdirModz👑#6666
}]

$onlyIf[$getGlobalUserVar[blacklistpublico;$authorID]==No Blacklisteado;{color:RED}{description: $getVar[bademoji] **No puedes usar el generador en este servidor, debido a que algún administrador te quitó acceso de este.**}]

$onlyIf[$getGlobalUserVar[blacklist;$authorID]==No Blacklisteado;{color:RED}{description: $getVar[bademoji] **No puedes usar el generador porque estas en la blacklist del bot debido a que incumpliste las normas o hiciste un mal uso de este.}]

`
})