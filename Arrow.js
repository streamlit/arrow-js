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
exports.util = exports.predicate = exports.CountByResult = exports.FilteredDataFrame = exports.DataFrame = exports.RecordBatch = exports.Message = exports.JSONMessageReader = exports.AsyncMessageReader = exports.MessageReader = exports.RecordBatchJSONWriter = exports.RecordBatchStreamWriter = exports.RecordBatchFileWriter = exports.RecordBatchWriter = exports.AsyncRecordBatchStreamReader = exports.AsyncRecordBatchFileReader = exports.RecordBatchStreamReader = exports.RecordBatchFileReader = exports.RecordBatchReader = exports.AsyncByteQueue = exports.AsyncByteStream = exports.ByteStream = exports.Utf8Builder = exports.SparseUnionBuilder = exports.DenseUnionBuilder = exports.UnionBuilder = exports.TimeNanosecondBuilder = exports.TimeMicrosecondBuilder = exports.TimeMillisecondBuilder = exports.TimeSecondBuilder = exports.TimeBuilder = exports.TimestampNanosecondBuilder = exports.TimestampMicrosecondBuilder = exports.TimestampMillisecondBuilder = exports.TimestampSecondBuilder = exports.TimestampBuilder = exports.StructBuilder = exports.NullBuilder = exports.MapBuilder = exports.ListBuilder = exports.Uint64Builder = exports.Uint32Builder = exports.Uint16Builder = exports.Uint8Builder = exports.Int64Builder = exports.Int32Builder = exports.Int16Builder = exports.Int8Builder = exports.IntBuilder = exports.IntervalYearMonthBuilder = exports.IntervalDayTimeBuilder = exports.IntervalBuilder = exports.Float64Builder = exports.Float32Builder = exports.Float16Builder = exports.FloatBuilder = exports.FixedSizeListBuilder = exports.FixedSizeBinaryBuilder = exports.DictionaryBuilder = exports.DecimalBuilder = exports.DateMillisecondBuilder = exports.DateDayBuilder = exports.DateBuilder = exports.BoolBuilder = exports.BinaryBuilder = exports.Builder = exports.Utf8Vector = exports.SparseUnionVector = exports.DenseUnionVector = exports.UnionVector = exports.TimeNanosecondVector = exports.TimeMicrosecondVector = exports.TimeMillisecondVector = exports.TimeSecondVector = exports.TimeVector = exports.TimestampNanosecondVector = exports.TimestampMicrosecondVector = exports.TimestampMillisecondVector = exports.TimestampSecondVector = exports.TimestampVector = exports.StructVector = exports.NullVector = exports.MapVector = exports.ListVector = exports.Uint64Vector = exports.Uint32Vector = exports.Uint16Vector = exports.Uint8Vector = exports.Int64Vector = exports.Int32Vector = exports.Int16Vector = exports.Int8Vector = exports.IntVector = exports.IntervalYearMonthVector = exports.IntervalDayTimeVector = exports.IntervalVector = exports.Float64Vector = exports.Float32Vector = exports.Float16Vector = exports.FloatVector = exports.FixedSizeListVector = exports.FixedSizeBinaryVector = exports.DictionaryVector = exports.DecimalVector = exports.DateMillisecondVector = exports.DateDayVector = exports.DateVector = exports.Chunked = exports.BoolVector = exports.BinaryVector = exports.BaseVector = exports.Vector = exports.Field = exports.Schema = exports.Visitor = exports.Column = exports.Table = exports.Map_ = exports.FixedSizeList = exports.IntervalYearMonth = exports.IntervalDayTime = exports.Interval = exports.Dictionary = exports.SparseUnion = exports.DenseUnion = exports.Union = exports.Struct = exports.List = exports.Decimal = exports.TimeNanosecond = exports.TimeMicrosecond = exports.TimeMillisecond = exports.TimeSecond = exports.Time = exports.TimestampNanosecond = exports.TimestampMicrosecond = exports.TimestampMillisecond = exports.TimestampSecond = exports.Timestamp = exports.DateMillisecond = exports.DateDay = exports.Date_ = exports.FixedSizeBinary = exports.Binary = exports.Utf8 = exports.Float64 = exports.Float32 = exports.Float16 = exports.Float = exports.Uint64 = exports.Uint32 = exports.Uint16 = exports.Uint8 = exports.Int64 = exports.Int32 = exports.Int16 = exports.Int8 = exports.Int = exports.Bool = exports.Null = exports.DataType = exports.Data = exports.BufferType = exports.UnionMode = exports.Type = exports.TimeUnit = exports.Precision = exports.MetadataVersion = exports.MessageHeader = exports.IntervalUnit = exports.DateUnit = exports.ArrowType = void 0;
var enum_1 = require("./enum");
Object.defineProperty(exports, "ArrowType", { enumerable: true, get: function () { return enum_1.ArrowType; } });
Object.defineProperty(exports, "DateUnit", { enumerable: true, get: function () { return enum_1.DateUnit; } });
Object.defineProperty(exports, "IntervalUnit", { enumerable: true, get: function () { return enum_1.IntervalUnit; } });
Object.defineProperty(exports, "MessageHeader", { enumerable: true, get: function () { return enum_1.MessageHeader; } });
Object.defineProperty(exports, "MetadataVersion", { enumerable: true, get: function () { return enum_1.MetadataVersion; } });
Object.defineProperty(exports, "Precision", { enumerable: true, get: function () { return enum_1.Precision; } });
Object.defineProperty(exports, "TimeUnit", { enumerable: true, get: function () { return enum_1.TimeUnit; } });
Object.defineProperty(exports, "Type", { enumerable: true, get: function () { return enum_1.Type; } });
Object.defineProperty(exports, "UnionMode", { enumerable: true, get: function () { return enum_1.UnionMode; } });
Object.defineProperty(exports, "BufferType", { enumerable: true, get: function () { return enum_1.BufferType; } });
var data_1 = require("./data");
Object.defineProperty(exports, "Data", { enumerable: true, get: function () { return data_1.Data; } });
var type_1 = require("./type");
Object.defineProperty(exports, "DataType", { enumerable: true, get: function () { return type_1.DataType; } });
Object.defineProperty(exports, "Null", { enumerable: true, get: function () { return type_1.Null; } });
Object.defineProperty(exports, "Bool", { enumerable: true, get: function () { return type_1.Bool; } });
Object.defineProperty(exports, "Int", { enumerable: true, get: function () { return type_1.Int; } });
Object.defineProperty(exports, "Int8", { enumerable: true, get: function () { return type_1.Int8; } });
Object.defineProperty(exports, "Int16", { enumerable: true, get: function () { return type_1.Int16; } });
Object.defineProperty(exports, "Int32", { enumerable: true, get: function () { return type_1.Int32; } });
Object.defineProperty(exports, "Int64", { enumerable: true, get: function () { return type_1.Int64; } });
Object.defineProperty(exports, "Uint8", { enumerable: true, get: function () { return type_1.Uint8; } });
Object.defineProperty(exports, "Uint16", { enumerable: true, get: function () { return type_1.Uint16; } });
Object.defineProperty(exports, "Uint32", { enumerable: true, get: function () { return type_1.Uint32; } });
Object.defineProperty(exports, "Uint64", { enumerable: true, get: function () { return type_1.Uint64; } });
Object.defineProperty(exports, "Float", { enumerable: true, get: function () { return type_1.Float; } });
Object.defineProperty(exports, "Float16", { enumerable: true, get: function () { return type_1.Float16; } });
Object.defineProperty(exports, "Float32", { enumerable: true, get: function () { return type_1.Float32; } });
Object.defineProperty(exports, "Float64", { enumerable: true, get: function () { return type_1.Float64; } });
Object.defineProperty(exports, "Utf8", { enumerable: true, get: function () { return type_1.Utf8; } });
Object.defineProperty(exports, "Binary", { enumerable: true, get: function () { return type_1.Binary; } });
Object.defineProperty(exports, "FixedSizeBinary", { enumerable: true, get: function () { return type_1.FixedSizeBinary; } });
Object.defineProperty(exports, "Date_", { enumerable: true, get: function () { return type_1.Date_; } });
Object.defineProperty(exports, "DateDay", { enumerable: true, get: function () { return type_1.DateDay; } });
Object.defineProperty(exports, "DateMillisecond", { enumerable: true, get: function () { return type_1.DateMillisecond; } });
Object.defineProperty(exports, "Timestamp", { enumerable: true, get: function () { return type_1.Timestamp; } });
Object.defineProperty(exports, "TimestampSecond", { enumerable: true, get: function () { return type_1.TimestampSecond; } });
Object.defineProperty(exports, "TimestampMillisecond", { enumerable: true, get: function () { return type_1.TimestampMillisecond; } });
Object.defineProperty(exports, "TimestampMicrosecond", { enumerable: true, get: function () { return type_1.TimestampMicrosecond; } });
Object.defineProperty(exports, "TimestampNanosecond", { enumerable: true, get: function () { return type_1.TimestampNanosecond; } });
Object.defineProperty(exports, "Time", { enumerable: true, get: function () { return type_1.Time; } });
Object.defineProperty(exports, "TimeSecond", { enumerable: true, get: function () { return type_1.TimeSecond; } });
Object.defineProperty(exports, "TimeMillisecond", { enumerable: true, get: function () { return type_1.TimeMillisecond; } });
Object.defineProperty(exports, "TimeMicrosecond", { enumerable: true, get: function () { return type_1.TimeMicrosecond; } });
Object.defineProperty(exports, "TimeNanosecond", { enumerable: true, get: function () { return type_1.TimeNanosecond; } });
Object.defineProperty(exports, "Decimal", { enumerable: true, get: function () { return type_1.Decimal; } });
Object.defineProperty(exports, "List", { enumerable: true, get: function () { return type_1.List; } });
Object.defineProperty(exports, "Struct", { enumerable: true, get: function () { return type_1.Struct; } });
Object.defineProperty(exports, "Union", { enumerable: true, get: function () { return type_1.Union; } });
Object.defineProperty(exports, "DenseUnion", { enumerable: true, get: function () { return type_1.DenseUnion; } });
Object.defineProperty(exports, "SparseUnion", { enumerable: true, get: function () { return type_1.SparseUnion; } });
Object.defineProperty(exports, "Dictionary", { enumerable: true, get: function () { return type_1.Dictionary; } });
Object.defineProperty(exports, "Interval", { enumerable: true, get: function () { return type_1.Interval; } });
Object.defineProperty(exports, "IntervalDayTime", { enumerable: true, get: function () { return type_1.IntervalDayTime; } });
Object.defineProperty(exports, "IntervalYearMonth", { enumerable: true, get: function () { return type_1.IntervalYearMonth; } });
Object.defineProperty(exports, "FixedSizeList", { enumerable: true, get: function () { return type_1.FixedSizeList; } });
Object.defineProperty(exports, "Map_", { enumerable: true, get: function () { return type_1.Map_; } });
var table_1 = require("./table");
Object.defineProperty(exports, "Table", { enumerable: true, get: function () { return table_1.Table; } });
var column_1 = require("./column");
Object.defineProperty(exports, "Column", { enumerable: true, get: function () { return column_1.Column; } });
var visitor_1 = require("./visitor");
Object.defineProperty(exports, "Visitor", { enumerable: true, get: function () { return visitor_1.Visitor; } });
var schema_1 = require("./schema");
Object.defineProperty(exports, "Schema", { enumerable: true, get: function () { return schema_1.Schema; } });
Object.defineProperty(exports, "Field", { enumerable: true, get: function () { return schema_1.Field; } });
var index_1 = require("./vector/index");
Object.defineProperty(exports, "Vector", { enumerable: true, get: function () { return index_1.Vector; } });
Object.defineProperty(exports, "BaseVector", { enumerable: true, get: function () { return index_1.BaseVector; } });
Object.defineProperty(exports, "BinaryVector", { enumerable: true, get: function () { return index_1.BinaryVector; } });
Object.defineProperty(exports, "BoolVector", { enumerable: true, get: function () { return index_1.BoolVector; } });
Object.defineProperty(exports, "Chunked", { enumerable: true, get: function () { return index_1.Chunked; } });
Object.defineProperty(exports, "DateVector", { enumerable: true, get: function () { return index_1.DateVector; } });
Object.defineProperty(exports, "DateDayVector", { enumerable: true, get: function () { return index_1.DateDayVector; } });
Object.defineProperty(exports, "DateMillisecondVector", { enumerable: true, get: function () { return index_1.DateMillisecondVector; } });
Object.defineProperty(exports, "DecimalVector", { enumerable: true, get: function () { return index_1.DecimalVector; } });
Object.defineProperty(exports, "DictionaryVector", { enumerable: true, get: function () { return index_1.DictionaryVector; } });
Object.defineProperty(exports, "FixedSizeBinaryVector", { enumerable: true, get: function () { return index_1.FixedSizeBinaryVector; } });
Object.defineProperty(exports, "FixedSizeListVector", { enumerable: true, get: function () { return index_1.FixedSizeListVector; } });
Object.defineProperty(exports, "FloatVector", { enumerable: true, get: function () { return index_1.FloatVector; } });
Object.defineProperty(exports, "Float16Vector", { enumerable: true, get: function () { return index_1.Float16Vector; } });
Object.defineProperty(exports, "Float32Vector", { enumerable: true, get: function () { return index_1.Float32Vector; } });
Object.defineProperty(exports, "Float64Vector", { enumerable: true, get: function () { return index_1.Float64Vector; } });
Object.defineProperty(exports, "IntervalVector", { enumerable: true, get: function () { return index_1.IntervalVector; } });
Object.defineProperty(exports, "IntervalDayTimeVector", { enumerable: true, get: function () { return index_1.IntervalDayTimeVector; } });
Object.defineProperty(exports, "IntervalYearMonthVector", { enumerable: true, get: function () { return index_1.IntervalYearMonthVector; } });
Object.defineProperty(exports, "IntVector", { enumerable: true, get: function () { return index_1.IntVector; } });
Object.defineProperty(exports, "Int8Vector", { enumerable: true, get: function () { return index_1.Int8Vector; } });
Object.defineProperty(exports, "Int16Vector", { enumerable: true, get: function () { return index_1.Int16Vector; } });
Object.defineProperty(exports, "Int32Vector", { enumerable: true, get: function () { return index_1.Int32Vector; } });
Object.defineProperty(exports, "Int64Vector", { enumerable: true, get: function () { return index_1.Int64Vector; } });
Object.defineProperty(exports, "Uint8Vector", { enumerable: true, get: function () { return index_1.Uint8Vector; } });
Object.defineProperty(exports, "Uint16Vector", { enumerable: true, get: function () { return index_1.Uint16Vector; } });
Object.defineProperty(exports, "Uint32Vector", { enumerable: true, get: function () { return index_1.Uint32Vector; } });
Object.defineProperty(exports, "Uint64Vector", { enumerable: true, get: function () { return index_1.Uint64Vector; } });
Object.defineProperty(exports, "ListVector", { enumerable: true, get: function () { return index_1.ListVector; } });
Object.defineProperty(exports, "MapVector", { enumerable: true, get: function () { return index_1.MapVector; } });
Object.defineProperty(exports, "NullVector", { enumerable: true, get: function () { return index_1.NullVector; } });
Object.defineProperty(exports, "StructVector", { enumerable: true, get: function () { return index_1.StructVector; } });
Object.defineProperty(exports, "TimestampVector", { enumerable: true, get: function () { return index_1.TimestampVector; } });
Object.defineProperty(exports, "TimestampSecondVector", { enumerable: true, get: function () { return index_1.TimestampSecondVector; } });
Object.defineProperty(exports, "TimestampMillisecondVector", { enumerable: true, get: function () { return index_1.TimestampMillisecondVector; } });
Object.defineProperty(exports, "TimestampMicrosecondVector", { enumerable: true, get: function () { return index_1.TimestampMicrosecondVector; } });
Object.defineProperty(exports, "TimestampNanosecondVector", { enumerable: true, get: function () { return index_1.TimestampNanosecondVector; } });
Object.defineProperty(exports, "TimeVector", { enumerable: true, get: function () { return index_1.TimeVector; } });
Object.defineProperty(exports, "TimeSecondVector", { enumerable: true, get: function () { return index_1.TimeSecondVector; } });
Object.defineProperty(exports, "TimeMillisecondVector", { enumerable: true, get: function () { return index_1.TimeMillisecondVector; } });
Object.defineProperty(exports, "TimeMicrosecondVector", { enumerable: true, get: function () { return index_1.TimeMicrosecondVector; } });
Object.defineProperty(exports, "TimeNanosecondVector", { enumerable: true, get: function () { return index_1.TimeNanosecondVector; } });
Object.defineProperty(exports, "UnionVector", { enumerable: true, get: function () { return index_1.UnionVector; } });
Object.defineProperty(exports, "DenseUnionVector", { enumerable: true, get: function () { return index_1.DenseUnionVector; } });
Object.defineProperty(exports, "SparseUnionVector", { enumerable: true, get: function () { return index_1.SparseUnionVector; } });
Object.defineProperty(exports, "Utf8Vector", { enumerable: true, get: function () { return index_1.Utf8Vector; } });
var index_2 = require("./builder/index");
Object.defineProperty(exports, "Builder", { enumerable: true, get: function () { return index_2.Builder; } });
Object.defineProperty(exports, "BinaryBuilder", { enumerable: true, get: function () { return index_2.BinaryBuilder; } });
Object.defineProperty(exports, "BoolBuilder", { enumerable: true, get: function () { return index_2.BoolBuilder; } });
Object.defineProperty(exports, "DateBuilder", { enumerable: true, get: function () { return index_2.DateBuilder; } });
Object.defineProperty(exports, "DateDayBuilder", { enumerable: true, get: function () { return index_2.DateDayBuilder; } });
Object.defineProperty(exports, "DateMillisecondBuilder", { enumerable: true, get: function () { return index_2.DateMillisecondBuilder; } });
Object.defineProperty(exports, "DecimalBuilder", { enumerable: true, get: function () { return index_2.DecimalBuilder; } });
Object.defineProperty(exports, "DictionaryBuilder", { enumerable: true, get: function () { return index_2.DictionaryBuilder; } });
Object.defineProperty(exports, "FixedSizeBinaryBuilder", { enumerable: true, get: function () { return index_2.FixedSizeBinaryBuilder; } });
Object.defineProperty(exports, "FixedSizeListBuilder", { enumerable: true, get: function () { return index_2.FixedSizeListBuilder; } });
Object.defineProperty(exports, "FloatBuilder", { enumerable: true, get: function () { return index_2.FloatBuilder; } });
Object.defineProperty(exports, "Float16Builder", { enumerable: true, get: function () { return index_2.Float16Builder; } });
Object.defineProperty(exports, "Float32Builder", { enumerable: true, get: function () { return index_2.Float32Builder; } });
Object.defineProperty(exports, "Float64Builder", { enumerable: true, get: function () { return index_2.Float64Builder; } });
Object.defineProperty(exports, "IntervalBuilder", { enumerable: true, get: function () { return index_2.IntervalBuilder; } });
Object.defineProperty(exports, "IntervalDayTimeBuilder", { enumerable: true, get: function () { return index_2.IntervalDayTimeBuilder; } });
Object.defineProperty(exports, "IntervalYearMonthBuilder", { enumerable: true, get: function () { return index_2.IntervalYearMonthBuilder; } });
Object.defineProperty(exports, "IntBuilder", { enumerable: true, get: function () { return index_2.IntBuilder; } });
Object.defineProperty(exports, "Int8Builder", { enumerable: true, get: function () { return index_2.Int8Builder; } });
Object.defineProperty(exports, "Int16Builder", { enumerable: true, get: function () { return index_2.Int16Builder; } });
Object.defineProperty(exports, "Int32Builder", { enumerable: true, get: function () { return index_2.Int32Builder; } });
Object.defineProperty(exports, "Int64Builder", { enumerable: true, get: function () { return index_2.Int64Builder; } });
Object.defineProperty(exports, "Uint8Builder", { enumerable: true, get: function () { return index_2.Uint8Builder; } });
Object.defineProperty(exports, "Uint16Builder", { enumerable: true, get: function () { return index_2.Uint16Builder; } });
Object.defineProperty(exports, "Uint32Builder", { enumerable: true, get: function () { return index_2.Uint32Builder; } });
Object.defineProperty(exports, "Uint64Builder", { enumerable: true, get: function () { return index_2.Uint64Builder; } });
Object.defineProperty(exports, "ListBuilder", { enumerable: true, get: function () { return index_2.ListBuilder; } });
Object.defineProperty(exports, "MapBuilder", { enumerable: true, get: function () { return index_2.MapBuilder; } });
Object.defineProperty(exports, "NullBuilder", { enumerable: true, get: function () { return index_2.NullBuilder; } });
Object.defineProperty(exports, "StructBuilder", { enumerable: true, get: function () { return index_2.StructBuilder; } });
Object.defineProperty(exports, "TimestampBuilder", { enumerable: true, get: function () { return index_2.TimestampBuilder; } });
Object.defineProperty(exports, "TimestampSecondBuilder", { enumerable: true, get: function () { return index_2.TimestampSecondBuilder; } });
Object.defineProperty(exports, "TimestampMillisecondBuilder", { enumerable: true, get: function () { return index_2.TimestampMillisecondBuilder; } });
Object.defineProperty(exports, "TimestampMicrosecondBuilder", { enumerable: true, get: function () { return index_2.TimestampMicrosecondBuilder; } });
Object.defineProperty(exports, "TimestampNanosecondBuilder", { enumerable: true, get: function () { return index_2.TimestampNanosecondBuilder; } });
Object.defineProperty(exports, "TimeBuilder", { enumerable: true, get: function () { return index_2.TimeBuilder; } });
Object.defineProperty(exports, "TimeSecondBuilder", { enumerable: true, get: function () { return index_2.TimeSecondBuilder; } });
Object.defineProperty(exports, "TimeMillisecondBuilder", { enumerable: true, get: function () { return index_2.TimeMillisecondBuilder; } });
Object.defineProperty(exports, "TimeMicrosecondBuilder", { enumerable: true, get: function () { return index_2.TimeMicrosecondBuilder; } });
Object.defineProperty(exports, "TimeNanosecondBuilder", { enumerable: true, get: function () { return index_2.TimeNanosecondBuilder; } });
Object.defineProperty(exports, "UnionBuilder", { enumerable: true, get: function () { return index_2.UnionBuilder; } });
Object.defineProperty(exports, "DenseUnionBuilder", { enumerable: true, get: function () { return index_2.DenseUnionBuilder; } });
Object.defineProperty(exports, "SparseUnionBuilder", { enumerable: true, get: function () { return index_2.SparseUnionBuilder; } });
Object.defineProperty(exports, "Utf8Builder", { enumerable: true, get: function () { return index_2.Utf8Builder; } });
var stream_1 = require("./io/stream");
Object.defineProperty(exports, "ByteStream", { enumerable: true, get: function () { return stream_1.ByteStream; } });
Object.defineProperty(exports, "AsyncByteStream", { enumerable: true, get: function () { return stream_1.AsyncByteStream; } });
Object.defineProperty(exports, "AsyncByteQueue", { enumerable: true, get: function () { return stream_1.AsyncByteQueue; } });
var reader_1 = require("./ipc/reader");
Object.defineProperty(exports, "RecordBatchReader", { enumerable: true, get: function () { return reader_1.RecordBatchReader; } });
Object.defineProperty(exports, "RecordBatchFileReader", { enumerable: true, get: function () { return reader_1.RecordBatchFileReader; } });
Object.defineProperty(exports, "RecordBatchStreamReader", { enumerable: true, get: function () { return reader_1.RecordBatchStreamReader; } });
Object.defineProperty(exports, "AsyncRecordBatchFileReader", { enumerable: true, get: function () { return reader_1.AsyncRecordBatchFileReader; } });
Object.defineProperty(exports, "AsyncRecordBatchStreamReader", { enumerable: true, get: function () { return reader_1.AsyncRecordBatchStreamReader; } });
var writer_1 = require("./ipc/writer");
Object.defineProperty(exports, "RecordBatchWriter", { enumerable: true, get: function () { return writer_1.RecordBatchWriter; } });
Object.defineProperty(exports, "RecordBatchFileWriter", { enumerable: true, get: function () { return writer_1.RecordBatchFileWriter; } });
Object.defineProperty(exports, "RecordBatchStreamWriter", { enumerable: true, get: function () { return writer_1.RecordBatchStreamWriter; } });
Object.defineProperty(exports, "RecordBatchJSONWriter", { enumerable: true, get: function () { return writer_1.RecordBatchJSONWriter; } });
var message_1 = require("./ipc/message");
Object.defineProperty(exports, "MessageReader", { enumerable: true, get: function () { return message_1.MessageReader; } });
Object.defineProperty(exports, "AsyncMessageReader", { enumerable: true, get: function () { return message_1.AsyncMessageReader; } });
Object.defineProperty(exports, "JSONMessageReader", { enumerable: true, get: function () { return message_1.JSONMessageReader; } });
var message_2 = require("./ipc/metadata/message");
Object.defineProperty(exports, "Message", { enumerable: true, get: function () { return message_2.Message; } });
var recordbatch_1 = require("./recordbatch");
Object.defineProperty(exports, "RecordBatch", { enumerable: true, get: function () { return recordbatch_1.RecordBatch; } });
var dataframe_1 = require("./compute/dataframe");
Object.defineProperty(exports, "DataFrame", { enumerable: true, get: function () { return dataframe_1.DataFrame; } });
Object.defineProperty(exports, "FilteredDataFrame", { enumerable: true, get: function () { return dataframe_1.FilteredDataFrame; } });
Object.defineProperty(exports, "CountByResult", { enumerable: true, get: function () { return dataframe_1.CountByResult; } });
const util_bn_ = require("./util/bn");
const util_int_ = require("./util/int");
const util_bit_ = require("./util/bit");
const util_math_ = require("./util/math");
const util_buffer_ = require("./util/buffer");
const util_vector_ = require("./util/vector");
const predicate = require("./compute/predicate");
exports.predicate = predicate;
/** @ignore */
exports.util = {
    ...util_bn_,
    ...util_int_,
    ...util_bit_,
    ...util_math_,
    ...util_buffer_,
    ...util_vector_
};

//# sourceMappingURL=Arrow.js.map
