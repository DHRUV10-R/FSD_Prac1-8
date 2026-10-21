
package org.example.practical1di;

import org.springframework.stereotype.Component;

@Component
public class MessageService {

    public String getMessage() {
        return "Hello! This is a message from MessageService.";
    }
}
