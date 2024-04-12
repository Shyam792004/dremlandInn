package hms.heaven.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import hms.heaven.exception.UserNotFoundException;
import hms.heaven.model.Post;
import hms.heaven.model.User;
import hms.heaven.repository.PostRepo;
import hms.heaven.repository.UserRepo;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PostController {

    @Autowired
    private PostRepo postRepo;

    @Autowired
    private UserRepo userRepo;

    @PostMapping("/post/{userId}")
    public Post newPost(@PathVariable Long userId, @RequestBody Post newPost) {
        User user = userRepo.findById(userId)
                .orElseThrow(() -> new UserNotFoundException(userId));
        newPost.setUser(user);
        return postRepo.save(newPost);
    }

    @GetMapping("/user/{userId}/posts")
    public List<Post> getAllPostsByUserId(@PathVariable Long userId) {
        User user = userRepo.findById(userId)
                .orElseThrow(() -> new UserNotFoundException(userId));
        return user.getPosts();
    }
}