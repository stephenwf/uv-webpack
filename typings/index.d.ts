/// <reference path="globals/base-component/index.d.ts" />
/// <reference path="globals/exjs/index.d.ts" />
/// <reference path="globals/extensions/index.d.ts" />
/// <reference path="globals/http-status-codes/index.d.ts" />
/// <reference path="globals/iiif-gallery-component/index.d.ts" />
/// <reference path="globals/iiif-metadata-component/index.d.ts" />
/// <reference path="globals/iiif-tree-component/index.d.ts" />
/// <reference path="globals/jquery-plugins/index.d.ts" />
/// <reference path="globals/key-codes/index.d.ts" />
/// <reference path="globals/manifesto.js/index.d.ts" />
/// <reference path="globals/manifold/index.d.ts" />
/// <reference path="globals/utils/index.d.ts" />
/// <reference path="globals/virtex/index.d.ts" />

interface Array<T> {
    find(search: Function): T;
    findIndex(search: Function): number;
}

interface JQueryStatic {
    // PubSub
    publish(event: string, eventObj?: any[]): void;
    subscribe(event: string, handler: Function): void;
    unsubscribe(event: string): void;
    initPubSub(): void;
    disposePubSub(): void;

    // jsviews
    observable: any;
    templates: any;
    views: any;
    view: any;

    // detect mobile browser
    browser: any;
}

interface Window {
    configExtensionCallback: any;
    browserDetect: any;
    trackEvent(category: string, action: string, label: string, value?: any): void;
    trackVariable(slot: number, name: string, value: string, scope: number): void;
    trackingLabel: string;
    $: JQueryStatic;
    webViewerLoad: any; // pdfjs
    openSeadragonViewer: any; // for testing convenience (make this generic)
    PDFObject: any;
    UV: any;
    THREE: any;
    Event: any;
    CustomEvent: any;
}
