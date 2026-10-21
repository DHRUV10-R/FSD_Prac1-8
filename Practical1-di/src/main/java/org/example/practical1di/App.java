
package org.example.practical1di;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class App {
    public static void main(String[] args) {
        try (var context =
                     new AnnotationConfigApplicationContext(AppConfig.class)) {

            Notification notification =
                    context.getBean(Notification.class);

            notification.notifyUser();
        }
    }
}
