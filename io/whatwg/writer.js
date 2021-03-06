"use strict";
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordBatchWriterThroughDOMStream = void 0;
const stream_1 = require("../../io/stream");
/** @ignore */
function recordBatchWriterThroughDOMStream(writableStrategy, readableStrategy) {
    const writer = new this(writableStrategy);
    const reader = new stream_1.AsyncByteStream(writer);
    const readable = new ReadableStream({
        type: 'bytes',
        async cancel() { await reader.cancel(); },
        async pull(controller) { await next(controller); },
        async start(controller) { await next(controller); },
    }, { 'highWaterMark': 2 ** 14, ...readableStrategy });
    return { writable: new WritableStream(writer, writableStrategy), readable };
    async function next(controller) {
        let buf = null;
        let size = controller.desiredSize;
        while (buf = await reader.read(size || null)) {
            controller.enqueue(buf);
            if (size != null && (size -= buf.byteLength) <= 0) {
                return;
            }
        }
        controller.close();
    }
}
exports.recordBatchWriterThroughDOMStream = recordBatchWriterThroughDOMStream;

//# sourceMappingURL=writer.js.map
