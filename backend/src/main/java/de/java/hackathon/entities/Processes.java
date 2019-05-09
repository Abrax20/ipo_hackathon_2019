package de.java.hackathon.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "processes")
public class Processes {

  @Id
  @Column(name = "p_process_id")
  private int id;
  @Column(name = "progress")
  private String progress;
  @Column(name = "status")
  private String status;


  public int getId() {
    return id;
  }

  public void setId(int pProcessId) {
    this.id = pProcessId;
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

  @Override
  public String toString() {
    return "Processes{" +
            "id=" + id +
            ", progress='" + progress + '\'' +
            ", status='" + status + '\'' +
            '}';
  }
}
