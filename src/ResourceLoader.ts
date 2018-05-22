type ResourceLoaderCallback = () => {}

interface ResourceLoader {
    load(): void;
    subscribe(resource: string, callback: ResourceLoaderCallback);
    notify();
};