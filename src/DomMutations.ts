export class DomMutations {


    static isMobile() {
        return $.browser.mobile;
    }

    static templates = $.templates;

    static addViewHelpers(obj: any) {
        return $.views.helpers(obj);
    }

}
