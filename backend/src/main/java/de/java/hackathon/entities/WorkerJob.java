package de.java.hackathon.entities;


public class WorkerJob {

  private long fkJobId;
  private long fkProcessIdNow;
  private long fkWorkerNow;
  private long fkProcessIdAfter;


  public long getFkJobId() {
    return fkJobId;
  }

  public void setFkJobId(long fkJobId) {
    this.fkJobId = fkJobId;
  }


  public long getFkProcessIdNow() {
    return fkProcessIdNow;
  }

  public void setFkProcessIdNow(long fkProcessIdNow) {
    this.fkProcessIdNow = fkProcessIdNow;
  }


  public long getFkWorkerNow() {
    return fkWorkerNow;
  }

  public void setFkWorkerNow(long fkWorkerNow) {
    this.fkWorkerNow = fkWorkerNow;
  }


  public long getFkProcessIdAfter() {
    return fkProcessIdAfter;
  }

  public void setFkProcessIdAfter(long fkProcessIdAfter) {
    this.fkProcessIdAfter = fkProcessIdAfter;
  }

}
