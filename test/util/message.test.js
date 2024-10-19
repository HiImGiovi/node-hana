import { isValidMessageType } from "../../lib/protocol/util/types.js";
import { MessageType } from "../../lib/protocol/types.js";
import { expect } from "chai";
describe("Testing message utils functions", function () {
  it("should detect invalid message types", function () {
    expect(isValidMessageType(99)).equal(false);
    expect(isValidMessageType(919)).equal(false);
    expect(isValidMessageType(921219)).equal(false);
    expect(isValidMessageType(919)).equal(false);
  });
  it("should detect valid message type", function () {
    for (const messageType in MessageType) {
      expect(isValidMessageType(MessageType[messageType])).equal(true);
    }
  });
});
