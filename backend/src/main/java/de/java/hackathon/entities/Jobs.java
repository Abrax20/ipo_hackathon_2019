package de.java.hackathon.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "jobs")
public class Jobs {

  @Id
  @Column(name = "p_job_id")
  private long id;
  @Column(name = "status")
  private String status;


  public long getId() {
    return id;
  }

  public void setId(long pJobId) {
    this.id = pJobId;
  }


  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

}
