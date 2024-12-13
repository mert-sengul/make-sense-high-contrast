import {ISize} from '../interfaces/ISize';
import {Settings} from './Settings';

export class RenderEngineSettings {
    public static readonly LINE_THICKNESS: number = 2;
    public static readonly lineActiveColor: string = '#ff0000';
    public static readonly defaultLineColor: string = '#ff0000';
    public static readonly CROSS_HAIR_LINE_COLOR: string = '#ff0000';
    public static readonly crossHairPadding: number = 25;
    public static readonly anchorSize: ISize = {
        width: Settings.RESIZE_HANDLE_DIMENSION_PX,
        height: Settings.RESIZE_HANDLE_DIMENSION_PX
    };
    public static readonly anchorHoverSize: ISize = {
        width: Settings.RESIZE_HANDLE_HOVER_DIMENSION_PX,
        height: Settings.RESIZE_HANDLE_HOVER_DIMENSION_PX
    };
    public static readonly suggestedAnchorDetectionSize: ISize = {
        width: 100,
        height: 100
    };
    public static readonly defaultAnchorColor: string = '#ff0000';
    public static readonly inactiveAnchorColor: string = '#ff0000';

    public static readonly DEFAULT_ANCHOR_COLOR: string = '#ff0000';
    public static readonly ACTIVE_ANCHOR_COLOR: string = '#ff0000';
    public static readonly INACTIVE_ANCHOR_COLOR: string = '#ff0000';

    public static readonly DEFAULT_LINE_COLOR: string = '#ff0000';
    public static readonly ACTIVE_LINE_COLOR: string = '#ff0000';
    public static readonly INACTIVE_LINE_COLOR: string = '#ff0000';
}
