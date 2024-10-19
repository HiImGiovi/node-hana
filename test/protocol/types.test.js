import { expect } from "chai";
import { CommandOption } from "../../lib/protocol/types.js";
import {
  isCommandOptionEnabled,
  createCommandOptions,
} from "../../lib/protocol/util/types.js";

describe("Test for type utils", function () {
  it("should test Command Options utils", function () {
    const executeLocallyCO = createCommandOptions(
      CommandOption.EXECUTE_LOCALLY
    );
    expect(
      isCommandOptionEnabled(executeLocallyCO, CommandOption.EXECUTE_LOCALLY)
    ).equal(true);
    expect(
      isCommandOptionEnabled(
        executeLocallyCO,
        CommandOption.HOLD_CURSORS_OVER_COMMIT
      )
    ).equal(false);
    expect(
      isCommandOptionEnabled(executeLocallyCO, CommandOption.RESERVED_FIELD)
    ).equal(false);
    expect(
      isCommandOptionEnabled(executeLocallyCO, CommandOption.SCROLL_INSENSITIVE)
    ).equal(false);

    const executeLocallyCOAndScroll = createCommandOptions(
      CommandOption.EXECUTE_LOCALLY,
      CommandOption.SCROLL_INSENSITIVE
    );
    expect(
      isCommandOptionEnabled(
        executeLocallyCOAndScroll,
        CommandOption.EXECUTE_LOCALLY
      )
    ).equal(true);
    expect(
      isCommandOptionEnabled(
        executeLocallyCOAndScroll,
        CommandOption.SCROLL_INSENSITIVE
      )
    ).equal(true);
    expect(
      isCommandOptionEnabled(
        executeLocallyCOAndScroll,
        CommandOption.HOLD_CURSORS_OVER_COMMIT
      )
    ).equal(false);
    expect(
      isCommandOptionEnabled(
        executeLocallyCOAndScroll,
        CommandOption.RESERVED_FIELD
      )
    ).equal(false);
  });
});
