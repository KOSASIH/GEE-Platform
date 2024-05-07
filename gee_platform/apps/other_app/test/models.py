from django.test import TestCase
from other_app.models import OtherModel

class TestOtherModel(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='testpassword')
        self.other_model = OtherModel.objects.create(user=self.user, name='Test Other Model', description='This is a test other model.')

    def test_other_model_creation(self):
        self.assertTrue(OtherModel.objects.exists())
        self.assertEqual(OtherModel.objects.count(), 1)
        self.assertEqual(OtherModel.objects.first().name, 'Test Other Model')

    def test_other_model_user(self):
        other_model = OtherModel.objects.get(name='Test Other Model')
        self.assertEqual(other_model.user.username, 'testuser')

    def test_other_model_str(self):
        other_model = OtherModel.objects.get(name='Test Other Model')
        self.assertEqual(str(other_model), 'Test Other Model')
