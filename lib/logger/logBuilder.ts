import winston from "winston";

let logger: winston.Logger | null = null;

export default function getLogger() {
  if (!logger) {
    logger = winston.createLogger({
      format: winston.format.combine(
        winston.format.simple(),
        winston.format.colorize()
      ),
      transports: new winston.transports.Console({
        format: winston.format.printf((info) => {
          const date = new Date();
          const log = `[${info.level}] ${date.toISOString()} ~ ${info.message}`
          return log;
        })
      })
    })
  }

  return logger;
}
