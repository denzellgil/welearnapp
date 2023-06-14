from django.db import models

# Faculty Model

class Faculty(models.Model):
    firstname=models.CharField(max_length=100)
    surname=models.CharField(max_length=100)
    email=models.CharField(max_length=100)
    password=models.CharField(max_length=100)
    faculty_number=models.CharField(max_length=10)

    class Meta:
        verbose_name_plural= "1. Faculties"

# Course Category Model

class CourseCategory(models.Model):
    coursecode=models.CharField(max_length=100)
    coursedescription=models.CharField(max_length=150)
    coursenumber=models.CharField(max_length=100)
    coursesection=models.CharField(max_length=10, blank=True, null=True)
    coursetopic=models.TextField()
    
    class Meta:
        verbose_name_plural= "2. Course Categories"

# Course Model

class Course(models.Model):
    category=models.ForeignKey(CourseCategory, on_delete=models.CASCADE)
    faculty=models.ForeignKey(Faculty, on_delete=models.CASCADE)
    coursedescription=models.CharField(max_length=150)
    coursetopic=models.TextField()

    class Meta:
        verbose_name_plural= "3. Courses"

# Student Model

class Student(models.Model):
    firstname=models.CharField(max_length=100)
    surname=models.CharField(max_length=100)
    email=models.CharField(max_length=100)
    password=models.CharField(max_length=100)
    studentnumber=models.CharField(max_length=10)
    program=models.CharField(max_length=10)
    yearlevel=models.CharField(max_length=10)

    class Meta:
        verbose_name_plural= "4. Students"
    

