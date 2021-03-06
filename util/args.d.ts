import { Field } from '../schema';
import { Column } from '../column';
import { Vector } from '../vector';
import { DataType } from '../type';
declare type RecordBatchCtor = typeof import('../recordbatch').RecordBatch;
/** @ignore */
export declare const selectArgs: <T>(Ctor: any, vals: any[]) => T[];
/** @ignore */
export declare const selectColumnArgs: <T extends {
    [key: string]: DataType<import("../enum").Type, any>;
}>(args: any[]) => Column<any>[];
/** @ignore */
export declare const selectFieldArgs: <T extends {
    [key: string]: DataType<import("../enum").Type, any>;
}>(args: any[]) => [Field<T[keyof T]>[], (T[keyof T] | Vector<T[keyof T]>)[]];
/** @ignore */
export declare const selectChunkArgs: <T>(Ctor: any, vals: any[]) => T[];
/** @ignore */
export declare const selectVectorChildrenArgs: <T extends Vector<any>>(Ctor: RecordBatchCtor, vals: any[]) => T[];
/** @ignore */
export declare const selectColumnChildrenArgs: <T extends Column<any>>(Ctor: RecordBatchCtor, vals: any[]) => T[];
export {};
