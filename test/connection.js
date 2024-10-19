import { after } from "mocha";
import Client from "../index.js";

describe("test connection", function () {
  const client = new Client({
    host: "localhost",
    port: 39017,
  });

  before(async function () {
    console.log("initializing connection...");
    await client.connect(() => {
      console.log("connected to the client successfully!");
    });
  });

  it("should init socket properly", function () {});

  after(function () {
    console.log("disconnecting the client...");
    client.disconnect();
    console.log("disconnected successfully!");
  });
});
