module.exports = ({
name: "claim-daily",
aliases: ["claimdaily"],
code: `
$description[$getVar[goodemoji] **Listo $username, ¡has reclamado 100 lanos de la recompensa diaria! Ahora tienes $getGlobalUserVar[lanos] lanos en total.**] 
$color[GREEN]
$footer[Desarrollado por AdirModz👑#6666 y _.jose.htz._#6666]

$wait[1s]

$setGlobalUserVar[lanos;$sum[$getGlobalUserVar[lanos];100]]

$cooldown[24h;{description:$getVar[bademoji] **Hey $username, debes esperar %time% antes de volver a reclamar la recompensa diaria.**}{color:RED}{footer: Desarrollado por AdirModz👑#6666 y _.jose.htz._#6666
}]


`
})