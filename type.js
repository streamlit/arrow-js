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
exports.strideForType = exports.Dictionary = exports.Map_ = exports.FixedSizeList = exports.FixedSizeBinary = exports.SparseUnion = exports.DenseUnion = exports.Union = exports.Struct = exports.List = exports.IntervalYearMonth = exports.IntervalDayTime = exports.Interval = exports.TimestampNanosecond = exports.TimestampMicrosecond = exports.TimestampMillisecond = exports.TimestampSecond = exports.Timestamp = exports.TimeNanosecond = exports.TimeMicrosecond = exports.TimeMillisecond = exports.TimeSecond = exports.Time = exports.DateMillisecond = exports.DateDay = exports.Date_ = exports.Decimal = exports.Bool = exports.Utf8 = exports.Binary = exports.Float64 = exports.Float32 = exports.Float16 = exports.Float = exports.Uint64 = exports.Uint32 = exports.Uint16 = exports.Uint8 = exports.Int64 = exports.Int32 = exports.Int16 = exports.Int8 = exports.Int = exports.Null = exports.DataType = void 0;
const typecomparator_1 = require("./visitor/typecomparator");
const enum_1 = require("./enum");
/**
 * An abstract base class for classes that encapsulate metadata about each of
 * the logical types that Arrow can represent.
 */
