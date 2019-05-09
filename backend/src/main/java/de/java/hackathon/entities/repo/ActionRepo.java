package de.java.hackathon.entities.repo;

import de.java.hackathon.entities.Actions;
import org.springframework.data.repository.CrudRepository;

public interface ActionRepo extends CrudRepository<Actions, Integer>  {
}
