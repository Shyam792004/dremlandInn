package hms.heaven.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import hms.heaven.model.Post;

public interface PostRepo extends JpaRepository<Post, Long> {

}
