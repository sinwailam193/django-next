from django.contrib import admin
from django.urls import path, include
from users.views import TestApiView

urlpatterns = [
    path("test/", TestApiView.as_view()),
    path("admin/", admin.site.urls),
    path("api/", include("djoser.urls")),
    path("api/", include("users.urls")),
]
