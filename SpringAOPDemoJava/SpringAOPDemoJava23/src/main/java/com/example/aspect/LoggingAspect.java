package com.example.aspect;
import org.aspectj.lang.annotation.*;import org.springframework.stereotype.Component;
@Aspect
@Component
public class LoggingAspect
{
@Before("execution(* com.example.service.StudentService.display(..))")
public void b()
{
    System.out.println("Before Method Execution");
}
@After("execution(* com.example.service.StudentService.display(..))")
public void a()
{
    System.out.println("After Method Execution");
}
}