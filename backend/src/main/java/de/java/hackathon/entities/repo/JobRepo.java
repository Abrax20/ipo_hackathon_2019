package de.java.hackathon.entities.repo;

import de.java.hackathon.entities.Actions;
import de.java.hackathon.entities.Jobs;
import org.springframework.data.repository.CrudRepository;

public interface JobRepo extends CrudRepository<Jobs, Integer>  {
}
