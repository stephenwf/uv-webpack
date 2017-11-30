define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BaseEvents = /** @class */ (function () {
        function BaseEvents() {
        }
        BaseEvents.ACCEPT_TERMS = 'acceptTerms';
        BaseEvents.ANNOTATION_CANVAS_CHANGED = 'annotationCanvasChanged';
        BaseEvents.ANNOTATION_CHANGED = 'annotationChanged';
        BaseEvents.ANNOTATIONS_CLEARED = 'annotationsCleared';
        BaseEvents.ANNOTATIONS_EMPTY = 'annotationsEmpty';
        BaseEvents.ANNOTATIONS = 'annotations';
        BaseEvents.BOOKMARK = 'bookmark';
        BaseEvents.CANVAS_INDEX_CHANGE_FAILED = 'canvasIndexChangeFailed';
        BaseEvents.CANVAS_INDEX_CHANGED = 'canvasIndexChanged';
        BaseEvents.CLEAR_ANNOTATIONS = 'clearAnnotations';
        BaseEvents.CLICKTHROUGH = 'clickthrough';
        BaseEvents.CLOSE_ACTIVE_DIALOGUE = 'closeActiveDialogue';
        BaseEvents.CLOSE_LEFT_PANEL = 'closeLeftPanel';
        BaseEvents.CLOSE_RIGHT_PANEL = 'closeRightPanel';
        BaseEvents.COLLECTION_INDEX_CHANGED = 'collectionIndexChanged';
        BaseEvents.CREATE = 'create';
        BaseEvents.CREATED = 'created';
        BaseEvents.DOWN_ARROW = 'downArrow';
        BaseEvents.DOWNLOAD = 'download';
        BaseEvents.DROP = 'drop';
        BaseEvents.END = 'end';
        BaseEvents.ERROR = 'error';
        BaseEvents.ESCAPE = 'escape';
        BaseEvents.EXIT_FULLSCREEN = 'exitFullScreen';
        BaseEvents.EXTERNAL_LINK_CLICKED = 'externalLinkClicked';
        BaseEvents.FEEDBACK = 'feedback';
        BaseEvents.FIRST = 'first';
        BaseEvents.FORBIDDEN = 'forbidden';
        BaseEvents.GALLERY_DECREASE_SIZE = 'galleryDecreaseSize';
        BaseEvents.GALLERY_INCREASE_SIZE = 'galleryIncreaseSize';
        BaseEvents.GALLERY_THUMB_SELECTED = 'galleryThumbSelected';
        BaseEvents.HIDE_AUTH_DIALOGUE = 'hideAuthDialogue';
        BaseEvents.HIDE_CLICKTHROUGH_DIALOGUE = 'hideClickthroughDialogue';
        BaseEvents.HIDE_DOWNLOAD_DIALOGUE = 'hideDownloadDialogue';
        BaseEvents.HIDE_EMBED_DIALOGUE = 'hideEmbedDialogue';
        BaseEvents.HIDE_EXTERNALCONTENT_DIALOGUE = 'hideExternalContentDialogue';
        BaseEvents.HIDE_GENERIC_DIALOGUE = 'hideGenericDialogue';
        BaseEvents.HIDE_HELP_DIALOGUE = 'hideHelpDialogue';
        BaseEvents.HIDE_INFORMATION = 'hideInformation';
        BaseEvents.HIDE_LOGIN_DIALOGUE = 'hideLoginDialogue';
        BaseEvents.HIDE_MOREINFO_DIALOGUE = 'hideMoreInfoDialogue';
        BaseEvents.HIDE_MULTISELECT_DIALOGUE = 'hideMultiSelectDialogue';
        BaseEvents.HIDE_OVERLAY = 'hideOverlay';
        BaseEvents.HIDE_RESTRICTED_DIALOGUE = 'hideRestrictedDialogue';
        BaseEvents.HIDE_SETTINGS_DIALOGUE = 'hideSettingsDialogue';
        BaseEvents.HIDE_SHARE_DIALOGUE = 'hideShareDialogue';
        BaseEvents.HOME = 'home';
        BaseEvents.LAST = 'last';
        BaseEvents.LEFT_ARROW = 'leftArrow';
        BaseEvents.LEFTPANEL_COLLAPSE_FULL_FINISH = 'leftPanelCollapseFullFinish';
        BaseEvents.LEFTPANEL_COLLAPSE_FULL_START = 'leftPanelCollapseFullStart';
        BaseEvents.LEFTPANEL_EXPAND_FULL_FINISH = 'leftPanelExpandFullFinish';
        BaseEvents.LEFTPANEL_EXPAND_FULL_START = 'leftPanelExpandFullStart';
        BaseEvents.LOAD_FAILED = 'loadFailed';
        BaseEvents.LOGIN_FAILED = 'loginFailed';
        BaseEvents.LOGIN = 'login';
        BaseEvents.LOGOUT = 'logout';
        BaseEvents.MANIFEST_INDEX_CHANGED = 'manifestIndexChanged';
        BaseEvents.METRIC_CHANGED = 'metricChanged';
        BaseEvents.MINUS = 'minus';
        BaseEvents.MULTISELECT_CHANGE = 'multiSelectChange';
        BaseEvents.MULTISELECTION_MADE = 'multiSelectionMade';
        BaseEvents.NEXT = 'next';
        BaseEvents.NOT_FOUND = 'notFound';
        BaseEvents.OPEN_EXTERNAL_RESOURCE = 'openExternalResource';
        BaseEvents.OPEN_LEFT_PANEL = 'openLeftPanel';
        BaseEvents.OPEN_RIGHT_PANEL = 'openRightPanel';
        BaseEvents.OPEN_THUMBS_VIEW = 'openThumbsView';
        BaseEvents.OPEN_TREE_VIEW = 'openTreeView';
        BaseEvents.OPEN = 'open';
        BaseEvents.PAGE_DOWN = 'pageDown';
        BaseEvents.PAGE_UP = 'pageUp';
        BaseEvents.PLUS = 'plus';
        BaseEvents.PREV = 'prev';
        BaseEvents.REDIRECT = 'redirect';
        BaseEvents.REFRESH = 'refresh';
        BaseEvents.RELOAD = 'reload';
        BaseEvents.RESIZE = 'resize';
        BaseEvents.RESOURCE_DEGRADED = 'resourceDegraded';
        BaseEvents.RETRY = 'retry';
        BaseEvents.RETURN = 'return';
        BaseEvents.RIGHT_ARROW = 'rightArrow';
        BaseEvents.RIGHTPANEL_COLLAPSE_FULL_FINISH = 'rightPanelCollapseFullFinish';
        BaseEvents.RIGHTPANEL_COLLAPSE_FULL_START = 'rightPanelCollapseFullStart';
        BaseEvents.RIGHTPANEL_EXPAND_FULL_FINISH = 'rightPanelExpandFullFinish';
        BaseEvents.RIGHTPANEL_EXPAND_FULL_START = 'rightPanelExpandFullStart';
        BaseEvents.SEQUENCE_INDEX_CHANGED = 'sequenceIndexChanged';
        BaseEvents.SETTINGS_CHANGED = 'settingsChanged';
        BaseEvents.SHOW_AUTH_DIALOGUE = 'showAuthDialogue';
        BaseEvents.SHOW_CLICKTHROUGH_DIALOGUE = 'showClickThroughDialogue';
        BaseEvents.SHOW_DOWNLOAD_DIALOGUE = 'showDownloadDialogue';
        BaseEvents.SHOW_EMBED_DIALOGUE = 'showEmbedDialogue';
        BaseEvents.SHOW_EXTERNALCONTENT_DIALOGUE = 'showExternalContentDialogue';
        BaseEvents.SHOW_GENERIC_DIALOGUE = 'showGenericDialogue';
        BaseEvents.SHOW_HELP_DIALOGUE = 'showHelpDialogue';
        BaseEvents.SHOW_INFORMATION = 'showInformation';
        BaseEvents.SHOW_LOGIN_DIALOGUE = 'showLoginDialogue';
        BaseEvents.SHOW_MESSAGE = 'showMessage';
        BaseEvents.SHOW_MOREINFO_DIALOGUE = 'showMoreInfoDialogue';
        BaseEvents.SHOW_MULTISELECT_DIALOGUE = 'showMultiSelectDialogue';
        BaseEvents.SHOW_OVERLAY = 'showOverlay';
        BaseEvents.SHOW_RESTRICTED_DIALOGUE = 'showRestrictedDialogue';
        BaseEvents.SHOW_SETTINGS_DIALOGUE = 'showSettingsDialogue';
        BaseEvents.SHOW_SHARE_DIALOGUE = 'showShareDialogue';
        BaseEvents.SHOW_TERMS_OF_USE = 'showTermsOfUse';
        BaseEvents.THUMB_MULTISELECTED = 'thumbMultiSelected';
        BaseEvents.THUMB_SELECTED = 'thumbSelected';
        BaseEvents.TOGGLE_EXPAND_LEFT_PANEL = 'toggleExpandLeftPanel';
        BaseEvents.TOGGLE_EXPAND_RIGHT_PANEL = 'toggleExpandRightPanel';
        BaseEvents.TOGGLE_FULLSCREEN = 'toggleFullScreen';
        BaseEvents.TREE_NODE_MULTISELECTED = 'treeNodeMultiSelected';
        BaseEvents.TREE_NODE_SELECTED = 'treeNodeSelected';
        BaseEvents.UP_ARROW = 'upArrow';
        BaseEvents.UPDATE_SETTINGS = 'updateSettings';
        BaseEvents.VIEW_FULL_TERMS = 'viewFullTerms';
        BaseEvents.WINDOW_UNLOAD = 'windowUnload';
        return BaseEvents;
    }());
    exports.BaseEvents = BaseEvents;
});
//# sourceMappingURL=BaseEvents.js.map