class DataType {
    /** @nocollapse */ static isNull(x) { return x && x.typeId === enum_1.Type.Null; }
    /** @nocollapse */ static isInt(x) { return x && x.typeId === enum_1.Type.Int; }
    /** @nocollapse */ static isFloat(x) { return x && x.typeId === enum_1.Type.Float; }
    /** @nocollapse */ static isBinary(x) { return x && x.typeId === enum_1.Type.Binary; }
    /** @nocollapse */ static isUtf8(x) { return x && x.typeId === enum_1.Type.Utf8; }
    /** @nocollapse */ static isBool(x) { return x && x.typeId === enum_1.Type.Bool; }
    /** @nocollapse */ static isDecimal(x) { return x && x.typeId === enum_1.Type.Decimal; }
    /** @nocollapse */ static isDate(x) { return x && x.typeId === enum_1.Type.Date; }
    /** @nocollapse */ static isTime(x) { return x && x.typeId === enum_1.Type.Time; }
    /** @nocollapse */ static isTimestamp(x) { return x && x.typeId === enum_1.Type.Timestamp; }
    /** @nocollapse */ static isInterval(x) { return x && x.typeId === enum_1.Type.Interval; }
    /** @nocollapse */ static isList(x) { return x && x.typeId === enum_1.Type.List; }
    /** @nocollapse */ static isStruct(x) { return x && x.typeId === enum_1.Type.Struct; }
    /** @nocollapse */ static isUnion(x) { return x && x.typeId === enum_1.Type.Union; }
    /** @nocollapse */ static isFixedSizeBinary(x) { return x && x.typeId === enum_1.Type.FixedSizeBinary; }
    /** @nocollapse */ static isFixedSizeList(x) { return x && x.typeId === enum_1.Type.FixedSizeList; }
    /** @nocollapse */ static isMap(x) { return x && x.typeId === enum_1.Type.Map; }
    /** @nocollapse */ static isDictionary(x) { return x && x.typeId === enum_1.Type.Dictionary; }
    get typeId() { return enum_1.Type.NONE; }
    compareTo(other) {
        return typecomparator_1.instance.visit(this, other);
    }
}
exports.DataType = DataType;
DataType[Symbol.toStringTag] = ((proto) => {
    proto.children = null;
    proto.ArrayType = Array;
    return proto[Symbol.toStringTag] = 'DataType';
})(DataType.prototype);
/** @ignore */
class Null extends DataType {
    toString() { return `Null`; }
    get typeId() { return enum_1.Type.Null; }
}
exports.Null = Null;
Null[Symbol.toStringTag] = ((proto) => {
    return proto[Symbol.toStringTag] = 'Null';
})(Null.prototype);
/** @ignore */
class Int_ extends DataType {
    constructor(isSigned, bitWidth) {
        super();
        this.isSigned = isSigned;
        this.bitWidth = bitWidth;
    }
    get typeId() { return enum_1.Type.Int; }
    get ArrayType() {
        switch (this.bitWidth) {
            case 8: return this.isSigned ? Int8Array : Uint8Array;
            case 16: return this.isSigned ? Int16Array : Uint16Array;
            case 32: return this.isSigned ? Int32Array : Uint32Array;
            case 64: return this.isSigned ? Int32Array : Uint32Array;
        }
        throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
    }
    toString() { return `${this.isSigned ? `I` : `Ui`}nt${this.bitWidth}`; }
}
exports.Int = Int_;
Int_[Symbol.toStringTag] = ((proto) => {
    proto.isSigned = null;
    proto.bitWidth = null;
    return proto[Symbol.toStringTag] = 'Int';
})(Int_.prototype);
/** @ignore */
class Int8 extends Int_ {
    constructor() { super(true, 8); }
}
exports.Int8 = Int8;
/** @ignore */
class Int16 extends Int_ {
    constructor() { super(true, 16); }
}
exports.Int16 = Int16;
/** @ignore */
class Int32 extends Int_ {
    constructor() { super(true, 32); }
}
exports.Int32 = Int32;
/** @ignore */
class Int64 extends Int_ {
    constructor() { super(true, 64); }
}
exports.Int64 = Int64;
/** @ignore */
class Uint8 extends Int_ {
    constructor() { super(false, 8); }
}
exports.Uint8 = Uint8;
/** @ignore */
class Uint16 extends Int_ {
    constructor() { super(false, 16); }
}
exports.Uint16 = Uint16;
/** @ignore */
class Uint32 extends Int_ {
    constructor() { super(false, 32); }
}
exports.Uint32 = Uint32;
/** @ignore */
class Uint64 extends Int_ {
    constructor() { super(false, 64); }
}
exports.Uint64 = Uint64;
Object.defineProperty(Int8.prototype, 'ArrayType', { value: Int8Array });
Object.defineProperty(Int16.prototype, 'ArrayType', { value: Int16Array });
Object.defineProperty(Int32.prototype, 'ArrayType', { value: Int32Array });
Object.defineProperty(Int64.prototype, 'ArrayType', { value: Int32Array });
Object.defineProperty(Uint8.prototype, 'ArrayType', { value: Uint8Array });
Object.defineProperty(Uint16.prototype, 'ArrayType', { value: Uint16Array });
Object.defineProperty(Uint32.prototype, 'ArrayType', { value: Uint32Array });
Object.defineProperty(Uint64.prototype, 'ArrayType', { value: Uint32Array });
/** @ignore */
class Float extends DataType {
    constructor(precision) {
        super();
        this.precision = precision;
    }
    get typeId() { return enum_1.Type.Float; }
    get ArrayType() {
        switch (this.precision) {
            case enum_1.Precision.HALF: return Uint16Array;
            case enum_1.Precision.SINGLE: return Float32Array;
            case enum_1.Precision.DOUBLE: return Float64Array;
        }
        // @ts-ignore
        throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
    }
    toString() { return `Float${(this.precision << 5) || 16}`; }
}
exports.Float = Float;
Float[Symbol.toStringTag] = ((proto) => {
    proto.precision = null;
    return proto[Symbol.toStringTag] = 'Float';
})(Float.prototype);
/** @ignore */
class Float16 extends Float {
    constructor() { super(enum_1.Precision.HALF); }
}
exports.Float16 = Float16;
/** @ignore */
class Float32 extends Float {
    constructor() { super(enum_1.Precision.SINGLE); }
}
exports.Float32 = Float32;
/** @ignore */
class Float64 extends Float {
    constructor() { super(enum_1.Precision.DOUBLE); }
}
exports.Float64 = Float64;
Object.defineProperty(Float16.prototype, 'ArrayType', { value: Uint16Array });
Object.defineProperty(Float32.prototype, 'ArrayType', { value: Float32Array });
Object.defineProperty(Float64.prototype, 'ArrayType', { value: Float64Array });
/** @ignore */
class Binary extends DataType {
    constructor() {
        super();
    }
    get typeId() { return enum_1.Type.Binary; }
    toString() { return `Binary`; }
}
exports.Binary = Binary;
Binary[Symbol.toStringTag] = ((proto) => {
    proto.ArrayType = Uint8Array;
    return proto[Symbol.toStringTag] = 'Binary';
})(Binary.prototype);
/** @ignore */
class Utf8 extends DataType {
    constructor() {
        super();
    }
    get typeId() { return enum_1.Type.Utf8; }
    toString() { return `Utf8`; }
}
exports.Utf8 = Utf8;
Utf8[Symbol.toStringTag] = ((proto) => {
    proto.ArrayType = Uint8Array;
    return proto[Symbol.toStringTag] = 'Utf8';
})(Utf8.prototype);
/** @ignore */
class Bool extends DataType {
    constructor() {
        super();
    }
    get typeId() { return enum_1.Type.Bool; }
    toString() { return `Bool`; }
}
exports.Bool = Bool;
Bool[Symbol.toStringTag] = ((proto) => {
    proto.ArrayType = Uint8Array;
    return proto[Symbol.toStringTag] = 'Bool';
})(Bool.prototype);
/** @ignore */
class Decimal extends DataType {
    constructor(scale, precision) {
        super();
        this.scale = scale;
        this.precision = precision;
    }
    get typeId() { return enum_1.Type.Decimal; }
    toString() { return `Decimal[${this.precision}e${this.scale > 0 ? `+` : ``}${this.scale}]`; }
}
exports.Decimal = Decimal;
Decimal[Symbol.toStringTag] = ((proto) => {
    proto.scale = null;
    proto.precision = null;
    proto.ArrayType = Uint32Array;
    return proto[Symbol.toStringTag] = 'Decimal';
})(Decimal.prototype);
/** @ignore */
class Date_ extends DataType {
    constructor(unit) {
        super();
        this.unit = unit;
    }
    get typeId() { return enum_1.Type.Date; }
    toString() { return `Date${(this.unit + 1) * 32}<${enum_1.DateUnit[this.unit]}>`; }
}
exports.Date_ = Date_;
Date_[Symbol.toStringTag] = ((proto) => {
    proto.unit = null;
    proto.ArrayType = Int32Array;
    return proto[Symbol.toStringTag] = 'Date';
})(Date_.prototype);
/** @ignore */
class DateDay extends Date_ {
    constructor() { super(enum_1.DateUnit.DAY); }
}
exports.DateDay = DateDay;
/** @ignore */
class DateMillisecond extends Date_ {
    constructor() { super(enum_1.DateUnit.MILLISECOND); }
}
exports.DateMillisecond = DateMillisecond;
/** @ignore */
class Time_ extends DataType {
    constructor(unit, bitWidth) {
        super();
        this.unit = unit;
        this.bitWidth = bitWidth;
    }
    get typeId() { return enum_1.Type.Time; }
    toString() { return `Time${this.bitWidth}<${enum_1.TimeUnit[this.unit]}>`; }
}
exports.Time = Time_;
Time_[Symbol.toStringTag] = ((proto) => {
    proto.unit = null;
    proto.bitWidth = null;
    proto.ArrayType = Int32Array;
    return proto[Symbol.toStringTag] = 'Time';
})(Time_.prototype);
/** @ignore */
class TimeSecond extends Time_ {
    constructor() { super(enum_1.TimeUnit.SECOND, 32); }
}
exports.TimeSecond = TimeSecond;
/** @ignore */
class TimeMillisecond extends Time_ {
    constructor() { super(enum_1.TimeUnit.MILLISECOND, 32); }
}
exports.TimeMillisecond = TimeMillisecond;
/** @ignore */
class TimeMicrosecond extends Time_ {
    constructor() { super(enum_1.TimeUnit.MICROSECOND, 64); }
}
exports.TimeMicrosecond = TimeMicrosecond;
/** @ignore */
class TimeNanosecond extends Time_ {
    constructor() { super(enum_1.TimeUnit.NANOSECOND, 64); }
}
exports.TimeNanosecond = TimeNanosecond;
/** @ignore */
class Timestamp_ extends DataType {
    constructor(unit, timezone) {
        super();
        this.unit = unit;
        this.timezone = timezone;
    }
    get typeId() { return enum_1.Type.Timestamp; }
    toString() { return `Timestamp<${enum_1.TimeUnit[this.unit]}${this.timezone ? `, ${this.timezone}` : ``}>`; }
}
exports.Timestamp = Timestamp_;
Timestamp_[Symbol.toStringTag] = ((proto) => {
    proto.unit = null;
    proto.timezone = null;
    proto.ArrayType = Int32Array;
    return proto[Symbol.toStringTag] = 'Timestamp';
})(Timestamp_.prototype);
/** @ignore */
class TimestampSecond extends Timestamp_ {
    constructor(timezone) { super(enum_1.TimeUnit.SECOND, timezone); }
}
exports.TimestampSecond = TimestampSecond;
/** @ignore */
class TimestampMillisecond extends Timestamp_ {
    constructor(timezone) { super(enum_1.TimeUnit.MILLISECOND, timezone); }
}
exports.TimestampMillisecond = TimestampMillisecond;
/** @ignore */
class TimestampMicrosecond extends Timestamp_ {
    constructor(timezone) { super(enum_1.TimeUnit.MICROSECOND, timezone); }
}
exports.TimestampMicrosecond = TimestampMicrosecond;
/** @ignore */
class TimestampNanosecond extends Timestamp_ {
    constructor(timezone) { super(enum_1.TimeUnit.NANOSECOND, timezone); }
}
exports.TimestampNanosecond = TimestampNanosecond;
/** @ignore */
class Interval_ extends DataType {
    constructor(unit) {
        super();
        this.unit = unit;
    }
    get typeId() { return enum_1.Type.Interval; }
    toString() { return `Interval<${enum_1.IntervalUnit[this.unit]}>`; }
}
exports.Interval = Interval_;
Interval_[Symbol.toStringTag] = ((proto) => {
    proto.unit = null;
    proto.ArrayType = Int32Array;
    return proto[Symbol.toStringTag] = 'Interval';
})(Interval_.prototype);
/** @ignore */
class IntervalDayTime extends Interval_ {
    constructor() { super(enum_1.IntervalUnit.DAY_TIME); }
}
exports.IntervalDayTime = IntervalDayTime;
/** @ignore */
class IntervalYearMonth extends Interval_ {
    constructor() { super(enum_1.IntervalUnit.YEAR_MONTH); }
}
exports.IntervalYearMonth = IntervalYearMonth;
/** @ignore */
class List extends DataType {
    constructor(child) {
        super();
        this.children = [child];
    }
    get typeId() { return enum_1.Type.List; }
    toString() { return `List<${this.valueType}>`; }
    get valueType() { return this.children[0].type; }
    get valueField() { return this.children[0]; }
    get ArrayType() { return this.valueType.ArrayType; }
}
exports.List = List;
List[Symbol.toStringTag] = ((proto) => {
    proto.children = null;
    return proto[Symbol.toStringTag] = 'List';
})(List.prototype);
/** @ignore */
class Struct extends DataType {
    constructor(children) {
        super();
        this.children = children;
    }
    get typeId() { return enum_1.Type.Struct; }
    toString() { return `Struct<{${this.children.map((f) => `${f.name}:${f.type}`).join(`, `)}}>`; }
}
exports.Struct = Struct;
Struct[Symbol.toStringTag] = ((proto) => {
    proto.children = null;
    return proto[Symbol.toStringTag] = 'Struct';
})(Struct.prototype);
/** @ignore */
class Union_ extends DataType {
    constructor(mode, typeIds, children) {
        super();
        this.mode = mode;
        this.children = children;
        this.typeIds = typeIds = Int32Array.from(typeIds);
        this.typeIdToChildIndex = typeIds.reduce((typeIdToChildIndex, typeId, idx) => {
            return (typeIdToChildIndex[typeId] = idx) && typeIdToChildIndex || typeIdToChildIndex;
        }, Object.create(null));
    }
    get typeId() { return enum_1.Type.Union; }
    toString() {
        return `${this[Symbol.toStringTag]}<${this.children.map((x) => `${x.type}`).join(` | `)}>`;
    }
}
exports.Union = Union_;
Union_[Symbol.toStringTag] = ((proto) => {
    proto.mode = null;
    proto.typeIds = null;
    proto.children = null;
    proto.typeIdToChildIndex = null;
    proto.ArrayType = Int8Array;
    return proto[Symbol.toStringTag] = 'Union';
})(Union_.prototype);
/** @ignore */
class DenseUnion extends Union_ {
    constructor(typeIds, children) {
        super(enum_1.UnionMode.Dense, typeIds, children);
    }
}
exports.DenseUnion = DenseUnion;
/** @ignore */
class SparseUnion extends Union_ {
    constructor(typeIds, children) {
        super(enum_1.UnionMode.Sparse, typeIds, children);
    }
}
exports.SparseUnion = SparseUnion;
/** @ignore */
class FixedSizeBinary extends DataType {
    constructor(byteWidth) {
        super();
        this.byteWidth = byteWidth;
    }
    get typeId() { return enum_1.Type.FixedSizeBinary; }
    toString() { return `FixedSizeBinary[${this.byteWidth}]`; }
}
exports.FixedSizeBinary = FixedSizeBinary;
FixedSizeBinary[Symbol.toStringTag] = ((proto) => {
    proto.byteWidth = null;
    proto.ArrayType = Uint8Array;
    return proto[Symbol.toStringTag] = 'FixedSizeBinary';
})(FixedSizeBinary.prototype);
/** @ignore */
class FixedSizeList extends DataType {
    constructor(listSize, child) {
        super();
        this.listSize = listSize;
        this.children = [child];
    }
    get typeId() { return enum_1.Type.FixedSizeList; }
    get valueType() { return this.children[0].type; }
    get valueField() { return this.children[0]; }
    get ArrayType() { return this.valueType.ArrayType; }
    toString() { return `FixedSizeList[${this.listSize}]<${this.valueType}>`; }
}
exports.FixedSizeList = FixedSizeList;
FixedSizeList[Symbol.toStringTag] = ((proto) => {
    proto.children = null;
    proto.listSize = null;
    return proto[Symbol.toStringTag] = 'FixedSizeList';
})(FixedSizeList.prototype);
/** @ignore */
class Map_ extends DataType {
    constructor(child, keysSorted = false) {
        super();
        this.children = [child];
        this.keysSorted = keysSorted;
    }
    get typeId() { return enum_1.Type.Map; }
    get keyType() { return this.children[0].type.children[0].type; }
    get valueType() { return this.children[0].type.children[1].type; }
    toString() { return `Map<{${this.children[0].type.children.map((f) => `${f.name}:${f.type}`).join(`, `)}}>`; }
}
exports.Map_ = Map_;
Map_[Symbol.toStringTag] = ((proto) => {
    proto.children = null;
    proto.keysSorted = null;
    return proto[Symbol.toStringTag] = 'Map_';
})(Map_.prototype);
/** @ignore */
const getId = ((atomicDictionaryId) => () => ++atomicDictionaryId)(-1);
/** @ignore */
class Dictionary extends DataType {
    constructor(dictionary, indices, id, isOrdered) {
        super();
        this.indices = indices;
        this.dictionary = dictionary;
        this.isOrdered = isOrdered || false;
        this.id = id == null ? getId() : typeof id === 'number' ? id : id.low;
    }
    get typeId() { return enum_1.Type.Dictionary; }
    get children() { return this.dictionary.children; }
    get valueType() { return this.dictionary; }
    get ArrayType() { return this.dictionary.ArrayType; }
    toString() { return `Dictionary<${this.indices}, ${this.dictionary}>`; }
}
exports.Dictionary = Dictionary;
Dictionary[Symbol.toStringTag] = ((proto) => {
    proto.id = null;
    proto.indices = null;
    proto.isOrdered = null;
    proto.dictionary = null;
    return proto[Symbol.toStringTag] = 'Dictionary';
})(Dictionary.prototype);
/** @ignore */
function strideForType(type) {
    let t = type;
    switch (type.typeId) {
        case enum_1.Type.Decimal: return 4;
        case enum_1.Type.Timestamp: return 2;
        case enum_1.Type.Date: return 1 + t.unit;
        case enum_1.Type.Interval: return 1 + t.unit;
        case enum_1.Type.Int: return 1 + +(t.bitWidth > 32);
        case enum_1.Type.Time: return 1 + +(t.bitWidth > 32);
        case enum_1.Type.FixedSizeList: return t.listSize;
        case enum_1.Type.FixedSizeBinary: return t.byteWidth;
        default: return 1;
    }
}
exports.strideForType = strideForType;

//# sourceMappingURL=type.js.map
