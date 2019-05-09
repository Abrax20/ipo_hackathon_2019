package de.java.hackathon.entities;


public class Worker {

  private long pWorkerId;
  private String title;
  private String host;


  public long getPWorkerId() {
    return pWorkerId;
  }

  public void setPWorkerId(long pWorkerId) {
    this.pWorkerId = pWorkerId;
  }


  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }


  public String getHost() {
    return host;
  }

  public void setHost(String host) {
    this.host = host;
  }

}
