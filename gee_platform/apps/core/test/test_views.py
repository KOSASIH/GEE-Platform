from django.test import TestCase, Client
from django.urls import reverse
from .views import PostListView, PostDetailView

class TestPostListView(TestCase):
    def test_post_list_view(self):
        client = Client()
        response = client.get(reverse('post_list'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'core/post_list.html')

class TestPostDetailView(TestCase):
    def test_post_detail_view(self):
        post = Post.objects.create(title='Test Post', content='This is a test post.')
        client = Client()
        response = client.get(reverse('post_detail', args=[post.pk]))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'core/post_detail.html')
        self.assertContains(response, 'This is a test post.')
