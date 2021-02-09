export { }

interface Notification {
    notifyUser(): void
}

class SMSNotification implements Notification {
    notifyUser(): void {
        console.log("Notifying by sms");
    }
}

class EmailNotification implements Notification {
    notifyUser() {
        console.log("Notifying by Email");
    }
}

class PushNotification implements Notification {
    notifyUser(): void {
        console.log("Notifying by Push notifications")
    }
}

class NotificationFactory {
    createNotification(channel: string) {
        if (channel.includes("sms")) return new SMSNotification();
        else if (channel.includes("email")) return new EmailNotification();
        return new PushNotification();
    }
}

const notificationService = new NotificationFactory();
const notification = notificationService.createNotification("sms");
notification.notifyUser();