package de.java.hackathon.entities.repo;

import de.java.hackathon.entities.Processes;
import org.springframework.data.repository.CrudRepository;

public interface ProcessRepo extends CrudRepository<Processes, Integer>  {
}
