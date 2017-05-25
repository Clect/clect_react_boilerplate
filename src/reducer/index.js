const initialState = {
    text: 'Hello everyone',
    counter: 0
};

export function myApp(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_TEXT':
            return {
                text: state.text === 'Hello' ? 'Stark' : 'Hello'
            };
        case 'BUTTON_CLICK':
            return {
                text: 'You just click button'
            };
        case 'BUTTON_INCRESASE':
            return {
                counter: state.counter + 1,
                text: 'Increse'
            };
        default:
            return {
                text: 'Hello world',
                counter: state.counter
            };
    }
}
