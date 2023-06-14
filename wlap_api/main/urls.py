from django.urls import path
from . import views

urlpatterns = [
    path('faculty/', views.FacultyList.as_view()),
    path('faculty/<int:pk>/', views.FacultyDetail.as_view()),
]