const initialState = {
    text: 'Hello',
    counter:0
};

export function myApp(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_TEXT':
            return {
                text:state.text=='Hello'?'Stark':'Hello'
            }
        case 'BUTTON_CLICK':
            return {
                text: 'You just click button'
            }
        case 'BUTTON_INCRESASE':
        return {
            counter: state.counter++
        }
        default:
          return {
            text:'Hello world'
        };
    }
}