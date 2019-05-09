package de.java.hackathon.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "Processes")
public class RaspEntity {

    @Id
    @Column(name = "p_process_id")
    private Integer id;
    @Column(name = "title")
    private String title;
    @Column(name = "progress")
    private String progress;
    @Column(name = "status")
    private String status;

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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String toString(String type) {
        return "{" + "\"type\": " + '\"' + type + '\"' +
                ", \"payload\": " + "{" +
                "\"id\": " + id +
                ", \"title\": \"" + title + '\"' +
                ", \"progress\": \"" + progress + '\"' +
                ", \"status\": \"" + status + '\"' +
                "}}";
    }
}
