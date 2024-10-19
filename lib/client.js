import { createConnection } from "net";

class Client {
  #socket;
  #connOptions;
  constructor(connOptions) {
    this.#connOptions = connOptions;
  }
  connect(cb) {
    return new Promise((resolve, reject) => {
      const { host, port } = this.#connOptions;
      this.#socket = createConnection({ host, port }, (err) => {
        if (err) reject(err);
        cb?.();
      });
      resolve();
    });
  }
  disconnect() {
    this.#socket.end();
  }
}

export default Client;
