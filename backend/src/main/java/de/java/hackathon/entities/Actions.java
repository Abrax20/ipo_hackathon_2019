package de.java.hackathon.entities;


import javax.persistence.*;

@Entity
@Table(name = "actions")
public class Actions {

  @Id
  @Column(name = "p_action_id")
  private long id;
  @Column(name = "title")
  private String title;


  public long getId() {
    return id;
  }

  public void setId(long pActionId) {
    this.id = pActionId;
  }


  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  @Override
  public String toString() {
    return "{" +
            "\"id\": " + id +
            ", \"title\": \"" + title + '\"' +
            '}';
  }
}
