import os
from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application
from django.urls import path
from gee_platform.apps.core.routing import websocket_urlpatterns

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'gee_platform.settings')

application = ProtocolTypeRouter({
    'http': get_asgi_application(),
    'websocket': URLRouter(websocket_urlpatterns),
})
