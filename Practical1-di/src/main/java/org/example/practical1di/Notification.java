
package org.example.practical1di;

import org.springframework.stereotype.Component;

@Component
public class Notification {

    private final MessageService messageService;

    public Notification(MessageService messageService) {
        this.messageService = messageService;
    }

    public void notifyUser() {
        System.out.println(messageService.getMessage());
    }
}
