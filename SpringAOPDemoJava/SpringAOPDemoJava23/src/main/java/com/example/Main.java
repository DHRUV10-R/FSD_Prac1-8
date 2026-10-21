package com.example;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import com.example.service.StudentService;
public class Main
{
    public static void main(String[]a)
{
    var c=new AnnotationConfigApplicationContext(AppConfig.class);
    c.getBean(StudentService.class).display();
    c.close();
}
}