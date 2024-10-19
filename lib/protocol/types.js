/**
 * Define Message Types as specified in the protocol.
 * @enum {number}
 */
const MessageType = Object.freeze({
  NIL: 0, // Reserved for invalid messages. Do not use.
  EXECUTE_DIRECT: 2, // Directly executes an SQL statement.
  PREPARE: 3, // Prepares an SQL statement.
  ABAP_STREAM: 4, // Handles an ABAP stream parameter from a database procedure.
  XA_START: 5, // Starts a distributed transaction in a multi-node SAP HANA system.
  XA_JOIN: 6, // Joins a distributed transaction in a multi-node SAP HANA system.
  XA_COMMIT: 7, // Commits a distributed transaction in a multi-node SAP HANA system.
  EXECUTE: 13, // Executes a previously prepared SQL statement.
  READ_LOB: 16, // Reads large object data.
  WRITE_LOB: 17, // Writes large object data.
  FIND_LOB: 18, // Finds data in a large object.
  PING: 25, // Reserved, do not use.
  AUTHENTICATE: 65, // Sends authentication data.
  CONNECT: 66, // Connects to the database.
  COMMIT: 67, // Commits the current transaction.
  ROLLBACK: 68, // Rolls back the current transaction.
  CLOSE_RESULTSET: 69, // Closes a result set.
  DROP_STATEMENT_ID: 70, // Drops a prepared statement identifier.
  FETCH_NEXT: 71, // Fetches the next result from the result set.
  FETCH_ABSOLUTE: 72, // Moves the cursor to the given row number and fetches the data.
  FETCH_RELATIVE: 73, // Moves the cursor a number of rows relative to the position and fetches the data.
  FETCH_FIRST: 74, // Moves the cursor to the first row and fetches the data.
  FETCH_LAST: 75, // Moves the cursor to the last row and fetches the data.
  DISCONNECT: 77, // Reserved (disconnects the session).
  EXECUTE_ITAB: 78, // Executes a command in Fast Data Access mode.
  FETCH_NEXT_ITAB: 79, // Fetches the next result for an ITAB object in Fast Data Access mode.
  INSERT_NEXT_ITAB: 80, // Inserts the next result for an ITAB object in Fast Data Access mode.
  BATCH_PREPARE: 81, // Reserved, do not use.
  DB_CONNECT_INFO: 82, // Requests and receives database connect information when connecting using the database name.
});

/**
 * Define Segments Kind as specified in the protocol.
 * @enum {number}
 */
const SegmentKind = Object.freeze({
  INVALID: 0,
  REQUEST: 1,
  REPLY: 2,
  ERROR: 5,
});

/**
 * Define Function Code as specified in the protocol.
 * @enum {number}
 */
const FunctionCode = Object.freeze({
  NIL: 0, // Specifies the invalid command or function.
  DDL: 1, // Specifies the DDL statement.
  INSERT: 2, // Specifies the INSERT statement.
  UPDATE: 3, // Specifies the UPDATE statement.
  DELETE: 4, // Specifies the DELETE statement.
  SELECT: 5, // Specifies the SELECT statement.
  SELECTFORUPDATE: 6, // Specifies the SELECT…FOR UPDATE statement.
  EXPLAIN: 7, // Specifies the EXPLAIN statement.
  DBPROCEDURECALL: 8, // Specifies the CALL statement.
  DBPROCEDURECALLWITHRESULT: 9, // Specifies the CALL statement returning one or more results.
  FETCH: 10, // Specifies the FETCH message.
  COMMIT: 11, // Specifies the COMMIT message or statement.
  ROLLBACK: 12, // Specifies the ROLLBACK message or statement.
  SAVEPOINT: 13, // Reserved, do not use.
  CONNECT: 14, // Specifies the CONNECT or AUTHENTICATION message.
  WRITELOB: 15, // Specifies the WRITELOB message.
  READLOB: 16, // Specifies the READLOB message.
  PING: 17, // Reserved, do not use.
  DISCONNECT: 18, // Specifies the DISCONNECT message.
  CLOSECURSOR: 19, // Specifies the CLOSECURSOR message.
  FINDLOB: 20, // Specifies the FINDLOB message.
  ABAPSTREAM: 21, // Specifies the ABAPSTREAM message for fast data access.
  XASTART: 22, // Specifies the XA_START message.
  XAJOIN: 23, // Specifies the XA_JOIN message.
});
/**
 * Define Command Options as specified in the protocol.
 * @enum {number}
 */
const CommandOption = {
  RESERVED_FIELD: 1 << 0, // Bit 1
  HOLD_CURSORS_OVER_COMMIT: 1 << 2, // Bit 3
  EXECUTE_LOCALLY: 1 << 3, // Bit 4
  SCROLL_INSENSITIVE: 1 << 4, // Bit 5
};

export { MessageType, SegmentKind, FunctionCode, CommandOption };
