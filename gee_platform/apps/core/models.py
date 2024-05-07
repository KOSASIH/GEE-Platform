from django.db import models
from django.contrib.auth.models import User

class AbstractBaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

class UserProfile(AbstractBaseModel):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(blank=True)
    website = models.URLField(blank=True)
    image = models.ImageField(upload_to='profile_images', blank=True)

    def __str__(self):
        return self.user.username

class Post(AbstractBaseModel):
    title = models.CharField(max_length=200)
    content = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    featured_image = models.ImageField(upload_to='featured_images', blank=True)
    likes = models.ManyToManyField(User, related_name='post_likes', blank=True)

    def __str__(self):
        return self.title

class Comment(AbstractBaseModel):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user.username} on {self.post.title}'
