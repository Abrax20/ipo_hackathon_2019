package de.java.hackathon.model;

public class Consumer {
    private int id;
    private String name;

    public Consumer(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public Consumer() {}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}