import {IExtension} from "./IExtension"
import {IUVDataProvider} from "./IUVDataProvider";

export interface IUVComponent extends _Components.IBaseComponent {
    extension: IExtension | null;
    isFullScreen: boolean;
    URLDataProvider: IUVDataProvider;
    resize(): void;
    exitFullScreen(): void;
}
