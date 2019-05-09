package de.java.hackathon.entities;

import javax.persistence.*;

@Entity
@Table(name = "processes")
public class Processes {

  @Id
  @Column(name = "p_process_id")
  @GeneratedValue(strategy= GenerationType.IDENTITY)
  private int id;
  @Column(name = "progress")
  private String progress;
  @Column(name = "status")
  private String status;
  @Column(name = "title")
  private String title;


  public int getId() {
    return id;
  }

  public void setId(int pProcessId) {
    this.id = pProcessId;
  }

  public void setTitle(String title) { this.title = title; }

  public String getTitle() { return title; }

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

  @Override
  public String toString() {
    return "Processes{" +
            "id=" + id +
            "title=" + title +
            ", progress='" + progress + '\'' +
            ", status='" + status + '\'' +
            '}';
  }
}
