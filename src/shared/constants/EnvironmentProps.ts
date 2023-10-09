// From https://github.com/GEMISIS/discord-bot-cdk-construct/blob/main/src/functions/constants/EnvironmentProps.ts

/**
 * The name of the secret key to retrieve.
 */
export const discordBotAPIKeyName =
  process.env.DISCORD_BOT_API_KEY_NAME ?? "apiKeyName";
/**
 * The ARN for the Discord command lambda.
 */
export const commandLambdaARN =
  process.env.COMMAND_LAMBDA_ARN ?? "commandLambdaARN";
