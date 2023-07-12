from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import status
from django.contrib.auth.models import User
from .serializers import UserSerializer, CommentSerializer
from django.http import Http404, HttpResponse
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.views import ObtainAuthToken
from .models import User
from django.contrib.auth import authenticate, login
from rest_framework.authtoken.models import Token


class SignUpView(APIView):
    def post(self, request, format=None):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()

            # Create a token for the user
            token = Token.objects.create(user=user)
            token.save()
            user.token=token.key
            user.save()

            if user:
                response_data = {
                    'user': serializer.data,
                    'token': token.key
                }
                login(request,user)
                
                return Response(response_data, status=status.HTTP_201_CREATED)
                
                
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response

from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import authenticate

class SignInView(APIView):
    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')
        
        user = authenticate(username=username, password=password)
        
        if user:
            token, created = Token.objects.get_or_create(user=user)
            
            return Response({"token": token.key})
        
        return Response({"error": "Invalid credentials"}, status=400)


from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.response import Response

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.response import Response

from django.http import JsonResponse
from django.contrib.auth import authenticate

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate

from rest_framework.response import Response
from rest_framework.views import APIView
from django.core import serializers

class CheckView(APIView):
    def post(self, request, *args, **kwargs):
        token = request.data.get('token')
        # Find the user based on the token
        user = User.objects.filter(token=token).first()

        if user:
            # Serialize the user object
            serialized_user = serializers.serialize('json', [user])
            # Return the serialized user as a JSON response
            return Response(serialized_user, content_type='application/json')
        else:
            # User not found or invalid token
            return Response("Login")




