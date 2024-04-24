import { config } from 'dotenv'
config()
const TelegramBot = require('node-telegram-bot-api');

export class TelegramMessageDto {
    message_id: number
    from: {
        id: number
        is_bot: boolean
        first_name: string
        username: string
        language_code: string
    }
    chat: {
        id: number
        title: string
        type: string
    }
    date: number
    text: string
}


function main() {
    const bot = new TelegramBot('6687905252:AAFNFVWQGUarI7_LUSRAVPXRAGCwWKOhtK8', { polling: true });

    bot.on('message', async (msg: TelegramMessageDto) => {
        const chatId = msg.chat.id;
        console.log(chatId)

        if (msg.from.username === 'I_V_I0_0I_V_I') {
            // const response = await gptService.generateResponse(msg.text)
            // console.log(response)
            bot.sendMessage(chatId, 'Привет Вова')
        }

        if (msg.text && msg.text.includes('/hello')) {
            bot.sendMessage(chatId, 'Привет! Как дела?');
        }
        if (msg.text && msg.text.includes('эрни')) {
            bot.sendMessage(chatId, `${chatId}`)
        }
    });

    function sendMessage(chatId: number, message: string) {
        bot.sendMessage(chatId, message);
    }
}

main()

// export class TaskBot {
//     private readonly bot;

//     constructor(
//         private telegramService: TelegramBotService
//     ) { }

//     @Cron(CronExpression.EVERY_5_MINUTES)
//     handleBirth() {
//         const currentDate = new Date();
//         const currentYear = currentDate.getFullYear();
//         const nextBirthday = new Date(currentYear, 3, 29);

//         if (currentDate.getTime() > nextBirthday.getTime()) {
//             nextBirthday.setFullYear(currentYear + 1);
//         }

//         const timeUntilBirthday = nextBirthday.getTime() - currentDate.getTime();

//         const daysUntilBirthday = Math.ceil(timeUntilBirthday / (1000 * 3600));

//         this.telegramService.sendMessage(-1002062879534, `До 29 годиков осталось ${daysUntilBirthday} часов!`);
//     }
// }
