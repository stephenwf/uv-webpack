export class Dispatcher {

    static publish(event: string, eventObj?: any[]): void {
        $.publish(event, eventObj);
    }
    static subscribe(event: string, handler: Function): void {
        $.subscribe(event, handler);
    }
    static unsubscribe(event: string): void {
        $.unsubscribe(event);
    }
    static initPubSub(): void {
        $.initPubSub();
    }
    static disposePubSub(): void {
        $.disposePubSub();
    }

}
