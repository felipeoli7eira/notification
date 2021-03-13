const Emitter = {
    events: {},

    on(eventName, callback)
    {
        Emitter.events[eventName] = Emitter.events[eventName] || []
        Emitter.events[eventName].push(callback)
    },

    emit(event, ...args)
    {
        if (event in Emitter.events === false)
        {
            return
        }

        Emitter.events[event].forEach(event => {
            event(...args)
        })
    }
}

export { Emitter }