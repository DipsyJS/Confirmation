# Confirmation
Permet de faire réagir plus rapidement le bot avec des réactions

```JS
// desctructuration
const { confirmation } = require("__direname");
message.channel.send("Confirmation for banning members").then(async (msg) => {
    // parameters used(which msg to react on, who can acess it, reactions, time(optional))
    const emoji = await confirmation(msg, message.author, ["✅", "❌"], 30000);
    if (emoji === "✅") {
    }
    if (emoji === "❌") {
        msg.delete();
    }
});
```
