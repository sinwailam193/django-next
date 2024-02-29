from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from djoser.social.views import ProviderAuthView
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_204_NO_CONTENT
from rest_framework_simplejwt.views import (
    TokenObtainPairView,  # create token view
    TokenRefreshView,  # refresh token view
    TokenVerifyView,  # verify token view
)
from utils.cookies import set_cookie


class CustomProviderAuthView(ProviderAuthView):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)

        if response.status_code == HTTP_201_CREATED:
            access_token = response.data.get("access")
            refresh_token = response.data.get("refresh")
            set_cookie(response, access_token=access_token, refresh_token=refresh_token)

        return response


class CustomTokenObtainPairView(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)

        if response.status_code == HTTP_200_OK:
            access_token = response.data.get("access")
            refresh_token = response.data.get("refresh")
            set_cookie(response, access_token=access_token, refresh_token=refresh_token)

        return response


class CustomTokenRefreshView(TokenRefreshView):
    def post(self, request, *args, **kwargs):
        refresh_token = request.COOKIES.get("refresh")

        if refresh_token:
            # grab the refresh from the cookie and set it as request body
            request.data["refresh"] = refresh_token

        response = super().post(request, *args, **kwargs)

        if response.status_code == HTTP_200_OK:
            access_token = response.data.get("access")
            response.set_cookie(
                "access",
                access_token,
                max_age=settings.AUTH_COOKIE_ACCESS_MAX_AGE,
                path=settings.AUTH_COOKIE_PATH,
                secure=settings.AUTH_COOKIE_SECURE,
                httponly=settings.AUTH_COOKIE_HTTP_ONLY,
                samesite=settings.AUTH_COOKIE_SAMESITE,
            )
            set_cookie(response, access_token=access_token)

        return response


class CustomTokenVerifyView(TokenVerifyView):
    def post(self, request, *args, **kwargs):
        access_token = request.COOKIES.get("access")

        if access_token:
            request.data["token"] = access_token

        return super().post(request, *args, **kwargs)


class LogoutView(APIView):
    def post(self, request, *args, **kwargs):
        response = Response(status=HTTP_204_NO_CONTENT)
        response.delete_cookie("access")
        response.delete_cookie("refresh")

        return response
