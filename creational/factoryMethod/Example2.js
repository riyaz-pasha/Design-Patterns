"use strict";
exports.__esModule = true;
var SMSNotification = /** @class */ (function () {
    function SMSNotification() {
    }
    SMSNotification.prototype.notifyUser = function () {
        console.log("Notifying by sms");
    };
    return SMSNotification;
}());
var EmailNotification = /** @class */ (function () {
    function EmailNotification() {
    }
    EmailNotification.prototype.notifyUser = function () {
        console.log("Notifying by Email");
    };
    return EmailNotification;
}());
var PushNotification = /** @class */ (function () {
    function PushNotification() {
    }
    PushNotification.prototype.notifyUser = function () {
        console.log("Notifying by Push notifications");
    };
    return PushNotification;
}());
var NotificationFactory = /** @class */ (function () {
    function NotificationFactory() {
    }
    NotificationFactory.prototype.createNotification = function (channel) {
        if (channel.includes("sms"))
            return new SMSNotification();
        else if (channel.includes("email"))
            return new EmailNotification();
        return new PushNotification();
    };
    return NotificationFactory;
}());
var notificationService = new NotificationFactory();
var notification = notificationService.createNotification("sms");
notification.notifyUser();
