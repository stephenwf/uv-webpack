// Generated by typings
// Source: https://raw.githubusercontent.com/edsilv/utils/v0.1.0/dist/utils.d.ts
interface CanvasRenderingContext2D {
    webkitBackingStorePixelRatio: any;
    mozBackingStorePixelRatio: any;
    msBackingStorePixelRatio: any;
    oBackingStorePixelRatio: any;
    backingStorePixelRatio: any;
}
interface HTMLElement {
    mozRequestFullScreen: any;
    msRequestFullscreen: any;
}

declare namespace Utils {
    class Async {
        static waitFor(test: () => boolean, successCallback: () => void, failureCallback?: () => void, interval?: number, maxTries?: number, numTries?: number): void;
    }
}

declare namespace Utils {
    class Bools {
        static getBool(val: any, defaultVal: boolean): boolean;
    }
}

declare namespace Utils {
    class Clipboard {
        static copy(text: string): void;
        static supportsCopy(): boolean;
    }
}

declare namespace Utils {
    class Colors {
        static float32ColorToARGB(float32Color: number): number[];
        private static _componentToHex(c);
        static rgbToHexString(rgb: number[]): string;
        static argbToHexString(argb: number[]): string;
        static coalesce(arr: any[]): void;
    }
}

declare namespace Utils {
    class Dates {
        static getTimeStamp(): number;
    }
}

declare namespace Utils {
    class Device {
        static getPixelRatio(ctx: CanvasRenderingContext2D): number;
        static isTouch(): boolean;
    }
}

declare namespace Utils {
    class Documents {
        static isInIFrame(): boolean;
        static supportsFullscreen(): boolean;
        static isHidden(): boolean;
        static getHiddenProp(): string | null;
    }
}

declare namespace Utils {
    class Events {
        static debounce(fn: any, debounceDuration: number): any;
    }
}

declare namespace Utils {
    class Files {
        static simplifyMimeType(mime: string): string;
    }
}

declare namespace Utils {
    class Keyboard {
        static getCharCode(e: KeyboardEvent): number;
    }
}

declare namespace Utils.Maths {
    class Vector {
        X: number;
        Y: number;
        constructor(x: number, y: number);
        get(): Vector;
        set(x: number, y: number): void;
        add(v: Vector): void;
        static add(v1: Vector, v2: Vector): Vector;
        sub(v: Vector): void;
        static sub(v1: Vector, v2: Vector): Vector;
        mult(n: number): void;
        static mult(v1: Vector, v2: Vector): Vector;
        static multN(v1: Vector, n: number): Vector;
        Div(n: number): void;
        static div(v1: Vector, v2: Vector): Vector;
        static divN(v1: Vector, n: number): Vector;
        mag(): number;
        magSq(): number;
        normalise(): void;
        limit(max: number): void;
        equals(v: Vector): boolean;
        heading(): number;
        static random2D(): Vector;
        static fromAngle(angle: number): Vector;
    }
}

declare namespace Utils.Measurements {
    class Size {
        width: number;
        height: number;
        constructor(width: number, height: number);
    }
    class Dimensions {
        static fitRect(width1: number, height1: number, width2: number, height2: number): Size;
        static hitRect(x: number, y: number, w: number, h: number, mx: number, my: number): boolean;
    }
}

declare namespace Utils {
    class Numbers {
        static numericalInput(event: any): boolean;
    }
}

declare namespace Utils {
    class Objects {
        static toPlainObject(value: any): any;
    }
}

declare namespace Utils {
    class Storage {
        private static _memoryStorage;
        static clear(storageType?: StorageType): void;
        static clearExpired(storageType?: StorageType): void;
        static get(key: string, storageType?: StorageType): StorageItem | null;
        private static _isExpired(item);
        static getItems(storageType?: StorageType): StorageItem[];
        static remove(key: string, storageType?: StorageType): void;
        static set(key: string, value: any, expirationSecs: number, storageType?: StorageType): StorageItem;
    }
}

declare namespace Utils {
    class StorageItem {
        key: string;
        value: any;
        expiresAt: number;
    }
}

declare namespace Utils {
    class StorageType {
        value: string;
        static memory: StorageType;
        static session: StorageType;
        static local: StorageType;
        constructor(value: string);
        toString(): string;
    }
}

declare namespace Utils {
    class Strings {
        static ellipsis(text: string, chars: number): string;
        static htmlDecode(encoded: string): string;
    }
}

declare namespace Utils {
    class Urls {
        static getHashParameter(key: string, doc?: Document): string | null;
        static setHashParameter(key: string, value: string, doc?: Document): void;
        static getQuerystringParameter(key: string, w?: Window): string | null;
        static getQuerystringParameterFromString(key: string, querystring: string): string | null;
        static setQuerystringParameter(key: string, value: any, doc?: Document): void;
        static updateURIKeyValuePair(uriSegment: string, key: string, value: string): string;
        static getUrlParts(url: string): HTMLAnchorElement;
        static convertToRelativeUrl(url: string): string;
    }
}
