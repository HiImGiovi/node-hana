import { Buffer } from "buffer";

/**
 *
 */
class Header {
  /**
   *
   * @param {object} header
   * @param {number} header.sessionId Specifies a session Identifier.
   * @param {number} header.packetCount Specifies a packet sequence number in this session. Packets with the same
sequence number belong to one request/response pair.
   * @param {number} header.varPartLength Specifies the amount of space used in the packet. The maximum size is 2G -1.
The VARPARTLENGTH does not include the message header size itself, so the
total packet size is VARPARTLENGTH + 32.

   * @param {number} header.varPartSize Specifies the total amount of space in the packet. The maximum size is 2G -1
   * @param {number} header.noOfSegment Specifies the number of segments in the packet.
   * @param {number} header.packetOptions Specifies 2 if the packet is compressed, 0 otherwise. If the packet is compressed, then the message header and the first segment header are uncompressed and the remainder of the packet is compressed.
   */
  constructor({
    sessionId,
    packetCount,
    varPartLength,
    varPartSize,
    noOfSegment,
    packetOptions,
    reserved,
  }) {
    this.sessionId = sessionId;
    this.packetCount = packetCount;
    this.varPartLength = varPartLength;
    this.varPartSize = varPartSize;
    this.noOfSegment = noOfSegment;
    this.packetOptions = packetOptions;
  }
  /**
   * Creates a buffer of 32 bytes as describe in the protocol specification.
   * @returns {Buffer} A buffer representing the header.
   */
  toBuffer() {
    // allocating 32 bytes because last 9 bytes are reserved
    const buffer = Buffer.alloc(32);

    // Scrivi i valori nei rispettivi campi del buffer
    buffer.writeBigInt64LE(this.sessionId, 0); // SESSIONID: 8 byte
    buffer.writeInt32LE(this.packetCount, 8); // PACKETCOUNT: 4 byte
    buffer.writeUInt32LE(this.varPartLength, 12); // VARPARTLENGTH: 4 byte
    buffer.writeUInt32LE(this.varPartSize, 16); // VARPARTSIZE: 4 byte
    buffer.writeInt16LE(this.noOfSegment, 20); // NOOFSEGM: 2 byte
    buffer.writeUInt8(this.packetOptions, 22); // PACKETOPTIONS: 1 byte

    return buffer;
  }
}

export default Header;
