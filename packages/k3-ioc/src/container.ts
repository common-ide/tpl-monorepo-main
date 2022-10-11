import 'reflect-metadata'
import { Container } from "inversify";

declare global {
    interface Window {
        canvasContainer: Container;
    }
}

const canvasContainer = window.canvasContainer || new Container();

if (!window.canvasContainer) {
    window.canvasContainer = canvasContainer;
}

export {
    canvasContainer
}
