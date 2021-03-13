import { Notifyer } from './Notifyer.js'
import { Timer } from './Timer.js'
import { Emitter } from './Emitter.js'

const App = {
    async start()
    {
        try
        {
            await Notifyer.init()

            Emitter.on('countdown-start', () => {
                Notifyer.notify(
                    {
                        title: 'Hora do post',
                        body: 'Crie algum conteúdo para ajudar a comunidade'
                    }
                )
            })

            Emitter.on('countdown-end', () => { Timer.init() })

            Timer.init()
        }
        catch (error)
        {
            console.log(error.message)
        }
    }
}

export { App }