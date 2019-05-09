package de.java.hackathon.model;

import de.java.hackathon.entities.Processes;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ProcessesMapper implements RowMapper<Processes> {

    public Processes mapRow(ResultSet rs, int rowNum) throws SQLException {
        Processes processes = new Processes();
        processes.setId(rs.getInt("p_process_id"));
        processes.setTitle(rs.getString("title"));
        processes.setProgress(rs.getString("progress"));
        processes.setStatus(rs.getString("status"));
        return processes;
    }
}

