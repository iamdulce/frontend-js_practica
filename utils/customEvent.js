export const createCustomEvent = name => {
    const event = new CustomEvent(name);
    return event;
};

export const dispatchCustomEvent = (eventName, element) => {
    const event = new CustomEvent(eventName);
    element.dispatchEvent(event);
};
