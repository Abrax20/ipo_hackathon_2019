package de.java.hackathon.entities;


public class ActionProcess {

  private long fkProcessId;
  private long fkActionIdNow;
  private long fkActionIdAfter;


  public long getFkProcessId() {
    return fkProcessId;
  }

  public void setFkProcessId(long fkProcessId) {
    this.fkProcessId = fkProcessId;
  }


  public long getFkActionIdNow() {
    return fkActionIdNow;
  }

  public void setFkActionIdNow(long fkActionIdNow) {
    this.fkActionIdNow = fkActionIdNow;
  }


  public long getFkActionIdAfter() {
    return fkActionIdAfter;
  }

  public void setFkActionIdAfter(long fkActionIdAfter) {
    this.fkActionIdAfter = fkActionIdAfter;
  }

}
