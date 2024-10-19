import { Buffer } from "buffer";
import { isValidMessageType } from "../../util/types.js";

/**
 *
 */
class RequestHeader {
  /**
   *
   * @param {object} header
   * @param {number} header.segmentLength Specifies the length of the segment, including the header.
   * @param {number} header.segmentOffs Specifies an offset of the segment within the message buffer
sequence number belong to one request/response pair.
   * @param {number} header.noOfParts Specifies the number of contained parts.
   * @param {number} header.segmentNo Specifies the segment number within the packet.
   * @param {number} header.segmentKind Specifies the segment kind, which further specLfies the layout of the remaining segment header structure.
   * @param {import("../../util/types.js").MessageType} header.messageType Specifies the action requested from the database server.
   * @param {number} header.commit Specifies a value indicating whether or not the command is committed
   * @param {number} header.commandOptions Defines specific options for the sent message.
   */
  constructor({
    segmentLength,
    segmentOffs,
    noOfParts,
    segmentNo,
    segmentKind,
    messageType,
    commit,
    commandOptions,
  }) {
    if (!isValidMessageType(messageType))
      throw new Error("Invalid message type:", messageType);
    this.segmentLength = segmentLength;
    this.segmentOffs = segmentOffs;
    this.noOfParts = noOfParts;
    this.segmentNo = segmentNo;
    this.segmentKind = segmentKind;
    this.messageType = messageType;
    this.commit = commit;
    this.commandOptions = commandOptions;
  }
  /**
   * Creates a buffer of 24 bytes as describe in the protocol specification.
   * @returns {Buffer} A buffer representing the segment request header.
   */
  toBuffer() {
    // allocating 24 bytes because last 9 bytes are reserved
    const buffer = Buffer.alloc(24);

    buffer.writeInt32LE(this.segmentLength, 0); // 4 bytes
    buffer.writeInt32LE(this.segmentOffs, 4); // 4 bytes
    buffer.writeInt8(this.noOfParts, 8); // 2 bytes
    buffer.writeInt8(this.segmentNo, 10); // 2 bytes
    buffer.writeInt8(this.segmentKind, 11); // 1 byte

    buffer.writeInt8(this.messageType, 12); // 1 byte
    buffer.writeInt8(this.commit, 13); // 1 byte
    buffer.writeInt8(this.commandOptions, 14); // 1 byte

    return buffer;
  }
}

export default RequestHeader;
