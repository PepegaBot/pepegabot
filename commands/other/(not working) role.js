//module.exports = ({
name: "role",
aliases: ['create-role', 'createrole'],
code: `$log[role от $userTag: $noMentionMessage]
Создал <@&$getObjectProperty[role]> $customEmoji[Okayg]
$giveRoles[$mentioned[1];$getObjectProperty[role]]
$addObjectProperty[role;$findRole[$getObjectProperty[name]]]
$createRole[$getObjectProperty[name];$noMentionMessage[1];no;$sub[$rolePosition[815925339711864862];1]]
$addObjectProperty[name;$replaceText[$noMentionMessage;$noMentionMessage[1] $noMentionMessage[2];;1]]
$createObject[{}]
$argsCheck[>3;Для создания роли и выдачи её кому-то, используйте \`\`\`\n$getServerVar[prefix]role HEX-цвет @Юзер Имя роли\n\`\`\`Например: \`\`\`\n$getServerVar[prefix]role $getRoleColor[$highestRole] @$username Имя.\n\`\`\`]
$onlyIf[$hasRoles[$authorID;821236913725243412]==true;Только для модеров]
`})