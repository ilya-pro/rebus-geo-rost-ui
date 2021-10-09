interface ITemplateLayoutFactory {
    createClass: Function;
}

//https://yandex.ru/dev/maps/jsapi/doc/2.1/ref/reference/Map.html#Map__param-state
interface IYMapState {
    center: [number, number];
    zoom: number;
    controls?: string[]
}

//https://yandex.ru/dev/maps/jsapi/doc/2.1/ref/reference/Map.html#Map__param-options
interface IYMapOptions {

}

//https://yandex.ru/dev/maps/jsapi/doc/2.1/ref/reference/Map.html
export interface IYMap {

}

export interface IYmaps {
    ready: Function;
    //Map: any;
    Map: new (name: string, state: IYMapState, options: IYMapOptions) => IYMap

    templateLayoutFactory: ITemplateLayoutFactory;
    // update
    //Placemark: new () => {};
    Placemark: any;
}
