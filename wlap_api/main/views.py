from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from .serializers import FacultySerializer
from . import models

class FacultyList(generics.ListCreateAPIView):
    queryset=models.Faculty.objects.all()
    serializer_class = FacultySerializer

class FacultyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.Faculty.objects.all()
    serializer_class = FacultySerializer
