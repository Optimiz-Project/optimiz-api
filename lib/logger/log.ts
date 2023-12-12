import getLogger from "./logBuilder";

export async function logInfo(message: string): Promise<void> {
  const logger = getLogger();
  logger.info(message);
}

export async function logWarning(message: string): Promise<void> {
  const logger = getLogger();
  logger.warn(message);
}

export async function logError(message: string): Promise<void> {
  const logger = getLogger();
  logger.error(message);
}

export async function logDebug(message: string): Promise<void> {
  const logger = getLogger();
  logger.debug(message);
}
