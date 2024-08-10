---
sidebar_position: 6
---

## 👉 Commands

### Registering Commands
1. Create an `.env` file in the root directory of the project. Do not upload this file to github, it contains secrets.
2. Make sure these environmental variables are in your `.env` file.
   1. `TOKEN=<your discord bot token>`
   2. `ID=<your discord bot ID>`
3. Enter new commands in this format, with each one on a new line in the file `commands/discord_commands.yaml`
```
- name: <name of your command>
  description: <command description>
  options:
    - name: <parameter 1>
      description: <parameter description>
      type: 3 # string
      required: true
    - name: <parameter 2>
      description: <parameter 2 description>
      type: 3 # string
      required: true
```
1. From your root directory, run `python3 register_commands.py`
2. You should receive the status `201` or `200` printing out in your terminal.

### Defining Commands
1. Commands can be defined in the file `src/app/main.py`
2. You can register commands in the `interact` function by adding more `elif` statements. 
   1. The parameters of the command that are received from the user is in encoded in the variable `data`. The statement `data["options"][n]["value"]` will extract the argument `n`.   
   2. The message that the bot returns to the user is specified in the string variable `message_content`. It is crucial that `message_content` is a string.
   3. Following the example of the `/weather` command, you may choose to call an external function that returns a string for better code readability.