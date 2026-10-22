# FSD_Prac1-8

https://chatgpt.com/share/6ad90563-33f8-83e8-b2b5-21f59836ad2f



### Spring Practical 1: Dependency Injection Using XML Configuration

Aim: To demonstrate how the Spring IoC (Inversion of Control) Container injects dependencies using constructor injection and setter injection via XML configuration.

We'll use the Spring Initializr ZIP project you generated earlier, but this practical uses traditional XML-based Spring configuration rather than annotation-based component scanning.

### Step 1: Generate the project

Open [Spring Initializr](https://start.spring.io/?utm_source=chatgpt.com) and select:

| Setting    | Value          |
| ---------- | -------------- |
| Project    | Maven          |
| Language   | Java           |
| Group      | com.example    |
| Artifact   | practical1-di  |
| Packaging  | Jar            |
| Java       | 17 or later    |
| Dependency | Spring Context |

Click Generate, extract the ZIP, and open the extracted folder in VS Code.

If Spring Context is not available in the dependency search, the project can be generated without dependencies and the Maven dependency added manually in the next step.

### Step 2: Configure `pom.xml`

Open `pom.xml` and ensure the following dependency is present inside `<dependencies>`. Keep any existing project metadata unchanged.

```xml

<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context</artifactId>
    <version>6.2.8</version>
</dependency>
```

### Step 3: Create the project structure

Create these files inside your project:

```text
practical1-di/
├── pom.xml
└── src/
    └── main/
        ├── java/
        │   └── com/example/
        │       ├── Student.java
        │       └── MainApp.java
        └── resources/
            └── beans.xml
```

### Step 4: Create `Student.java`

This class demonstrates both constructor and setter injection.

```java

package com.example;

public class Student {

    private String name;
    private String course;

    // Constructor injection
    public Student(String name) {
        this.name = name;
    }

    // Setter injection
    public void setCourse(String course) {
        this.course = course;
    }

    public void display() {
        System.out.println("Student Name: " + name);
        System.out.println("Course: " + course);
    }
}
```

### Step 5: Create `beans.xml`

Save this file inside `src/main/resources/beans.xml`.

```xml

<?xml version="1.0" encoding="UTF-8"?>

<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="
       http://www.springframework.org/schema/beans
       https://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean id="student" class="com.example.Student">

        <!-- Constructor Injection -->
        <constructor-arg value="Dhruv"/>

        <!-- Setter Injection -->
        <property name="course"
                  value="MSc Computer Science"/>

    </bean>

</beans>
```

### Step 6: Create `MainApp.java`

```java

package com.example;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {

    public static void main(String[] args) {

        ApplicationContext context =
            new ClassPathXmlApplicationContext("beans.xml");

        Student student = context.getBean("student", Student.class);

        student.display();

        ((ClassPathXmlApplicationContext) context).close();
    }
}
```

### Step 7: Execute the practical

Open the VS Code terminal in the project root.

Compile the project:

```powershell
mvn clean compile
```

Run the application using the VS Code Java extension's Run action on `MainApp.java`. Alternatively, add the Maven Exec Plugin to `pom.xml` and run the configured main class.

### Expected output

```text
Student Name: Dhruv
Course: MSc Computer Science
```

### Step 8: Understand the injection process

`beans.xml`

Defines the Student bean and its dependencies

Spring IoC Container

Creates the object and injects configured values

Constructor injection

Injects `name` through the constructor

Setter injection

Injects `course` through `setCourse()`

`student.display()`

Prints the injected values

### Result

The Spring IoC Container successfully creates a `Student` bean using XML configuration. Constructor injection supplies the student name, and setter injection supplies the course.
