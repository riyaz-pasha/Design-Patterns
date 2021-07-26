package creational.factoryMethod;

interface Notification {
    void notifyUser();
}

class EmailNotification implements Notification {
    @Override
    public void notifyUser() {
        System.out.println("Notified via email");
    }
}

class SMSNotification implements Notification {
    @Override
    public void notifyUser() {
        System.out.println("Notified via SMS");
    }
}

class PushNotification implements Notification {
    @Override
    public void notifyUser() {
        System.out.println("Notified via Push Notification");
    }
}

enum NotificationType {
    EMAIL,
    PUSH_NOTIFICATION,
    SMS
}

public class NotificationFactory {
    public static Notification createNotification(NotificationType notificationType) {
        switch (notificationType) {
            case SMS:
                return new SMSNotification();
            case PUSH_NOTIFICATION:
                return new PushNotification();
            default:
                return new EmailNotification();
        }
    }
}

class NotificationMain {
    public static void main(String[] args) {
        Notification notification = NotificationFactory.createNotification(NotificationType.EMAIL);
        notification.notifyUser();
    }
}