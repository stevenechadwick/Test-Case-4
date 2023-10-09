import { SecretsManager } from "aws-sdk";
import { IDiscordSecrets } from "../types";
import { discordBotAPIKeyName } from "../constants/EnvironmentProps";

// Taken from https://github.com/GEMISIS/discord-bot-cdk-construct/blob/main/src/functions/utils/DiscordSecrets.ts

const secretsManager = new SecretsManager();

/**
 * Cached Discord secrets so we can reduce warm start times.
 */
let discordSecrets: IDiscordSecrets | undefined = undefined;

/**
 * Gets the Discord secrets (public key, client ID, etc.) for use in our lambdas.
 *
 * @return {Promise<IDiscordSecrets | undefined>} The Discord secrets to be used.
 */
export async function getDiscordSecrets(): Promise<
  IDiscordSecrets | undefined
> {
  if (!discordSecrets) {
    try {
      const discordApiKeys = await secretsManager
        .getSecretValue({
          SecretId: discordBotAPIKeyName,
        })
        .promise();
      if (discordApiKeys.SecretString) {
        discordSecrets = JSON.parse(discordApiKeys.SecretString);
      }
    } catch (exception) {
      console.log(`Unable to get Discord secrets: ${exception}`);
    }
  }
  return discordSecrets;
}
