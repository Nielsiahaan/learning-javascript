// class WhatsAppService {
//     constructor(sender) {
//         this.sender = sender
//     }
//
//     sendMessage(message, receiver){
//         console.log(`${this.sender} sent ${message} to ${receiver}`)
//     }
//
//
//     sendBroadcastMessage(message, receivers){
//         for (const receiver of receivers) {
//             this.sendMessage(message, receiver)
//         }
//     }
// }
//
//
// class EmailService {
//     constructor(sender) {
//         this.sender = sender
//     }
//
//     sendMessage(message, receiver){
//         console.log(`${this.sender} sent ${message} to ${receiver}`)
//     }
//
//     sendDelayedMesssage(message, receiver, delay){
//         setTimeout(() =>{
//             this.sendMessage(message, receiver)
//         }, delay)
//     }
// }

// The problem is: duplicate the same code SendMessage in both class
// superclass
class MailService {
    constructor(sender) {
        this.sender = sender
    }

    sendMessage(message, receiver) {
        console.log(`${this.sender} sent ${message} to ${receiver}`)
    }
}

// subClass
class WhatsAppService extends MailService {
    sendBroadcastMessage(message, receivers) {
        for (const receiver of receivers) {
            this.sendMessage(message, receiver)
        }
    }
}

// subclass
class EmailService extends MailService {
    sendDelayMessage(message, receiver, delay) {
        setTimeout(() => {
            this.sendMessage(message, receiver)
        }, delay)
    }
}

const whatsapp = new WhatsAppService('+6281234567890');
const email = new EmailService('dimas@dicoding.com');

whatsapp.sendMessage('Hello', '+6289876543210');
whatsapp.sendBroadcastMessage('Hello', ['+6289876543210', '+6282234567890']);
// whatsapp.sendDelayedMessage(); // Error

email.sendMessage('Hello', 'john@doe.com');
email.sendDelayMessage('Hello', 'john@doe.com', 3000);
// email.sendBroadcastMessage(); // Error