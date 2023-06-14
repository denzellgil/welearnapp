from rest_framework import serializers
from . import models

class FacultySerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Faculty
        fields=['id','firstname','surname','email','password','faculty_number']