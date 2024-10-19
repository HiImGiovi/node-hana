// A message consists of a fixed part, called the message header and a variable length message buffer. The
// message buffer contains message segments, which, in turn, consist of a segment header and a segment
// buffer. The segment buffer contains parts which have a fixed length part header and a variable length buffer.

// The following is the Message structure:
// message
// ├─────segment 1
// │        ├─────part 1
// │        └─────part 2
// │         ...
// ├─────segment 2
// │        ├─────part 1
// │        └─────part 2
// │        ...
// ...
import Header from "./header.js";

class Message {}

export default Message;
