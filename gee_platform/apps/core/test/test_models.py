from django.test import TestCase
from .models import Post, Comment

class TestPostModel(TestCase):
    def test_post_creation(self):
        post = Post.objects.create(title='Test Post', content='This is a test post.')
        self.assertTrue(Post.objects.exists())
        self.assertEqual(post.title, 'Test Post')
        self.assertEqual(post.content, 'This is a test post.')

class TestCommentModel(TestCase):
    def test_comment_creation(self):
        post = Post.objects.create(title='Test Post', content='This is a test post.')
        comment = Comment.objects.create(post=post, user='Test User', content='This is a test comment.')
        self.assertTrue(Comment.objects.exists())
        self.assertEqual(comment.post, post)
        self.assertEqual(comment.user, 'Test User')
        self.assertEqual(comment.content, 'This is a test comment.')
