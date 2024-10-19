import SegmentRequestHeader from "../../../../lib/protocol/message/segment/requestHeader.js";
import { expect } from "chai";
import { MessageType } from "../../../../lib/protocol/types.js";
describe("Test segments headers of the protocol", function () {
  it("should throw an error if invalid message type is supplied to ctor", function () {
    expect(() => {
      new SegmentRequestHeader({
        commandOptions: 1,
        messageType: 100,
      });
    }).to.throw(Error);
  });
  it("should create a segment request header without throwing", function () {
    for (const messageType in MessageType) {
      expect(() => {
        new SegmentRequestHeader({
          messageType: MessageType[messageType],
        });
      }).to.not.throw(Error);
    }
  });
});
