from django.test import TestCase, Client
from django.urls import reverse
from other_app.models import OtherModel

class TestOtherModelViews(TestCase):
    def setUp(self):
        self.client = Client()
        self.user = User.objects.create_user(username='testuser', password='testpassword')
        self.other_model = OtherModel.objects.create(user=self.user, name='Test Other Model', description='This is a test other model.')

    def test_other_model_list_view(self):
        response = self.client.get(reverse('other_app:other_model_list'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'Test Other Model')

    def test_other_model_detail_view(self):
        response = self.client.get(reverse('other_app:other_model_detail', args=[self.other_model.pk]))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'Test Other Model')

    def test_other_model_create_view(self):
        self.client.login(username='testuser', password='testpassword')
        response = self.client.get(reverse('other_app:other_model_create'))
        self.assertEqual(response.status_code, 200)
        response = self.client.post(reverse('other_app:other_model_create'), {'name': 'Test Other Model 2', 'description': 'This is a test other model 2.'})
        self.assertEqual(response.status_code, 302)
        self.assertTrue(OtherModel.objects.filter(name='Test Other Model 2').exists())

    def test_other_model_update_view(self):
        self.client.login(username='testuser', password='testpassword')
        response = self.client.get(reverse('other_app:other_model_update', args=[self.other_model.pk]))
        self.assertEqual(response.status_code, 200)
        response = self.client.post(reverse('other_app:other_model_update', args=[self.other_model.pk]), {'name': 'Test Other Model Updated', 'description': 'This is a test other model updated.'})
        self.assertEqual(response.status_code, 302)
        self.other_model.refresh_from_db()
        self.assertEqual(self.other_model.name, 'Test Other Model Updated')

    def test_other_model_delete_view(self):
        self.client.login(username='testuser', password='testpassword')
        response = self.client.get(reverse('other_app:other_model_delete', args=[self.other_model.pk]))
        self.assertEqual(response.status_code, 200)
        response = self.client.post(reverse('other_app:other_model_delete', args=[self.other_model.pk]))
        self.assertEqual(response.status_code, 302)
        self.assertFalse(OtherModel.objects.filter(pk=self.other_model.pk).exists())
