package hms.heaven.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import hms.heaven.model.Profile;

public interface ProfileRepo extends JpaRepository<Profile, Long> {

}
