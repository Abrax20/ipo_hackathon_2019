package de.java.hackathon.entities;

import javax.persistence.*;


@Entity
@Table(name = "test_one")
public class TestOneEntity {

    @Id
    private Integer id;
    private String title;
    private String progress;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getProgress() {
        return progress;
    }

    public void setProgress(String progress) {
        this.progress = progress;
    }
}
