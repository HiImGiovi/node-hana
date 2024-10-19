import { MessageType } from "../types.js";
/**
 * Returns true if the input is a valid {@link MessageType}.
 * @param {number} value A numeric value which identifies the message type.
 * @returns
 */
function isValidMessageType(value) {
  return Object.values(MessageType).includes(value);
}

/**
 * Create Command Options configuration.
 * @param  {...import("../types.js").CommandOption} options
 * @returns Command Options configuration.
 */
function createCommandOptions(...options) {
  return options.reduce((acc, option) => acc | option, 0);
}

function isCommandOptionEnabled(value, option) {
  return (value & option) !== 0;
}

export { isValidMessageType, createCommandOptions, isCommandOptionEnabled };
