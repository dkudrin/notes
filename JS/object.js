declare class Object {
    static (o: string): String;
    static (o: number): Number;
    static (o: boolean): Boolean;
    static (o: ?void): {[key: any]: any};
    static <T: Object>(o: T): T;
    static getPrototypeOf(o: any): any; // compiler magic
    static getOwnPropertyDescriptor(o: any, p: any): any;
    static getOwnPropertyNames(o: any): Array<string>;
    static create(o: any, properties?: any): any; // compiler magic
    static defineProperty(o: any, p: any, attributes: any): any;
    static defineProperties(o: any, properties: any): any;
    static seal(o: any): any;
    static freeze<T>(o: T): T;
    static preventExtensions(o: any): any;
    static is(a: any, b: any): boolean;
    static isSealed(o: any): boolean;
    static isFrozen(o: any): boolean;
    static isExtensible(o: any): boolean;
    static keys(o: any): Array<string>;
    static entries(o: any): Array<any>;
    static values(value : any): Array<any>;
    static assign(target: any, ...sources: Array<any>): any;
    hasOwnProperty(prop: any): boolean;
    propertyIsEnumerable(prop: any): boolean;
    toLocaleString(): string;
    toString(): string;
    valueOf(): Object;
    [key:any]: any;
}
